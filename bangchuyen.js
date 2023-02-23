
var i=1;
 function changeImage(){

	var imgs=["./img/bia6.jpg","./img/bia3.jpg","./img/bia10.jpg","./img/bia11.jpg"];
	document.getElementById('img').src = imgs[i];
	i++;
	if(i==4)
	{
		i=0;
	}
}

setInterval(changeImage,2000);