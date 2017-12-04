$(document).ready(function(){    //ready当DOM载入就绪可以查询及操纵时绑定一个要执行的函数。
var newarr = [];
function fapai(){
	$('ul').html("");
	var arr = ['s','h','c','d'];   //花色	
	var newObj = {1: 'A', 2: '2', 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 'T', 11: 'J', 12: 'Q', 13: 'K'};   
	var obj = {}
	while(newarr.length<52){
		var num=Math.ceil(Math.random()*13);
		var color=arr[Math.floor(Math.random()*arr.length)];
		if(!obj[`${num}_${color}`]){
			obj[`${num}_${color}`]=true;
			newarr.push({num,color});
		}
	}
	var n=0;
	for (var i=0;i<7;i++) {
		for (var j=0;j<=i;j++) {
			n++;
			$('<li>').css({backgroundImage:'url(images/'+newObj[newarr[n].num]+newarr[n].color+'.png)'}).delay(n*50).prop('id',`${i}_${j}`).prop('num',newarr[n].num).animate({
				top:i*50+10,
				left:455-i*50+j*100,
				opacity:1
			},500).appendTo($('ul'));
		}
	}
	for (var i=n;i<newarr.length;i++) {
		$('<li>').css({backgroundImage:'url(images/'+newObj[newarr[i].num]+newarr[i].color+'.png)'}).delay(i*30).prop('num',newarr[i].num).addClass('zuo').animate({
				top:453,
				left:255,
				opacity:1
			},500).appendTo($('ul'));
	}
}	
function newgame(){	
	var m=null;
	function shisan(){
		$('li').click(function(){
			var id=$(this).prop('id').split('_');
			var next1=$(`#${parseInt(id[0])+1}_${parseInt(id[1])}`);
			var next2=$(`#${parseInt(id[0])+1}_${parseInt(id[1])+1}`);
			if(next1[0] || next2[0]){
				return ;
			}
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$(this).animate({top:'-=20'},500);
			}else{
				$(this).animate({top:'+=20'},500);
			}
			if (!m) {
				m=$(this);
			}else{
				if ($(this).prop('num')+m.prop('num')==13) {				
					$('.active').animate({top:0,left:1000,opacity:0},500);
					$('.active').remove()
				}else{
					$('.active').animate({top:'+=20'},500).removeClass('active');
				}
				m=null;
			}	
		})
	}
		function liankan(){
		$('li').click(function(){
			var id=$(this).prop('id').split('_');
			var next1=$(`#${parseInt(id[0])+1}_${parseInt(id[1])}`);
			var next2=$(`#${parseInt(id[0])+1}_${parseInt(id[1])+1}`);
			if(next1[0] || next2[0]){
				return ;
			}
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$(this).animate({top:'-=20'},500);
			}else{
				$(this).animate({top:'+=20'},500);
			}
			if (!m) {
				m=$(this);
			}else{
				if ($(this).prop('num')==m.prop('num')) {				
					$('.active').animate({top:0,left:1000,opacity:0},500);
					$('.active').remove()
				}else{
					$('.active').animate({top:'+=20'},500).removeClass('active');
				}
				m=null;
			}	
		})
	}
	var index=0;
	$('.rightbtn').click(function(){
		$('.zuo').eq(-1).css({zIndex:'index++'}).animate({
			left:'+=400',
		},500).removeClass('zuo').addClass('you');
	})
	$('.leftbtn').click(function(){
		$('.you').eq(0).css({zIndex:'index++'}).animate({
			left:'-=400',
		},500).removeClass('you').addClass('zuo');
	})
	$('#start').click(function(){
		location.reload();
	})
	$('#shisan').click(function(){
		newarr=[];
		fapai();
		
		$('.tan').css({top:'-1000px'})
		shisan();
	})
	$('#liankan').click(function(){
		newarr=[];
		fapai()
		$('.tan').css({top:'-1000px'})
		liankan();
	})
	shisan();
}	
	$('#newgame').click(function(){
		fapai()
		newgame();
		$('.tan').css({display:'none'})
	});
	$('p').click(function(){
		if ($('audio')[0].play) {
			$('audio')[0].pause();
			$("p").html("&#xe61f;");
		} else{
			alert(2)
			$('audio')[0].play();
			$("p").html("&#xe61e;");
		}
	
		
	})
	































})