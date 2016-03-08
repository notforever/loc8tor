/**
 * Created by Carlos on 3/7/2016.
 */
/* Get Home Page */
module.exports.index =function(req, res, next){
    res.render('index', {title:'Express'});
};