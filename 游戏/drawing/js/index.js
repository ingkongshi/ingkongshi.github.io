window.onload=function(){
	var canvas=document.querySelector('canvas');  
	var mask=document.querySelector('.mask');    
	var era=document.querySelector('.eraser');
	var type=document.querySelector('[name=type]');
	var input1=document.querySelector("[name=fill]");
	var input2=document.querySelector("[name=stroke]");
	var option=document.querySelector('[name=option]');
	var num=document.querySelector('[name=num]');   //获取多边形的边数；
	var nums=document.querySelector('[name=nums]');

	class ps{
		constructor(canvas,mask,era){
			this.canvas=canvas;    //画布对象
			this.ctx=canvas.getContext("2d");  //canvas的2d对象
			this.mask=mask;    //遮罩
			this.style='fill';   
			this.type='line';  //设置默认的绘制类型
			this.num='5';   //多边形的边数
			this.nums='5'
			this.historyed=[];  //储存历史记录
			this.lineWidth=3;  //设置线宽样式
			this.flag=true ;   //设置橡皮擦是否进行清除
			this.era=era;   //设置橡皮擦
			this.fillStyle="#000";   //设置填充的默认样式
			this.strokeStyle="#000";  //设置边框的默认样式
		}
		init(){  //初始化样式
			this.ctx.fillStyle=this.fillStyle;   
			this.ctx.strokeStyle=this.strokeStyle;  
		}
		draw(){  //绘制图形
			var that=this;  //实例化对象
			that.mask.onmousedown=function(e){
				var dx=e.offsetX;   //获取鼠标距离事件源左侧的距离
				var dy=e.offsetY;  //获取鼠标距离事件源顶部的距离
				if(that.type=="pencil"){
					that.ctx.moveTo(dx,dy);
				}
				that.mask.onmousemove=function(e){
					var mx=e.offsetX;
					var my=e.offsetY;
					that.ctx.clearRect(0, 0,that.canvas.width,that.canvas.height);  //清空画布
					if(that.historyed.length>0){
						that.ctx.putImageData(that.historyed[that.historyed.length-1],0,0); //从历史记录中上一次的画布样式；
					}
					that.init();  //样式的初始化
					if (that.type!=="pencil") {
							that.ctx.beginPath();  //开启路径
					}				
					that[that.type](dx,dy,mx,my);  //调用实例化对象中的相应的绘制方式如画圆画矩形；
				}	
				document.onmouseup=function(){
					that.historyed.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height));//将当前的画布状态保存到历史记录中
					that.mask.onmousemove=null;
					this.onmouseup=null;
				}
			}
		}
		fanxiang(data){  //对当前画布内容进行反向处理
			console.log(data)
			var data =this.historyed[this.historyed.length-1];
			for (var i=0;i<data.width*data.height;i++) {
						data.data[i*4+0]=255-data.data[i*4+0];
						data.data[i*4+1]=255-data.data[i*4+1];
						data.data[i*4+2]=255-data.data[i*4+2];
						data.data[i*4+3]=255;
					};
					this.ctx.putImageData(data,0,0);
					this.historyed.push(this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height));
		}
		grey(data){  //对当前画布内容进行灰度处理
			var data =this.historyed[this.historyed.length-1];
			for (var i=0;i<data.width*data.height;i++) {
				var grey=0.299*data.data[i*4]+0.579*data.data[i*4+1]	+0.114*data.data[i*4+2];//将每一个像素点设置为相应的的灰度值
				data.data[i*4]=grey;   //rgb中的r
				data.data[i*4+1]=grey;  //rgb中的g
				data.data[i*4+2]=grey; //rgb中的b
			}
			this.ctx.putImageData(data,0,0);
			this.historyed.push(this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height));
		}
		masaike(num=10){   //马赛克处理
			var data =this.historyed[this.historyed.length-1];
			var wnum=data.width/num;   //多少行    获取行数
			var hnum=data.height/num;  //多少列
			for (var i=0;i<hnum;i++) {
				for (var j=0;j<wnum;j++) {
					var dataobj=this.ctx.getImageData(j*num,i*num,num,num);  //获取相应位置的宽度与高度为num，区域中的像素信息
					var r=0;
					var g=0;
					var b=0;
					//将相应区域中的rgb进行累加
					for (var e=0;e<dataobj.width*dataobj.height;e++) {
						r+=dataobj.data[e*4];
						g+=dataobj.data[e*4+1];
						b+=dataobj.data[e*4+2];
					}
					//对累加的rgb的结果进行取相应的平均值
					var r1=r/(dataobj.width*dataobj.height);
					var g1=g/(dataobj.width*dataobj.height);
					var  b1=b/(dataobj.width*dataobj.height);		
					//将相应区域中的每一像素的rgb值设置为r1，g1，b1
					for (var k=0;k<dataobj.width*dataobj.height;k++) {
						dataobj.data[k*4]=r1;
						dataobj.data[k*4+1]=g1;
						dataobj.data[k*4+2]=b1;
					}	
					//将处理后的像素信息绘制到相应的位置
					this.ctx.putImageData(dataobj,j*num,i*num);					
				}				
			}
			this.historyed.push(this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height));
		}
		pencil(dx,dy,mx,my){//铅笔
			this.ctx.lineTo(mx,my);
			this.ctx[this.style]();
		}
		line(dx,dy,mx,my){   //划线
			this.ctx.moveTo(dx,dy);
			this.ctx.lineTo(mx,my);
			this.ctx[this.style]();   //进行相应的方式的绘制（填充或者边框)
		}
		rect(dx,dy,mx,my){  //绘制矩形
			this.ctx.rect(dx, dy,mx-dx,my-dy);
			this.ctx[this.style]();
		}
		circle(dx,dy,mx,my){  //绘制圆
			var r=Math.sqrt(Math.pow((mx-dx),2)+Math.pow((my-dy),2));  //获取圆的半径
			this.ctx.arc(dx,dy,r,0,Math.PI*2);		
			this.ctx[this.style]();
			this.ctx.stroke();
		}
		poly(dx,dy,mx,my){  //绘制多边形
			var r=Math.sqrt(Math.pow((mx-dx),2)+Math.pow((my-dy),2));
			var angle=(2*Math.PI)/this.num;
			for (var i=0;i<this.num;i++) {
			this.ctx.lineTo(dx+r*Math.cos((angle*i)-Math.PI/2),dy+r*Math.sin((angle*i)-Math.PI/2));			
			}
			this.ctx.closePath();
			this.ctx[this.style]();
		}
		star(dx,dy,mx,my){//画多角星
			var r=Math.sqrt(Math.pow(mx-dx,2)+Math.pow(my-dy,2));
			for (var i = 0; i < this.nums; i++) {
				this.ctx.lineTo(dx+r*Math.cos((Math.PI*2/this.nums)*i-Math.PI/2),dy+r*Math.sin((Math.PI*2/this.nums)*i-Math.PI/2));
				this.ctx.lineTo(dx+(r*Math.cos((Math.PI*2/this.nums)*i-Math.PI/2+Math.PI/this.nums)/3),dy+r*Math.sin((Math.PI*2/this.nums)*i-Math.PI/2+Math.PI/this.nums)/3);
			}
			this.ctx.closePath();
			this.ctx[this.style]();
		}
		text(dx,dy){
			this.ctx.fillText('',dx,dy);
		}
		eraser(){  //橡皮擦工具
			var that=this;
			that.mask.onmousedown=function(){
				that.flag=true;
				that.mask.onmousemove=function(e){
					var mx=e.offsetX;
					var my=e.offsetY;
					var x=mx-that.era.offsetWidth/2;  //使鼠标放置在橡皮擦的中心位置
					var y=my-that.era.offsetHeight/2;  //限制橡皮擦的擦除位置
					if(x<0){x=0};
					if(y<0){y=0};
					if(x>that.canvas.width-that.era.offsetWidth){
						x=that.canvas.width-that.era.offsetWidth;
					}
					if(y>that.canvas.height-that.era.offsetHeight){
						y=that.canvas.height-that.era.offsetHeight;
					}
					//橡皮擦跟随鼠标移动
					that.era.style.left=x+'px';
					that.era.style.top=y+'px';
					if(that.flag){  //当开关开启时才进行相应的擦除
						that.ctx.clearRect(x, y, that.era.offsetWidth,that.era.offsetHeight);					
					}
				}
			}
			this.mask.onmouseup=function(e){		 		
				that.flag=false;	 //将开关关闭 ，停止擦除
				that.historyed.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height));
			}
		}	
	}
	var obj=new ps(canvas,mask,era);
	obj.draw()
	type.onchange=function(){
		if(this.value=='eraser'){
			obj.eraser();
			era.style.display="block";
		}else if(this.value=='fanxiang'||this.value=='grey'||this.value=='masaike'){
			obj[this.value]();
		} else{
			obj.type=this.value;
			obj.draw();
			era.style.display="none";
		}
			
	}
		//更改画布背景色
		var can=document.querySelector('[name=can]');
		can.onchange=function(){  //背景色
			canvas.style.backgroundColor=this.value;
		}
		
