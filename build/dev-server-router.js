let path = require('path');
let fs = require('fs');
let mkdirp = require('mkdirp');

module.exports = function(express, compiler){

  let router = express.Router();
  /**
  *********************************************
  *
  * 主路由命名空间
  *
  **********************************************
  */

  //主业务路由
  router.get('/', (req, res) => {
    util(res, 'test/app.html',{
      test:'success!!!'
    });
  });


  var callback=function (req, res, next){
    var route=req.params.route,
        route1=req.params.route1,
        route2=req.params.route2,
        view=req.query.view||'app';

        if(route && route1 && route2){
          util(res, `${route}/${route1}/${route2}/${view}.html`,{
            test:'success!!!'
          });
        }else if(route && route1){
          util(res, `${route}/${route1}/${view}.html`,{
            test:'success!!!'
          });
        }else if(route){
          util(res, `${route}/${view}.html`,{
            test:'success!!!'
          });
        }

  }

  router.get('/:route', callback);
  router.get('/:route/:route1', callback);
  router.get('/:route/:route1/:route2', callback);



   //创建目录
    var mkdirs = function(fileInfo, callback) {
        fs.exists(fileInfo.dir, function(exists) {
          exists ? callback():mkdirp(fileInfo.dir, () => { mkdirs(fileInfo,callback) })
        });
    };

    var util=  (res, template, param) => {
      param=param||{};
      var env='dev';

      if (env == 'dev') {
        //  'server/views/' 这个路径要跟 getHTMLEntry 入口文件配置相匹配
        let filename = compiler.outputPath  + 'server/views/'+template;
        console.log('filename==',filename)
         //从内存中读取模板文件(webpackHtmlPlusn输出路径（注意相对路径，路径格式）)
        compiler.outputFileSystem.readFile(filename, function(err, result) {
          if(err){
            console.error( '> 错误信息：', err.code, err.path, err.message )
            res.locals.message = err.path + ' - '+ err.message;
            res.locals.error = err;
            res.status(404);
            res.render('error');
            return;
          }
          let fileInfo = path.parse(filename); //载体页面路径
          fileInfo.dir=path.join(__dirname,'..', fileInfo.dir)
          //创建目录
          mkdirs(fileInfo, () => {
            //绝对路径
            var filedir=path.join(fileInfo.dir,fileInfo.base)
            //创建层次文件夹后，立即创建对应的文件
            fs.writeFile(filedir, result,()=>{
              //渲染输出
              res.render(template,param);
            });
          });
        });
      } else {
        res.render(template,param);
      }
    }


  return router
};
