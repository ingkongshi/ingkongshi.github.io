(function(window){var svgSprite='<svg><symbol id="icon-x" viewBox="0 0 1024 1024"><path d="M569.389058 511.983627l293.295929-293.28365c15.871479-15.870456 15.871479-41.516556 0-57.387012-15.871479-15.870456-41.518602-15.870456-57.389058 0L512 454.596615 218.704071 161.313989c-15.871479-15.870456-41.518602-15.870456-57.389058 0-15.871479 15.870456-15.871479 41.516556 0 57.387012L454.609918 511.983627 161.313989 805.267277c-15.871479 15.870456-15.871479 41.516556 0 57.387012 7.872295 7.871271 18.283412 11.93482 28.694529 11.93482 10.411117 0 20.822235-3.935636 28.694529-11.93482L512 569.370639l293.295929 293.28365c7.872295 7.871271 18.283412 11.93482 28.694529 11.93482 10.411117 0 20.823258-3.935636 28.694529-11.93482 15.871479-15.870456 15.871479-41.516556 0-57.387012L569.389058 511.983627 569.389058 511.983627z"  ></path></symbol><symbol id="icon-caidan" viewBox="0 0 1024 1024"><path d="M64 171.563h896v100.882H64zM64 459.207h896v100.87999999999998H64zM64 751.527h896v100.91H64z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)