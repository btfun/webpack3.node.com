export default {
   createUUid: ()=>{
         return Math.random().toString(36).substr(2, 20);
    },
    encode : function(str) {
      //base64加密
      return window.btoa(unescape(encodeURIComponent(str)));
    },
    decode : function(str) {
      //base64解密 atob 拉丁字符到utf-8字符的转换 escape函数, 则会对拉丁字符集文本进行百分号编码
      return decodeURIComponent(escape(window.atob(str)));
    },
debounce(func, wait, immediate) {
  //降频函数
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
},
getCookie:(c_name)=>{
  if (document.cookie.length>0){
    var c_start=document.cookie.indexOf(c_name + "=");
    if (c_start!=-1){

      c_start=c_start + c_name.length+1;
      var c_end=document.cookie.indexOf(";",c_start);

      if (c_end==-1) c_end=document.cookie.length;

        return unescape(document.cookie.substring(c_start,c_end));
      }
    }
   return "";
},
setCookie:(c_name,value,expiredays)=>{
  //根目录设置cookie
  var exdate=new Date();
  exdate.setDate(exdate.getDate()+expiredays);
  document.cookie=c_name+ "=" +escape(value)+
  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/";
},
clearCookie:function(key,domain){
  //clean all cookie
  var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    var options={
      path:'/',
      domain: null
    };
    if(location.hostname.indexOf('192.168') > -1){
        options.domain=null;//
    }
    var date=new Date();
     date.setTime(date.getTime()-100000);
      for (var i = keys.length; i--;){
        if(key){
          if(key==keys[i]){
            (document.cookie = [
                encodeURIComponent(key), '=',
                '; expires='+date.toGMTString(),
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
          }
        }else{
          (document.cookie = [
              encodeURIComponent(key), '=',
              '; expires='+date.toGMTString(),
              options.path    ? '; path=' + options.path : '',
              options.domain  ? '; domain=' + options.domain : '',
              options.secure  ? '; secure' : ''
          ].join(''));
        }

      }
  }
},
getStyle: (element, attr, NumberMode = 'int') => {
/**
 * 获取style样式
 */
    let target;
    // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
    if (attr === 'scrollTop') {
        target = element.scrollTop;
    }else if(element.currentStyle){
        target = element.currentStyle[attr];
    }else{
        target = document.defaultView.getComputedStyle(element,null)[attr];
    }
    //在获取 opactiy 时需要获取小数 parseFloat
    return  NumberMode == 'float'? parseFloat(target) : parseInt(target);
},
loadMore :(element, callback) => {
  /**
 * 页面到达底部，加载更多
 */
	let windowHeight = window.screen.height;
	let height;
	let setTop;
	let paddingBottom;
	let marginBottom;
    let requestFram;
    let oldScrollTop;

    document.body.addEventListener('scroll',() => {
       loadMore();
    }, false)
    //运动开始时获取元素 高度 和 offseTop, pading, margin
	element.addEventListener('touchstart',() => {
        height = element.offsetHeight;
        setTop = element.offsetTop;
        paddingBottom = getStyle(element,'paddingBottom');
        marginBottom = getStyle(element,'marginBottom');
    },{passive: true})

    //运动过程中保持监听 scrollTop 的值判断是否到达底部
    element.addEventListener('touchmove',() => {
       loadMore();
    },{passive: true})

    //运动结束时判断是否有惯性运动，惯性运动结束判断是非到达底部
    element.addEventListener('touchend',() => {
       	oldScrollTop = document.body.scrollTop;
       	moveEnd();
    },{passive: true})

    const moveEnd = () => {
        requestFram = requestAnimationFrame(() => {
            if (document.body.scrollTop != oldScrollTop) {
                oldScrollTop = document.body.scrollTop;
                loadMore();
                moveEnd();
            }else{
            	cancelAnimationFrame(requestFram);
            	//为了防止鼠标抬起时已经渲染好数据从而导致重获取数据，应该重新获取dom高度
            	height = element.offsetHeight;
                loadMore();
            }
        })
    }

    const loadMore = () => {
        if (document.body.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom) {
            callback();
        }
    }
}



}
