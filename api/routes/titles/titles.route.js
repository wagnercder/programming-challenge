var Titles = require('../../model/titles/titles');

var routeTitle = function(app){
    app.post('/titles', (req, res) => {
        console.log(req.body);
        
        if(req.body.year > -1){

            //Return Top 10
            new Titles().query(function (qb){
                qb.where('titles.average_rating_title', '>=', 6);
                qb.where('titles.category_id', '=', req.body.category_id);
                qb.where('titles.start_year_title', '=', req.body.year);
                qb.orderBy('titles.average_rating_title','DESC');
                qb.limit(10);

            }).fetchAll( {withRelated: ['genres', 'categories']} ).then((result) => {
                console.log(JSON.stringify({"data" : result}));

                res.send(JSON.stringify({"data" : result}))
            });

        }else{

            //Return All
            new Titles().query(function (qb){
                qb.where('titles.average_rating_title', '>=', 6);
                qb.where('titles.category_id', '=', req.body.category_id);
                qb.limit(req.body.limit);
                qb.offset(req.body.offset);

            }).fetchAll({withRelated: ['genres', 'categories']}).then((result) => {
                console.log(JSON.stringify(result))
                res.send(JSON.stringify({"data" : result}))
            });
        }        
    });    
}

module.exports = routeTitle;
