	var con;   //要添加的内容
	var ti;     //提交按钮
	var clear    //清空按钮
	var leftsheet;       //左边loading框
	var rightsheet	 //右边success框
	function getdata(){
		var arr=localStorage.data?JSON.parse(localStorage.data):[];    //JSON.parse（）解析一个JSON字符串，
		return arr;
	}
	function setdata(value){
		var arr =getdata();
		arr.push({con:value,status:false});
		localStorage.data=JSON.stringify(arr);   //JSON.stringify(arr)将一个  JavaScript 值转换为一个 JSON 字符串
	}
	function changes(index,bool){
		var arr=getdata();
		arr[index].status=bool;   //?
		localStorage.data=JSON.stringify(arr);
		writedata();
	}
	function del(index){
		var arr=getdata();
		arr.splice(index,1);
		localStorage.data=JSON.stringify(arr);
		writedata();
	}
	function writedata(){
		var arr =getdata();
		var now='';
		var old='';
		arr.forEach(function(val,index){
			if (val.status==false) {
				now+=`
				<li index=${index}>
				<input type="checkbox" onclick=changes(${index},true)>
				<p>${val.con}</p>
				<div class="cancel checkbox" onclick=del(${index})>×</div>
				</li>
				`;
			} else if(val.status==true){
				old+=`
				<li index=${index}>
				<input type="checkbox" checked="true" onclick=changes(${index},false)>
				<p>${val.con}</p>
				<div class="cancel checkbox" onclick=del(${index})>×</div>
				</li>`;
			}
		})
		leftsheet.innerHTML=now;
		rightsheet.innerHTML=old;
	}
window.onload=function(){
	con=document.querySelector('input[type=text]');   //要添加的内容
	ti=document.querySelector('input[name=ti]');     //提交按钮
	clear=document.querySelector('input[name=clear]')    //清空按钮
	leftsheet=document.querySelector('.leftSheet');       //左边loading框
	rightsheet=document.querySelector('.rightSheet');	 //右边success框
	ti.onclick=function(){
		if(con.value==""){
			alert("内容不能为空");
		} else if(con.value.trim()){
			var li =document.createElement('li');
			li.innerHTML=`
				<input type="checkbox">
				<p>${con.value}</p>
				<div class="cancel checkbox">×</div>
				`;
			leftsheet.appendChild(li);
			setdata(con.value);
			writedata();
			con.value='';
		}
	}
	clear.onclick=function(){
		localStorage.clear();
		writedata();
	}
	window.onload=writedata;	
}
