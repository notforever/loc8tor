/**
 * Created by Carlos on 3/7/2016.
 */
/* Get Home Page */
module.exports.about =function(req, res, next){
    res.render('index', {title:'About'});
};