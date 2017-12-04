window.onload=function(){
	var mask=document.querySelector(".mask");
	var lise1=document.querySelector(".mask li");
	var lise2=document.querySelector(".mask li:last-child");
	var warn=document.querySelector(".warning");
	var button=document.querySelector(".warning div");
	var title=document.querySelector(".warning span");
	var pause=document.querySelector(".grade li:nth-child(4)");
	var start=document.querySelector(".grade li:nth-child(3)");
	var alert=document.querySelector(".alert");
	var fenshu=document.querySelector(".fenshu");
	var dengji=document.querySelector(".dengji");
	var box=document.querySelector(".box");
	for(var i=0;i<25;i++){                //做出25行25的li并且添加到ul里面，
		for(var j=0;j<25;j++){
			var li=document.createElement("li");
			li.id="a"+i+"_"+j;               //记录每个格子的位置，使用id名称id名称不能以数字开头所有添加了个a
			li.className="rect";
			box.appendChild(li);     //把每个li放到盒子里面
		}
	}
	var flag=true;
	var snake=[{x:13,y:12},{x:13,y:13},{x:13,y:14}];
	function createsnake(snake){                     //创建蛇
		for(var i=0;i<snake.length;i++){
			var id="#a"+snake[i].x+"_"+snake[i].y;
			document.querySelector(id).style.backgroundColor="red";
			document.querySelector(id).style.borderRadius="50%";
			var head=document.querySelector('#a'+snake[snake.length-1].x+'_'+snake[snake.length-1].y);//蛇头位置
			head.style.background='black'; 
			head.style.borderRadius='50%';
		}
		flag=true;
	}
	createsnake(snake);
	function createfood(snake){                      
	//创建食物，随机取到食物的位置，而且要和蛇的位置判断，不能重复
		var x=Math.floor(Math.random()*25);         //食物的取值0-24；向下取整，可以取到0，取不到25；
		var y=Math.floor(Math.random()*25);
		while(check(snake,x,y)){               
			x=Math.floor(Math.random()*25);
			y=Math.floor(Math.random()*25);
		}
		document.querySelector("#a"+x+"_"+y).style.backgroundColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`; 
	//满足条件的食物改变背景色
		return {x,y};                 //把食物的位置保存
	}
	var food=createfood(snake)
	function check(snake,x,y){                        //判断食物的xy和蛇的位置
		return snake.some(function(val,index){        
		//some判断，如何有和蛇的位置重复的，返回true，重新取食物的xy值；
			return val.x-x==0 && val.y-y==0;
		})
	}
	var direction="right";
	var num=0; //分数
	var level=1;//等级
	var time=500;//默认时间
	function move(){
		if(direction=="right"){
			var newx=snake[snake.length-1].x;
			var newy=snake[snake.length-1].y+1;
		}
		else if(direction=="top"){
			var newx=snake[snake.length-1].x-1;
			var newy=snake[snake.length-1].y;
		}
		else if(direction=="bottom"){
			var newx=snake[snake.length-1].x+1;
			var newy=snake[snake.length-1].y;
		}
		else if(direction=="left"){
			var newx=snake[snake.length-1].x;
			var newy=snake[snake.length-1].y-1;
		}
		if(newx==25||newx==-1||newy==-1||newy==25||check(snake,newx,newy)){
			clearInterval(t);
			alert.style.display="block";
			fenshu.innerHTML=num;
			dengji.innerHTML=level;
			return;
		}
		snake.push({x:newx,y:newy});
		if(newx==food.x&&newy==food.y){
			food=createfood(snake); 
			num++;
			document.querySelector(".grade li").innerHTML=`分数：<span>${num}</span>`
			if(num%2==0){
				level++;
				document.querySelector(".grade li:nth-child(2)").innerHTML=`等级：<span>${level}</span>`;
				time-=50;
				if (time<=0) {
					time=50;
				};
				clearInterval(t);
				t=setInterval(function(){
					move();
				},time);
			}		
		}else{
			var first=snake.shift();
			document.querySelector("#a"+first.x+"_"+first.y).style.backgroundColor="rgba(245,245,245,.0)";
			document.querySelector("#a"+first.x+"_"+first.y).style.borderRadius='0';
		 }
		  createsnake(snake);
	}	
	document.onkeydown=function(e){
		if(!flag){
			return;
		}
		flag=false;
		switch(e.keyCode){
			case 37:if(direction!="right"){
				direction="left";
			}break;
			case 38:if(direction!="bottom"){
				direction="top";
			}break;
			case 39:if(direction!="left"){
				direction="right";
			}break;
			case 40:if(direction!="top"){
				direction="bottom";
			}break;
			case 32:
			clearInterval(t);
		}		
	}
	var t;
	start.onclick=function(){
		 t=setInterval(function(){
			move();
		},time);
	}
	pause.onclick=function(){
		clearInterval(t);
	}
	alert.onclick=function(){
		 location.reload();	
		alert.style.display="none";
	}
	
	
	
}
