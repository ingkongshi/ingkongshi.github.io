window.onload=function(){
	let database=[
        {id:'song1',name:'阴天',src:'music/阴天.mp3',icon:'bigimg/1.jpg',bigimg:'bigimg/1.jpg',author:'莫文蔚',zhuanji:'莫文蔚精选',lyrics:[
            {time:"0:02",lyric:"阴天"},
            {time:"0:04",lyric:"莫文蔚"},
            {time:"0:06",lyric:"作品李"},
            {time:"0:08",lyric:"Amin"},
            {time:"0:10",lyric:"李宗盛"},
            {time:"0:12",lyric:"李宗盛"},
            {time:"0:19",lyric:"阴天在不开灯的房间"},
            {time:"0:23",lyric:"当所有思绪都一点一点沉淀"},
            {time:"0:26",lyric:"爱情究竟是精神鸦片"},
            {time:"0:29",lyric:"还是世纪末的无聊消遣"},
            {time:"0:34",lyric:"香烟氲成一摊光圈"},
            {time:"0:37",lyric:"和他的照片就摆在手边"},
            {time:"0:41",lyric:"傻傻两个人笑得多甜"},
            {time:"0:47",lyric:"开始总是分分钟都妙不可言"},
            {time:"0:51",lyric:"谁都认为热情它永不会减"},
            {time:"0:54",lyric:"除了激情褪去后的那一点点倦"},
            {time:"1:01",lyric:"也许像谁说过的贪得无厌"},
            {time:"1:05",lyric:"活该应了谁说过的不知检点"},
            {time:"1:09",lyric:"总之那几年感性赢了理性那一面"},
            {time:"1:31",lyric:"阴天在不开灯的房间"},
            {time:"1:34",lyric:"当所有思绪都一点一点沉淀"},
            {time:"1:38",lyric:"爱恨情欲里的疑点盲点"},
            {time:"1:41",lyric:"呼之欲出那么明显"},
            {time:"1:45",lyric:"女孩通通让到一边"},
            {time:"1:48",lyric:"这歌里的细微末节就算都体验"},
            {time:"1:52",lyric:"若想真明白真要好几年"},
            {time:"2:27",lyric:"回想那一天喧闹的喜宴"},
            {time:"2:35",lyric:"耳边想起的究竟是序曲或完结篇?"},
            {time:"2:42",lyric:"感情不就是你情我愿"},
            {time:"2:45",lyric:"最好爱狠扯平俩不相欠"},
            {time:"2:49",lyric:"感情说穿了一人挣脱的一人去捡"},
            {time:"2:55",lyric:"男人大可不必百口莫辨"},
            {time:"3:00",lyric:"女人实在无须楚楚可怜"},
            {time:"3:03",lyric:"总之那几年你们俩个没有缘"},
            {time:"3:13",lyric:"阴天在不开灯的房间"},
            {time:"3:16",lyric:"当所有思绪都一点一点沉淀"},
            {time:"3:20",lyric:"爱情究竟是精神鸦"},
            {time:"3:23",lyric:"还是世纪末的无聊消遣"},
            {time:"3:27",lyric:"香烟氲成一摊光圈"},
            {time:"3:31",lyric:"和他的照片就摆在手边"},
            {time:"3:34",lyric:"傻傻两个人笑得多甜"},
            {time:"3:41",lyric:"傻傻两个人笑得多甜"}]},
        {id:'song2',name:'背影',src:'music/背影.mp3',icon:'bigimg/2.jpg',bigimg:'bigimg/2.jpg',author:'林宥嘉',zhuanji:'马松精选',lyrics:[
            {time:"0:02",lyric:"背影"},
            {time:"0:13",lyric:"林宥嘉"},
            {time:"0:30",lyric:""},
            {time:"0:31",lyric:"三公分阳光 三公分空气"},
            {time:"0:39",lyric:"堵在眼前像一面 玻璃"},
            {time:"0:46",lyric:"挡住了你表情 剩下 只有脚印"},
            {time:"1:02",lyric:"一直向前走 走不完距离"},
            {time:"1:10",lyric:"一直想后退不出回忆"},
            {time:"1:17",lyric:"很高兴有心事 帮我困住自己"},
            {time:"1:28",lyric:""},
            {time:"1:33",lyric:"你头发上淡淡青草香气"},
            {time:"1:40",lyric:"变成了风才能和我相遇"},
            {time:"1:48",lyric:"你的目光 蒸发成云"},
            {time:"1:56",lyric:"再下成雨我才能够靠近"},
            {time:"2:02",lyric:""},
            {time:"2:02",lyric:"感谢我不可以 住进你的眼睛"},
            {time:"2:10",lyric:"所以才能 拥抱你的背影"},
            {time:"2:18",lyric:"有再多的遗憾 用来牢牢记住"},
            {time:"2:26",lyric:"不完美 的所有美丽"},
            {time:"2:33",lyric:"感谢我不可以 拥抱你的背影"},
            {time:"2:41",lyric:"所以才能 变成你的背影"},
            {time:"2:49",lyric:"躲在安静角落 不用你回头看"},
            {time:"2:59",lyric:"不用珍惜"},
            {time:"3:05",lyric:""},
            {time:"3:33",lyric:"我怀里所有温暖的空气"},
            {time:"3:41",lyric:"变成风也不敢和你相遇"},
            {time:"3:48",lyric:"我的心事 蒸发成云"},
            {time:"3:56",lyric:"再下成雨却舍不得淋湿你"},
            {time:"4:02",lyric:""},
            {time:"4:03",lyric:"感谢我不可以 住进你的眼睛"},
            {time:"4:10",lyric:"所以才能 拥抱你背影"},
            {time:"4:18",lyric:"有再多的遗憾 用来牢牢记住"},
            {time:"4:27",lyric:"不完美 的所有美丽"},
            {time:"4:34",lyric:"感谢我不可以 拥抱你的背影"},
            {time:"4:41",lyric:"所以才能 变成你的背影"},
            {time:"4:49",lyric:"躲在安静角落 不用你回头看"},
            {time:"4:59",lyric:"不用珍惜"},
            {time:"5:04",lyric:""},
            {time:"5:05",lyric:"感谢我不可以 拥抱你的背影"},
            {time:"5:12",lyric:"所以才能 变成你的背影"},
            {time:"5:20",lyric:"躲在安静角落 如果你回头看"},
            {time:"5:30",lyric:"不用在意"},
            {time:"5:35",lyric:""},
            {time:"5:41",lyric:"背影"}
        ]},
        {id:'song3',name:'稻香',src:'music/稻香.mp3',icon:'bigimg/3.jpg',bigimg:'bigimg/3.jpg',author:'周杰伦',zhuanji:'周杰伦',lyrics:[
   	 {time:"0:12","lyric":"稻香 - 周杰伦"},
    {time:"0:037","lyric":"词：周杰伦"},
    {time:"0:60","lyric":"曲：周杰伦"},
    {time:"0:517","lyric":"对这个世界如果你有太多的抱怨"},
    {time:"0:57","lyric":"跌倒了就不敢继续往前走"},
    {time:"0:62","lyric":"为什么人要这么的脆弱堕落"},
    {time:"0:69","lyric":"请你打开电视看看"},
    {time:"0:72","lyric":"多少人为生命在努力勇敢的走下去"},
    {time:"0:79","lyric":"我们是不是该知足"},
    {time:"0:82","lyric":"珍惜一切就算没有拥有"},
    {time:"0:905","lyric":"还记得你说家是唯一的城堡"},
    {time:"0:96","lyric":"随着稻香河流继续奔跑"},
    {time:"1:012","lyric":"微微笑 小时候的梦我知道"},
    {time:"1:074","lyrmic":"小时候的梦我知道"},
    {time:"1:104","lyric":"不要哭让萤火虫带着你逃跑"},
    {time:"1:16","lyric":"乡间的歌谣永远的依靠"},
    {time:"1:208","lyric":"回家吧 回到最初的美好"},
    {time:"1:27","lyric":"回到最初的美好"},
    {time:"1:686","lyric":"不要这么容易就想放弃"},
    {time:"1:724","lyric":"就像我说的"},
    {time:"1:748","lyric":"追不到的梦想换个梦不就得了"},
    {time:"1:8","lyric":"为自己的人生鲜艳上色"},
    {time:"1:83","lyric":"先把爱涂上喜欢的颜色"},
    {time:"1:883","lyric":"笑一个吧"},
    {time:"1:899","lyric":"功成名就不是目的"},
    {time:"1:93","lyric":"让自己快乐快乐这才叫做意义"},
    {time:"1:98","lyric":"童年的纸飞机"},
    {time:"2:003","lyric":"现在终于飞回我手里"},
    {time:"2:07","lyric":"所谓的那快乐"},
    {time:"2:09","lyric":"赤脚在田里追蜻蜓追到累了"},
    {time:"2:146","lyric":"偷摘水果被蜜蜂给叮到怕了"},
    {time:"2:197","lyric":"谁在偷笑呢"},
    {time:"2:224","lyric":"我靠着稻草人"},
    {time:"2:241","lyric":"吹着风 唱着歌 睡着了"},
    {time:"2:294","lyric":"午后吉它在虫鸣中更清脆"},
    {time:"2:343","lyric":"阳光洒在路上就不怕心碎"},
    {time:"2:389","lyric":"珍惜一切 就算没有拥有"},
    {time:"2:465","lyric":"还记得你说家是唯一的城堡"},
    {time:"2:523","lyric":"随着稻香河流继续奔跑"},
    {time:"2:575","lyric":"微微笑 小时候的梦我知道"},
    {time:"2:6355","lyric":"小时候的梦我知道"},
    {time:"2:648","lyric":"不要哭让萤火虫带着你逃跑"},
    {time:"2:714","lyric":"乡间的歌谣永远的依靠"},
    {time:"2:769","lyric":"回家吧 回到最初的美好"},
    {time:"2:816","lyric":"回到最初的美好"},
    {time:"2:858","lyric":"还记得你说家是唯一的城堡"},
    {time:"2:914","lyric":"随着稻香河流继续奔跑"},
    {time:"2:959","lyric":"微微笑 小时候"},
    ]},
        {id:'song4',name:'初爱',src:'music/初爱.mp3',icon:'img/4.jpg',bigimg:'bigimg/4.jpg',author:'莫文蔚',zhuanji:'莫文蔚精选'},
        {id:'song5',name:'红玫瑰',src:'music/红玫瑰.mp3',icon:'img/6.jpg',bigimg:'bigimg/6.jpg',author:'陈奕迅',zhuanji:'陈奕迅精选'},
        {id:'song6',name:'幸福的错觉',src:'music/幸福的错觉.mp3',icon:'img/5.jpg',bigimg:'bigimg/5.jpg',author:'马松',zhuanji:'马松精选'},
        {id:'song7',name:'凉凉-(电视剧《三生三世十里桃花》片尾曲)',src:'music/凉凉.mp3',icon:'img/7.jpg',bigimg:'bigimg/7.jpg',author:'张碧晨',zhuanji:'马松精选',lyrics:[
            {time:"0:01",lyric:"凉凉-(电视剧《三生三世十里桃花》片尾曲)"},
            {time:"0:07",lyric:"作词：刘畅"},
            {time:"0:08",lyric:"作曲：谭旋"},
            {time:"0:10",lyric:"编曲：韦国赟"},
            {time:"0:48",lyric:"入夜渐微凉 繁花落地成霜"},
            {time:"0:52",lyric:"你在远方眺望 耗尽所有暮光"},
            {time:"0:58",lyric:"不思量 自难相忘"},
            {time:"1:09",lyric:"夭夭桃花凉 前世你怎舍下"},
            {time:"1:14",lyric:"这一海心茫茫 还故作不痛不痒不牵强"},
            {time:"1:24",lyric:"都是假象"},
            {time:"1:31",lyric:"凉凉夜色 为你思念成河"},
            {time:"1:36",lyric:"化作春泥 呵护着我"},
            {time:"1:41",lyric:"浅浅岁月 拂满爱人袖"},
            {time:"1:45",lyric:"片片芳菲 入水流"},
            {time:"1:52",lyric:"凉凉天意 潋滟一身花色"},
            {time:"1:57",lyric:"落入凡尘 伤情着我"},
            {time:"2:03",lyric:"生劫易渡 情劫难了"},
            {time:"2:05",lyric:"折旧的心 还有几分前生的恨"},
            {time:"2:13",lyric:"还有几分前生的恨"},
            {time:"2:43",lyric:"也曾鬓微霜 也曾因你回光"},
            {time:"2:47",lyric:"悠悠岁月漫长 怎能浪费时光"},
            {time:"2:53",lyric:"去流浪（去流浪）去换成长"},
            {time:"3:04",lyric:"灼灼桃花凉 今生愈渐滚烫"},
            {time:"3:08",lyric:"一朵已放心上 足够三生三世背影成双（背影成双）"},
            {time:"3:19",lyric:"在水一方"},
            {time:"3:25",lyric:"凉凉夜色 为你思念成河"},
            {time:"3:30",lyric:"化作春泥 呵护着我"},
            {time:"3:36",lyric:"浅浅岁月 拂满爱人袖"},
            {time:"3:40",lyric:"片片芳菲 入水流"},
            {time:"3:47",lyric:"凉凉天意 潋滟一身花色"},
            {time:"3:52",lyric:"落入凡尘 伤情着我"},
            {time:"3:57",lyric:"生劫易渡 情劫难了"},
            {time:"4:00",lyric:"折旧的心 还有几分前生的恨"},
            {time:"4:16",lyric:"凉凉三生三世 恍然如梦"},
            {time:"4:21",lyric:"须臾的年 风干泪痕"},
            {time:"4:27",lyric:"若是回忆不能再相认"},
            {time:"4:30",lyric:"就让情分 落九尘"},
            {time:"4:37",lyric:"凉凉十里 何时还会春盛"},
            {time:"4:42",lyric:"又见树下 一盏风存"},
            {time:"4:48",lyric:"落花有意 流水无情"},
            {time:"4:50",lyric:"别让恩怨爱恨 凉透那花的纯"},
            {time:"5:01",lyric:"吾生愿 牵尘"}
        ]},
    ];

	var audio=document.querySelector('audio');
	var play= document.querySelectorAll('.mleft  .iconfont')[1];
	var list=document.querySelector('.musiclist  ul');
	var leftbtn=document.querySelectorAll('.mleft  .iconfont')[0];
	var rightbtn=document.querySelectorAll('.mleft  .iconfont')[2];
	var timedata =document.querySelector('.time');
	var progress_p=document.querySelector('.progress .dot')
	var progress_son=document.querySelector('.progress_son');
	var progress=document.querySelector('.progress');
	var volume=document.querySelector('.volume dot');
	var mask=document.querySelector('.mright .mask');
	var mright=document.querySelector('.mright');
	var singer=document.querySelector('.mright .singer');
		
		audio.onended=function(){  //播放下一首
			rightbtn.click();
		}
	//绘制歌词	
	var lyric=document.querySelector('.mright .lyric');
	var newarr=[];
	function geci(obj){	
		if(obj){
			newarr=[];
			lyric.innerHTML='';
			obj.forEach(function (val,index){
				var li =document.createElement('li');
				li.innerHTML=val.lyric;
				li.style.height="40px";
				li.setAttribute('attr',val.time)
				lyric.appendChild(li);
				newarr.push(li);
			})
			lyric.style.marginTop="200px";
	    	lyric.style.transition="none";
		}
	}		
			var time=setInterval(function(){
		 	var currenttime=audio.currentTime;
         	   newarr.forEach(function(val,index){
           	 	    if(val.getAttribute('attr')==maketime(currenttime)){
             		       for(var i=0;i<newarr.length;i++){
                	        newarr[i].style.color='#fff';
                    }
                    newarr[index].style.color='red';
                    lyric.style.marginTop=(200-40*index)+'px';
                }
            })
		},1000);
		
		
		
	play.onclick=()=>{  //给播放按钮创建点击事件
		if (audio.paused) {
			audio.play();    //开始播放音频
			geci(database[0].lyrics);
			play.innerHTML='&#xe606;';
		} else{
			audio.pause();
			play.innerHTML='&#xe604;';
		}
	}
	var arr=[];  //歌曲列表
	var now=0;
	var n=0;
	database.forEach(function(val,index){
		var li =document.createElement('li');
		if (index==now) {
			li.classList.add('ac');
			mright.style.backgroundImage='url('+database[index].bigimg+')';
			singer.style.backgroundImage='url('+database[index].bigimg+')';
		}
		li.innerHTML=val.name+'-'+val.author;  //给歌曲列表添加歌曲名和作者
		list.appendChild(li);
		arr.push(li);
	})
	arr.forEach(function(val,index){  //创建移入移出事件
		val.onmouseenter=function(){
			if (index==now) {   //判断当前的位置，保留当前的样式
				return;
			}
			val.style.backgroundColor='#EBECED';
		}	
		val.onmouseleave=function(){
			if (index==now) {
				return;
			}
			val.style.backgroundColor='#f5f5f7';			
		}
		val.ondblclick=function(){
			arr[now].style.backgroundColor='#f5f5f7';
			audio.src=database[index].src;
			arr[index].style.backgroundColor='#e3e3e5';
			play.innerHTML='&#xe606;';	
			mright.style.backgroundImage='url('+database[index].bigimg+')';
			singer.style.backgroundImage='url('+database[index].bigimg+')';
			geci(database[index].lyrics);		
			audio.play();
			now=index;	
		}			
	})
	leftbtn.onclick=function(){
		n--;
		if (n<0) {
			n=arr.length-1;
		}
		for (var i=0;i<arr.length;i++) {
			arr[i].style.backgroundColor='#f5f5f7';			
		}					
		now=n;
		arr[n].style.backgroundColor='#e3e3e5';
		play.innerHTML='&#xe606;';		
		audio.src=database[n].src;
		mright.style.backgroundImage='url('+database[n].bigimg+')';
		singer.style.backgroundImage='url('+database[n].bigimg+')';
		geci(database[n].lyrics);		
		audio.play();		
	}
	rightbtn.onclick=function(){
		n++;
		if (n>arr.length-1) {
			n=0;
		}
		for (var i=0;i<arr.length;i++) {
			arr[i].style.backgroundColor='#f5f5f7';			
		}
		now=n;
		arr[n].style.backgroundColor='#e3e3e5';
		play.innerHTML='&#xe606;';		
		audio.src=database[n].src;
		mright.style.backgroundImage='url('+database[n].bigimg+')';
		singer.style.backgroundImage='url('+database[n].bigimg+')';
		geci(database[n].lyrics);	
		audio.play();		
	}
	
	var mmm=document.querySelector('.mmm')
	audio.onprogress=audio.ontimeupdate=function(){  
		var currenttime=this.currentTime;   //   设置或返回音频/视频中的当前播放位置（以秒计）
		timedata.innerHTML=maketime(currenttime)+'/'+maketime(this.duration); 
		progress_son.style.width=currenttime/this.duration*progress.offsetWidth+'px';
		progress_p.style.left=currenttime/this.duration*progress.offsetWidth+'px';
	}
	function maketime(time){
		var all=audio.duration;   //返回当前音频/视频的长度（以秒计）
		var m=parseInt(time/60)>9?parseInt(time/60):parseInt(time/60);
		var s=parseInt(time%60)>9?parseInt(time%60):"0"+parseInt(time%60);
		return m+":"+s;
	}

	mask.onmousedown=mask.onclick=function(e){
		var dx= e.offsetX;		//当鼠标事件发生时候，鼠标相对于事件源X轴的位置；
		var px=e.clientX;     //当鼠标事件发生时，鼠标相对于浏览器X轴的位置；	
		if (e.type=='click') {
		progress_son.style.width=dx+'px';
		progress_p.style.left=dx+'px';			
		audio.currentTime=dx/mask.offsetWidth*audio.duration;
		} else if (e.type=='mousedown') {
			var lefts=parseInt(getComputedStyle(progress_p,null)['left']);		
			if (dx-lefts>0&&dx-lefts<8) {				
				document.onmousemove=function(e){
					var mx=e.clientX;
					var x=mx-px+lefts;
					if(x<=0){
						x=0
					}
					if (x>progress.offsetWidth) {
						x=progress.offsetWidth;
					}
					progress_p.style.left=x+'px';
					progress_son.style.width=x+'px';
					audio.currentTime=x/mask.offsetWidth*audio.duration;
					if (e.preventDefault) {  //清除浏览器的默认行为；
						e.preventDefault();
					}
				}					
			}
		}		
	}
	document.onmouseup=function(){
		this.onmousemove=null;
	}
	
	//音量设置
    var vol=document.querySelector(".volume");
    var vDot=document.querySelectorAll(".dot")[1];
    var vProgress=document.querySelectorAll(".progress_son")[1];
    var vLong=document.querySelector(".vmask");
    var vIcon=document.querySelector(".volume p");
    vProgress.style.width="76px";
    vDot.style.left="76px";
	audio.onvolumechange=function(){
    	var vDegree=audio.volume;
    	if (audio.muted==true) {
    		vProgress.style.width=0;
    		vDot.style.left=0;
    		vIcon.innerHTML='&#xe6b3;'
    	}else if(audio.muted==false){
    		vProgress.style.width=vDegree*vLong.offsetWidth-vDot.offsetWidth/2+"px";
    		vDot.style.left=vDegree*vLong.offsetWidth-vDot.offsetWidth/2+"px";
    		vIcon.innerHTML='&#xe60a;'
    	}
	 }
    vLong.onmousedown=vLong.onclick=function(e){  
    	audio.muted=false;
    	var vx=e.offsetX;
    	var vw=e.clientX;
    	if (e.type=="click") {
    		vProgress.style.width=vx-vDot.offsetWidth/2+"px";
	    	vDot.style.left=vx-vDot.offsetWidth/2+"px";
	    	audio.volume=(vx/this.offsetWidth)*1;
	    	if (vx==0) {
    			audio.muted=true;
    		}	
    	}else if(e.type=="mousedown") {
    		var vl=parseInt(vDot.style.left);
    		if (vx-vl>0&&vx-vl<6) {
    			document.onmousemove=function(e){
    				var vDrag=e.clientX-vw+vl;
    				if (vDrag<=0) {
    					vDrag=0;
    					audio.muted=true;
    				}else if (vDrag>=vLong.offsetWidth) {
    					vDrag=vLong.offsetWidth;
    				 }else{
    					audio.muted=false;
    				}
    				if (e.preventDefault) {
    					e.preventDefault();
    				}
    				vDot.style.left=vDrag-vDot.offsetWidth/2+"px";
    				vProgress.style.width=vDrag-vDot.offsetWidth/2+"px";
    				audio.volume=(vDrag/vLong.offsetWidth)*1;
    				if (e.preventDefault) {  //清除浏览器的默认行为；
						e.preventDefault();
					}
    			}
    		}
    	}
    }	
    vIcon.onclick=function(){
    	if(audio.muted==true){
    		audio.muted=false;
    		this.innerHTML='&#xe60a;'
    	}else if (audio.muted==false) {
    		audio.muted=true;
    		this.innerHTML='&#xe6b3;'
    	}
    }
	document.onselectstart=function(){
		return false;
	}

		var full=document.querySelector('.fullscreen');
		var all=document.querySelector('.all')
		var flag=true;
		full.onclick=function(){
			if (flag) {
				getfull(all)
			} else{
				exitfull();
			}
			flag=!flag;
		}
		function getfull(element){
			if (element.requestFullscreen) {  //检测浏览器是否支持原生格式；
				element.requestFullscreen();
			}else if (element.webkitRequestFullScreen) { //谷歌  注意大小写
				element.webkitRequestFullScreen();
			} else if (element.mozRequestFullScreen) { //火狐
				element.mozRequestFullScreen();
			} else if (element.msRequestFullscreen) {//IE
				element.msRequestFullscreen();
			}
		}
		function exitfull(){
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if(document.mozCancelFullScreen){
				document.mozCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
		


	
	
	
	
	
	
	
	
	
}
