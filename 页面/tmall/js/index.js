$(function(){
function banner(){
	var banner=$('.banner')[0];   //banner大盒子
	var imgs=$('.img')[0];    // 背景图的盒子
	var ibot=$('.btn',banner);   //轮播点
	var arr=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg'];
	var ar=['#E8E8E8','#E8E8E5','#E8E8E6','#FF78B9','#E8E8E7','#0864E3','#FAC601','#06EEA2'];	
	var num=0;
	function imgmove(){
		num++
		if (num>=ibot.length) {
			num=0;
		}
		for (var i=0;i<ibot.length;i++){
			ibot[i].style.backgroundColor='#999';
		}
			ibot[num].style.backgroundColor='#fff';			
			imgs.style.backgroundImage=`url(${arr[num]})`;
			imgs.style.backgroundColor=`${ar[num]}`;
	}
		var t=setInterval(function(){
				imgmove();
		},3000);
		imgs.onmouseenter=function(){
			clearInterval(t);
		}
		imgs.onmouseleave=function(){
			 t=setInterval(function(){
					imgmove();
				},3000)
		};
		for (let i=0;i<ibot.length;i++) {
			ibot[i].onmouseenter=function(){
				clearInterval(t);
				ibot[num].style.backgroundColor='#999';
				this.style.backgroundColor='#fff';	
				imgs.style.backgroundImage=`url(${arr[i]})`;
				imgs.style.backgroundColor=`${ar[i]}`;
			}
			ibot[i].onmouseleave=function(){
				var t=setInterval(function(){
						imgmove();
				},3000);
				ibot[num].style.backgroundColor='#fff'
				this.style.backgroundColor='#999';	
			}
		}
}	
banner()
//banner 轮播
	
function move(){
	var pannel=document.querySelectorAll('.pannel-con');//侧导航消失隐藏的内容
	var lis=document.querySelectorAll('.i1 li');//侧导航按钮
	var li_a=document.querySelectorAll('.i1 li a')
	var col=['#E54077','#427DEF','#6347ED','#E54077','#6347ED','#427DEF','#FA5C5C','#F7A831','#F7A831','#427DEF','#DD2727','#427DEF','#F7A831','#42C9B3','#DD2727','#3BC7B0']
	for (let i=0;i<lis.length;i++) {
		lis[i].onmouseenter=function(){
			pannel[i].style.display='block';
			this.style.backgroundColor='#FFFFFF'		
		}
		lis[i].onmouseleave=function(){
			pannel[i].style.display='none';
			this.style.backgroundColor='#EFEDED'
			li_a[i].style.color='#000'
		}	
		pannel[i].onmouseenter=function(){
			this.style.display='block';
		}
		pannel[i].onmouseleave=function(){
			this.style.display='none';
			
		}		
		li_a[i].onmouseenter=function(){
			this.style.color=`${col[i]}`;
		}
		li_a[i].onmouseleave=function(){
			this.style.color='#000';
		}			
	}
}	
move()
// 侧导航
function shipin(){
	var liveP = $(".liveplay");
	var liveL = $(".livel")[0];
	var liveSlide = $(".liveslide");
	var liveList = $(".item",liveL);
	var zla = $(".zla")[0];
	var yla = $(".yla")[0];
	for (let i = 0; i < liveP.length; i++) {
		liveList[i].onmouseenter=function(){
			for (var j = 0; j < liveP.length; j++) {
				liveP[j].style.zIndex=0;
			}
			liveP[i].style.zIndex=3;
		}
	}
	zla.onclick=function(){
		liveSlide[1].style.left="488px";
		animate(liveSlide[0],{left:-488});
		animate(liveSlide[1],{left:0});
		yla.style.display="block";
		this.style.display="none";
	}
	yla.onclick=function(){
		liveSlide[0].style.left="-488px";
		animate(liveSlide[1],{left:488});
		animate(liveSlide[0],{left:0});
		zla.style.display="block";
		this.style.display="none";
	}
}
shipin()
//视频部分


function louceng(){
    var cece=document.querySelector('.cece ul')
	var floors=document.querySelectorAll(".n1,.n2,.n4,.n5,.n401,.n7");
	var lise=document.querySelectorAll(".cece li")
	var arr=['#FF0036','#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9'];
	var now=0;	
	function moved(n,type ="x"){
		if(type=="x"){
			lise[n].style.backgroundColor=arr[n];
		}else if(type=="y"){
			if(n==now){
				return;
			}
			lise[n].style.backgroundColor="#666";
		}
	}
	for(let i=0;i<lise.length-1;i++){				
		lise[i].onmouseenter=function(){
			moved(i);
		}
		lise[i].onmouseleave=function(){
			moved(i,"y");
		}
	}
	document.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		if(obj.scrollTop>=(floors[0].offsetTop-100)){
			cece.style.transform=" scale(1,1)"
		}else{
			cece.style.transform=" scale(0,0)"
		}
		for(let j=0;j<lise.length;j++){
		lise[j].onclick=function(){
			if(j==lise.length-1){
				animate(obj,{scrollTop:0})
			}else{
				animate(obj,{scrollTop:floors[j].offsetTop-100})
				}
			}
		}
		for(let i=0;i<floors.length;i++){	
			if(obj.scrollTop>=(floors[i].offsetTop-100)){
				for(let j=0;j<floors.length;j++){
					lise[0].style.backgroundColor='#FF0036';
					lise[j].style.backgroundColor="#666";
				}
				lise[i].style.backgroundColor=arr[i];
				now=i;
			}
		}
	}		
}	
louceng();
//楼层跳转
	
	
	
	
	
	
})
