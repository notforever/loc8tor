/**
 * Created by Carlos on 3/9/2016.
 */

/* Get home page */
module.exports.homeList=function(req, res, next){
    res.render('index', {title:'Home'});
};
/* Get location info page */
module.exports.locationInfo=function(req, res, next){
    res.render('index', {title:'Location Info'});
};
/* Get add review page */
module.exports.addReview=function(req, res, next){
    res.render('index', {title:'Add Review'});
};


