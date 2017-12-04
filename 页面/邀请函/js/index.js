$(function(){
	var designWidth = 750;    // 设计稿宽度
	function resize(){
		// 获取屏幕宽度
	    var clientWidth = document.documentElement.clientWidth;

	    document.documentElement.style.fontSize = (clientWidth/designWidth*100)+"px";
	}
	resize();
	$(window).resize(resize);
				var mySwiper = new Swiper('.swiper-container', {
					direction: 'vertical',//设置vertical样式
					pagination: '.swiper-pagination',  //分页
					paginationType: 'progress', //分页显示进度条
					paginationClickable: true,//分页器会控制Swiper切换。
					autoplayStopOnLast: true,//切换到最后一个slide时停止自动切换。
					mousewheelControl:true,//滚动切换
//					autoplayDisableOnInteraction:true,//用户操作swiper之后自动切换停止
					autoplay : 5000,
					onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
					    swiperAnimateCache(swiper); //隐藏动画元素 
					    swiperAnimate(swiper); //初始化完成开始动画
				  	}, 
				  	onSlideChangeEnd: function(swiper){ 
				    	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
					},
					
				})
				
				
				$('.audio_btn').click(function(){
					var music=document.getElementById('audio');
					if(music.play){
						music.pause();
						$('.btns').attr('src','imgs/musicoff.png');
					}else{
						music.play();
						$('.btns').attr('src','imgs/music.png');
					}
				})
	
})