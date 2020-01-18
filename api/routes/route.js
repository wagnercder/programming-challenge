var route_title = require('./titles/titles.route');
var route_name = require('./names/names.route');
var route_categories = require('./categories/categories.route');

//function to add routers to REST
var router = function(app){
    route_title(app);
    route_name(app);
    route_categories(app);
};

module.exports = router;