//更改画布大小		
//		var canw=document.querySelector('[name=canwidth]');
//		var canh=document.querySelector('[name=canheight]');
//		canw.onmousewheel=canw.onchange=function(){			
//			canvas.width=this.value;
//			mask.style.width=this.value;
//			kk.style.width=this.value+20+"px";
//		}
//		canh.onmousewheel=canh.onchange=function(){			
//			canvas.height=this.value;
//			mask.style.width=this.value;
//			kk.style.height=this.value+70+"px";
//		}
//		
		input1.onchange=function(){  //填充色
			obj.fillStyle=this.value;
		}
		input2.onchange=function(){  //线框色
			obj.strokeStyle=this.value;
		}
		option.onchange=function(){
			obj.style=this.value;
		}

		num.onmousewheel=num.onchange=function(){			
			obj.num=this.value;
		}
		nums.onmousewheel=nums.onchange=function(){			
			obj.nums=this.value;
		}	
		var input =document.querySelector('[name=files]');
		input.onchange=function(){
			var file=this.files[0];
			var reader=new FileReader();
			reader.readAsDataURL(file);
			reader.onload=function(){
				var img=new Image();
				img.src=this.result;
				img.onload=function(){
					obj.ctx.drawImage(this,0,0);
					obj.historyed.push(obj.ctx.getImageData(0,0,canvas.width,canvas.height));					
				}
			}

		}
		var che =document.querySelector('[name=che]');
		che.onclick=function(){
			obj.ctx.clearRect(0,0,canvas.width,canvas.height);
			obj.historyed.pop();
			if(obj.historyed.length==0){
				return;
			}
			obj.ctx.putImageData(obj.historyed[obj.historyed.length-1],0,0)
		}

	var clear=document.querySelector('.clear');		//清除画布
	clear.onclick=function(){
			obj.historyed=[];
			obj.ctx.clearRect(0,0,500,500);
			obj.historyed.push(obj.ctx.getImageData(0,0,500,500));
	}	
	
	var savebox=document.querySelector(".savebox");	//保存画布
	var save=document.querySelector('[name=save]');
		save.onclick=function(){
		var url=obj.canvas.toDataURL("image/jpg");
		var img=new Image();
		img.src=url;
		var link=document.createElement("a");
		img.onload=function(){
			link.href=this.src;
			link.download="canvas.jpg";
			link.appendChild(img);
			savebox.appendChild(link);
		}
		savebox.style.transform="scale(1,1)";
		savebox.style.transition="1s";

	}
	
	var moved=document.querySelector('.move');
	var set=document.querySelector('.set')
	console.log(set)
	moved.onmousedown=function(e) {
		var mx=e.offsetX;
		var my=e.offsetY;
		console.log(mx);
		if (e.preventDefault) {  //清除浏览器的默认行为；
					e.preventDefault();
			}		
		move(mx,my);
	}		
	function move(mx,my){	
		var boxw=set.offsetWidth;  //被拖拽盒子的真实宽度
		var boxh=set.offsetHeight;
		var ow=window.innerWidth;
		var oh=window.innerHeight;
		window.onresize=function(){ //监控窗口大小的改变
			 ow=window.innerWidth;
			 oh=window.innerHeight;
		}
		set.onmousedown=function(q){   //q为事件对象
			var dw=q.offsetX+mx;    //当鼠标按下时，获取鼠标到事件源左侧的距离
			var dh=q.offsetY+my;
			document.onmousemove=function(e){
				var dx=e.clientX;  //获取鼠标移动时，鼠标距离窗口左侧的距离；
				var dy=e.clientY;
				var x=dx-dw;   //被拖拽盒子在X轴上移动的距离；
				var y=dy-dh;
				if (x>ow-boxw) {  //限定X的最大范围：窗口的宽度减去box的宽度
					x=ow-boxw;
				}else if(x<0){
					x=0;
				}
				if (y>oh-boxh) {
					y=oh-boxh;
				}else if(y<0){
					y=0;
				}	
				set.style.left=x+'px';
				set.style.top=y+'px';		
				if (e.preventDefault) {  //清除浏览器的默认行为；
					e.preventDefault();
				}
			}
		}
		document.onmouseup=function(){
			set.onmousedown=null;			
			document.onmousemove=null;//当鼠标抬起时，清空document对象上注册的onmousemove事件
		}		
	}	
	
	
	var  kk=document.querySelector('.kk');	
	kk.onmouseenter=function(){
		set.style.visibility='visible';
	}	
	
	
}
