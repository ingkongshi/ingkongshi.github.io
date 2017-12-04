window.onload=function(){
	var li=document.querySelectorAll('.daohang li');
	var line=document.querySelectorAll('.daohang i');

	for (let i=0;i<li.length;i++) {
		li[i].onmouseenter=function(){
			line[i].style.width='100%';
			line[i].style.opacity=1;
		}
		li[i].onmouseleave=function(){
			line[i].style.width=0;
			line[i].style.opacity=0;
		}
	}
	
	var ic=document.querySelector('.ico .ic');
	var icon=document.querySelector('.icon .iconf');
	var fu=document.querySelector('.fu');
	ic.onclick=function(){
		fu.style.width='90%';
		icon.style.visibility='visible';
	}
	icon.onclick=function(){
		fu.style.width='0%';
	}
	
	
	
}
