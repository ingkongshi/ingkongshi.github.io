window.onload=function(){
		var can=document.querySelector('canvas');
		var item=document.querySelector('.item');
		var input=document.querySelector('input');
		var con=can.getContext('2d');	
		var white=document.querySelector('.white');
		var black=document.querySelector('.black');
		var bu=document.querySelector('.white button');
		var bu1=document.querySelector('.black button');
		bu.onclick=function(){
			con.clearRect(0,0,600,600);
			paint();
			white.style.top='-40%';
		}
		bu1.onclick=function(){
			con.clearRect(0,0,600,600);
			paint();
			black.style.top='-40%';
		}
		//点击保存
		input.onclick=function(){
			item.classList.toggle('active');
			var url=can.toDataURL('image/png');
			var img=new Image();
			img.src=url;
			var link=document.createElement('a');
			link.href=url;
			link.download='1.jpg';
			item.appendChild(link);
			link.appendChild(img);
		}
		//画棋的方格
		function paint(){
			function line(n){
				return 40*n+20
			}
			for (var i=0;i<15;i++) {
				con.beginPath();
				con.moveTo(line(0),line(i));
				con.lineTo(line(14),line(i));
				con.stroke();
				con.beginPath();
				con.moveTo(line(i),line(0));
				con.lineTo(line(i),line(14));
				con.stroke();
			}
			//画五个圆点
			dot(line(3),line(3));
			dot(line(3),line(11));
			dot(line(11),line(3));
			dot(line(11),line(11));
			dot(line(7),line(7));
			function dot(x,y){
				con.beginPath();
				con.arc(x,y,6,0,2*Math.PI);
				con.fill();
			}
			//绘制棋子
			var flag=true;
			var arr=[];//保存棋子的位置
			can.onclick=function(e){
				var x=Math.floor(e.offsetX/40);
				var y=Math.floor(e.offsetY/40);
				if (arr[x+'-'+y]) {
					return;	
				}
				if (flag) {
					makedot(x,y,'black');
					if (success(x,y,'black')>=5) {
						black.style.top='40%';				
					} 
				} else{
					makedot(x,y,'white');
					if (success(x,y,'white')>=5) {
						white.style.top='40%';
					} 
				}
			}
			function makedot(x,y,color){
					con.beginPath();
					con.fillStyle=color;
					con.arc(line(x),line(y),18,0,2*Math.PI);
					con.fill();
					arr[x+'-'+y]=color;
					flag=!flag;
			}
			//判断成功
			function success(x,y,color){
				let i=1;
				let row=1;
				while(arr[`${x-i}-${y}`]==color){
					i++;
					row++;		
				}
				 i=1;
				let col=1;
				while(arr[`${x+i}-${y}`]==color){
					i++;
					col++;		
				}
				i=1;	
				let up=1;
				while(arr[`${x}-${y-i}`]==color){
					i++;
					up++;		
				}
				i=1;
				let down=1;
				while(arr[`${x}-${y+i}`]==color){
					i++;
					down++;		
				}
				i=1;
				let ax=1;
				while(arr[`${x+i}-${y+i}`]==color){
					i++;
					ax++;		
				}
				i=1;
				let bx=1;
				while(arr[`${x}+i-${y-i}`]==color){
					i++;
					bx++;		
				}
				i=1;
				let cx=1;
				while(arr[`${x+i}-${y+i}`]==color){
					i++;
					cx++;		
				}
				i=1;
				let dx=1;
				while(arr[`${x+i}-${y-i}`]==color){
					i++;
					dx++;		
				}			
				var kk=Math.max(row,col,up,down,ax,bx,cx,dx);
				return kk;
			}	
		}
		paint();
		var img=document.querySelector('img');
		var audio=document.querySelector('audio');
		console.dir(audio)
		img.onclick=function(){
			if (audio.paused) {
				audio.play();
				img.src='img/musicon.png';	
			} else{
				audio.pause();
				img.src='img/musicoff.png';		
			}
		}
	
	
}
