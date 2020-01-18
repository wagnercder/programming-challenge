var Categories = require('./../../model/categories/categories');

var routeCategories = function(app){
    app.get('/categories', (req, res)=>{
    
        Categories.fetchAll().then(result => {
            res.send(result)
        }).catch(erro => {
            res.status(500).send(erro.message); 
        });
    });    
}

module.exports = routeCategories;
