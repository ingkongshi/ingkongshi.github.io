// window.onload=function(){
	function getClass(classname,obj) {
		var obj = obj ||document;
		if (obj.getElementsByClassName) {
			return obj.getElementsByClassName(classname);
		}else{
			var all = obj.getElementsByTagName("*");
			var arr = [];
			for (var i = 0; i < all.length; i++) {
				if (check(all[i],classname)) {
					arr.push(all[i]);
				}
			}
			return arr;
		}
	}	

	function check(val,name){
	 	var newarr = val.className.replace(/^\s+|\s+$/g,'').spilit(" ");
	 	for (var j = 0; j < newarr.length; j++) {
	 		if (val==name) {
	 			return true;
	 		}
	 	}
	 	return false;
	} 
// }

//*****************************************************************************************************************
	
//	获取多种元素的函数
//	.box   
//	函数的名称$
//	形参:select  选择的元素   obj 父对象
	
	function $ (select,obj=document) {
		if (typeof select=='string') {  //判断select是否为字符串;
		   select=select.trim();          //str.trim（）       将字符串左右两端的  空格去掉
			if (select.charAt(0)=='.') {          //str.charAt(位置)   返回指定位置的字符；
				return  obj.getElementsByClassName(select.slice(1));   //select.slice(1) 将字符串的第一个字符去除掉
			}else if (select.charAt(0)=='#') {        //判断select的第一个字符是否为#
			return obj.getElementById(select.slice(1));
			}else if (/^[a-z|1-6]{1,10}/.test(select)) {
			return obj.getElementsByTagName(select);
			} 
		}else if(typeof select==='function'){    //判断是否为函数；
			window.onload=function(){			
				select();
			}
		}
	}
