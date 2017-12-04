window.onload=function(){
	var btnleft =getClass('box_btnleft')[0];
	var btnright =getClass('box_btnright')[0];
	var box_banner=getClass('box_banner')[0];
	var bots=getClass('btn');
	var images=getClass('ss');
	var num=0;
	function move(type='r') {
		if (type=='l') {
			num--
			if (num<0) {
				num=bots.length-1;
			} 
			}else if(type=='r'){
				num++;
				if (num>=bots.length) {
				num=0;
				}
			}		
		for (var i=0;i<bots.length;i++) {
			bots[i].style.backgroundColor="#999";
			images[i].style.opacity=0;
			images[i].style.zIndex=1;
		}
		images[num].style.zIndex=2;
		bots[num].style.backgroundColor="#fff";
		images[num].style.opacity=1;
	}
	var t =setInterval(function(){
		move();
	},1800)
	box_banner.onmouseenter=function(){
		clearInterval(t);
	}
	box_banner.onmouseleave=function(){
		t=setInterval(function(){
			move();
		},1800)
	}
	btnleft.onclick=function(){
		move('l')
	}
	btnright.onclick=function(){
		move('r')
	}
	Array.from(bots).forEach(function(val,n){
		val.onclick=function(){
			num=n-1;
			move()
		}
		val.onmouseenter=function(){
			bots[num].style.backgroundColor="#fff";
		}
		val.onmouseleave=function(){
			bots[num].style.backgroundColor="#fff";
		}
	})		
//	banner轮播
	function  ggg(){
		var rights =document.getElementsByClassName("rights")[0];
		var items=rights.getElementsByTagName('a');
		var b2_bottom=document.getElementsByClassName("b2_bottom")[0];
		var lise1= b2_bottom.getElementsByClassName("b2")[0];
		var lise2= b2_bottom.getElementsByClassName("b2")[1];
		var ff=true;
		function  dd(){
			if(ff){
				lise1.style.left='-1226px';
				lise2.style.left='0';
				items[0].style.color='black';
				items[1].style.color='#ccc';			
			}else {
				lise1.style.left='0';
				lise2.style.left='1226px';
				items[0].style.color='#ccc';
				items[1].style.color='black';
			}
			ff=!ff;			
		}
		var f=setInterval(function(){
			 dd();
		},2000);
		rights.onmouseenter=function(){
			clearInterval(f);
			if (ff==true) {
				items[1].style.color='#ff6700';
			}else{
				items[0].style.color='#ff6700';
			}
		}
		rights.onmouseleave=function(){
			f=setInterval(function(){
					 dd();
			},2000)
		}
		items[1].onclick=function(){
			dd()
		}//右按钮
		items[0].onclick=function(){
			dd()
		}//左按钮				
	}		
	ggg()
//box  b1选项卡
	var box2_right=getClass('box2_right')[0];
	var qq=box2_right.getElementsByTagName('a')
	var content=getClass('content')[0];
	var ww=content.getElementsByClassName('co1_1')	
	Array.from(qq).forEach(function(val,index){
		val.onmouseenter=function(){
			for(var i=0;i<qq.length;i++){
				qq[i].style.color="#333";
				qq[i].style.textDecoration="none";
				ww[i].style.display="none";
			}
				this.style.color="#FF6700";	
				ww[index].style.display="block";				
		}
	})
//选项卡	
	var box2_right1=getClass('box2_right1')[0];
	var ee=box2_right1.getElementsByTagName('a')
	var content1=getClass('content1')[0];
	var rr=content1.getElementsByClassName('co1_2')
	Array.from(ee).forEach(function(val,index){
		val.onmouseenter=function(){
			for(var i=0;i<ee.length;i++){
				ee[i].style.color="#42427F";
				ee[i].style.textDecoration="none";
				rr[i].style.display="none";
			}
				this.style.color="#FF6700";
				this.style.textDecoration="underline";
				rr[index].style.display="block";				
		}
	})
	//选项卡
	var nav=$('.navs')[0];
	var title=$('.title')[0];
	var tis=$('.dudu',title);
	var con=$('.con')[0];
	var cons=$('li',con);
	for (let i=0;i<tis.length-2;i++) {
				tis[i].onmouseenter=function(){
					for (let j=0;j<tis.length;j++) {
					   cons[j].style.zIndex='130';				
				}
				con.style.height='230px';
				cons[i].style.zIndex='150'
			}
				tis[i].onmouseleave=function(){
				con.style.height='0px';

			}
				cons[i].onmouseenter=function(){
					con.style.height='230px';
					cons[i].style.zIndex='150'					
				}
				cons[i].onmouseleave=function(){
					con.style.height='0px';
				}
			}
//导航栏				
	var search=document.querySelector('input'); //输入框
	var hot=document.querySelector('.hot-list');		//显示、隐藏的内容
	var searchbtn=document.querySelector('.search-btn');//搜素按钮
	var hotw=document.querySelector('.hot-word');
	search.onfocus=function(){
				hot.style.visibility='visible';
				search.style.borderColor='#ff6700';
				searchbtn.style.borderColor='#ff6700';
				hotw.style.visibility='hidden';
			}
	search.onblur=function(){
				hot.style.visibility='hidden';
				search.style.borderColor='#e0e0e0';
				searchbtn.style.borderColor='#e0e0e0';
				hotw.style.visibility='visible';
		}		
//搜素框	
	var r1_li=$('li',$('.r1_11')[0]);
	var r1_1=$('.r1_1');
	var r1 =$('.r1')
	for (let i=0;i<r1_li.length;i++) {
				r1_li[i].onmouseenter=function(){
					   r1_1[i].style.display='block';		
					   r1_li[i].style.backgroundColor="#ff6700";
			}
				r1_li[i].onmouseleave=function(){
						r1_1[i].style.display='none';		
						r1_li[i].style.backgroundColor='rgba(0,0,0,0.5)';	
			}
				r1_1[i].onmouseenter=function(){
					this.style.display='block';
					r1_li[i].style.backgroundColor="#ff6700";
				}
				r1_1[i].onmouseleave=function(){
					this.style.display='none';
					r1_li[i].style.backgroundColor='rgba(0,0,0,0.5)';
				}				
			}
//侧导航
function moved(a){
	var ri =$('.ri')[a];               //大盒子
	var ri_s=$('.ris',ri)[0];
	var bot=$('.bot',ri)[0];
	var ris =$('li',ri_s);   //轮播内容，
	var bo =$('li',bot);      //轮播点
	var ri_left=$('.ri_left',ri)[0];        //左按钮
	var ri_right=$('.ri_right',ri)[0];   //右按钮
	for (var i=0;i<ris.length;i++){
		if (i!=0) {
			ris[i].style.left='296px';
		}
	}	
	var now=0;
	var next=0;
	var flag=true;
	function moving (type='l1'){
		if (!flag) {
			return;
		}
		flag=false;
		if (type=='l1') {
		next++;
		if (next>=ris.length) {
			next=ris.length-1;
			flag=true;
			return;
		}	
			ris[next].style.left='296px';
			animate(ris[now],{left:'-296'});		
		}else if (type=='r1') {
			next--;
			if (next<0) {
				next=0;
				flag=true;
				return;				
			}			
			ris[next].style.left='-296px';
			animate(ris[now],{left:'296'});					
		}	
		animate(ris[next],{left:'0'},function  () {
			flag=true;
		});				
		bo[now].style.backgroundColor='#999';
		bo[now].style.border='2px solid #fff';
		bo[next].style.border='2px solid #ff6700';
		bo[next].style.backgroundColor='#fff';
		now=next;
	}
	ri.onmouseenter=function(){
		ri_left.style.visibility='visible';
		ri_right.style.visibility='visible';
		clearInterval(t)
	}
	ri.onmouseleave=function(){
		ri_left.style.visibility='hidden';
		ri_right.style.visibility='hidden';
		t=setInterval(function () {
			moving()
		},2000)
	}
	ri_left.onclick=function(){
		moving(type='r1')
	}
	ri_right.onclick=function(){
		moving('l1')
	}		
	for (var j=0;j<bo.length;j++) {
		bo[j].aa=j;
		bo[j].onclick=function(){
			if(this.aa>now){
				next=this.aa-1;
				moving();
			}else if(this.aa<now){
				next=this.aa+1;
				moving('r1')
			}
		}
	}	
}	
	var 	bb=$('.ri');
	for (var l=0;l<bb.length;l++) {
		moved(l);
	}	
	//为你推荐的轮播图	
	function yiyi(){
		var tuibtn=document.querySelectorAll('.weini .w_right a');
		var bao=document.querySelectorAll('.tuijian .t1');
		var x=0;
		var y=0;
		for (var i = 0; i < bao.length; i++) {
			if(i!=0){
				bao[i].style.left="1226px";
			}
		}
		function gun(type="r"){
		if (type=="r") {
			y++;
			if (y>=bao.length) {
				y = bao.length-1;
				return;
			}
			bao[y].style.left='1226px';
			animate(bao[x],{left:"-1226"});		
		}
		if (type=="l") {
			y--;
			if (y<0) {
				y=0;
				return;
			}
			bao[y].style.right="1226px";
			animate(bao[x],{left:"1226"});
		}	
		animate(bao[y],{left:0});
		x=y;
	}	
		tuibtn[1].onclick=function(){
			gun();
			if (x==0) {
				btnz.style.color="#ccc";
			}else if(x==3){
				this.style.color='#ccc';
			}else{
				btnz.style.color="black";
			}
		}
		tuibtn[0].onclick=function(){
			gun("l");
			if (x==3) {
				btny.style.color="#ccc";
			}else if(x==0){
				this.style.color="#ccc";
			}else{
				btny.style.color="#000";
			}
		}
		tuibtn[1].onmouseenter = function(){
			if (x==0) {
				this.style.color="#ff6700";
			}else if (x==3) {
				this.style.color="#ccc";
			}else{
				this.style.color="#ff6700";
			}
		}
		tuibtn[1].onmouseleave = function(){
			if (x==3) {
				this.style.color="#ccc";
			}else{
				this.style.color="#000";
			}
		}
		tuibtn[0].onmouseenter = function(){
			if (x==0) {
				this.style.color="#ccc";
			}else if (x==3) {
				this.style.color="#ff6700";
			}else{
				this.style.color="#ff6700";
			}
		}
		tuibtn[0].onmouseleave = function(){
		if (x==0) {
			this.style.color="#ccc";
		}else{
			this.style.color="#000";
		}
	}		
	}
	yiyi();















}
