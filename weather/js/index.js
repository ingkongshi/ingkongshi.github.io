$(function(){
	var mySwiper = new Swiper('.swiper-container', {
			direction : 'vertical',
	})	

	var weather=$('.weather');
	function getcity(City='成都'){
		var config={
			url:'https://free-api.heweather.com/v5/',
			type:'weather',
			city:City,
			key:'c119811cdca84601810dccb282e82e5c',
		};
		function geturl(){
			return `${config.url}${config.type}?city=${config.city}&key=${config.key}`;
		}
		function getweather(callback){
			$.ajax({
				url:geturl(),
				dataType:"JSON",
				success:function(data){
					callback(data)
				}
			});
		}
		getweather(function(data){
			var ul=document.createElement('ul');
			console.log(data.HeWeather5)
			for (var i=0;i<data.HeWeather5.length;i++) {
				var li=document.createElement('li');
				var str='';
				var str1='';
				var str2='';
				for (var j in data.HeWeather5[i].now) {
					if(j=='cond'){
						str+='天气状况：'+data.HeWeather5[i].now[j]['txt']+'<br>';
					}
					if(j=='cond'){
						str2=data.HeWeather5[i].now[j]['code'];
					}
					if(j=='fl'){
						str+='体感温度（℃）：'+data.HeWeather5[i].now[j]+'<br>';
					}
					if(j=='hum'){
						str+='相对湿度（%）：'+data.HeWeather5[i].now[j]+'<br>';
					}
					if(j=='pcpn'){
						str+='降水量（mm）：'+data.HeWeather5[i].now[j]+'<br>';
					}
					if(j=='pres'){
						str+='气压：'+data.HeWeather5[i].now[j]+'<br>';
					}
					if(j=='tmp'){
						str1+=+data.HeWeather5[i].now[j];
					}
					if(j=='vis'){
						str+='能见度（km）：'+data.HeWeather5[i].now[j]+'<br>';
					}
					if(j=='wind'){
						str+='风向：'+data.HeWeather5[i].now[j]['dir']+'<br>';
					}
					if(j=='wind'){
						str+='风力：'+data.HeWeather5[i].now[j]['sc']+'<br>';
					}
					if(j=='spd'){
						str+='风速（kmph）：'+data.HeWeather5[i].now[j]['spd']+'<br>';
					}
					if(j=='spd'){
						str+='风速（kmph）：'+data.HeWeather5[i].now[j]['spd']+'<br>';
					}
				}
				li.innerHTML=str;
			}
			ul.append(li);
			$('.now').html(ul);
			$('.du').text(str1);
			var img=document.querySelector('.icon img');
			img.src=`img/${str2}.png`;
		})		
		getweather(function(data){
			var str='';
			var str1='';
			for (let i in data.HeWeather5[0].basic) {
				if(i=='city'){
					str+=data.HeWeather5[0].basic[i];
				}
				if(i=='update'){
					str1+=data.HeWeather5[0].basic[i]['loc'];
				}
			}
			$('.location').text(str);
			$('.date').text(str1);
		})
		getweather(function(data){
			var str1='舒适度指数：'+data.HeWeather5[0].suggestion['comf']['txt'];
			var str2='洗车指数：'+data.HeWeather5[0].suggestion['cw']['txt'];
			var str3='穿衣指数：'+data.HeWeather5[0].suggestion['drsg']['txt'];
			var str4='运动指数：'+data.HeWeather5[0].suggestion['sport']['txt'];
			var str5='旅游指数：'+data.HeWeather5[0].suggestion['trav']['txt'];
			var str6='紫外线指数：'+data.HeWeather5[0].suggestion['uv']['txt'];
			$('.comf').append(str1);	
			$('.cw').append(str2);	
			$('.drsg').append(str3);	
			$('.sport').append(str4);	
			$('.trav').append(str5);	
			$('.uv').append(str6);	
		})
	}
	
	getcity('成都');

	var change = document.querySelector('.search .ones');
	change.onchange = function() {
	    getcity(this.value)
	    this.blur()
	    flage = true;
	    att = this.value
 	 }
	var dav = $('.search .btn')
	var kuang = $('.search .ones')
	var flage = true;
	dav.click(function() {
		if (flage) {
			kuang.css('width','200px');
			kuang.focus();
		} else {
			kuang.css('width','30px');
			kuang.blur();
		}
		flage = !flage;
	})



















})