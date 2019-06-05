var express = require('express');
var router = express.Router();
var dateV=new Date();
var timeStamp= 'v='+dateV.getFullYear()+(dateV.getMonth()+1)+
                  dateV.getDate()+dateV.getHours()+dateV.getMinutes();

/* GET home page. */
router.get('/', function(req, res, next) {
  var hostname=req.hostname.replace('wx','static');
  var staticUrl= `//${hostname}/wireless/gzh`;
  console.log('------',hostname)
  if(hostname.indexOf('192')>-1 || hostname.indexOf('127')>-1)staticUrl='';

  res.render( 'test/app', {
       version: timeStamp,
       staticUrl: staticUrl
  });

});

var callback=function (req, res, next){
  var route=req.params.route,
      route1=req.params.route1,
      route2=req.params.route2,
      view=req.query.view||'app';

      var hostname=req.hostname.replace('wx','static');
      var staticUrl= `//${hostname}/wireless/gzh`;
      console.log('------',hostname)
      if(hostname.indexOf('192')>-1 || hostname.indexOf('127')>-1)staticUrl='';

      if(route && route1 && route2){
        res.render( `${route}/${route1}/${route2}/${view}`, {
             version: timeStamp,
             staticUrl: staticUrl
        });
      }else if(route && route1){
        res.render( `${route}/${route1}/${view}`, {
             version: timeStamp,
             staticUrl: staticUrl
        });
      }else if(route){
        res.render( `${route}/${view}`, {
             version: timeStamp,
             staticUrl: staticUrl
        });
      }

}

router.get('/:route', callback);
router.get('/:route/:route1', callback);
router.get('/:route/:route1/:route2', callback);


module.exports = router;
