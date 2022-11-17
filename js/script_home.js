$( document ).ready(function() {
	var CurrentWidth = document.body.clientWidth - $(".container-left").width();
	var CurrentHeight = document.body.clientHeight - $(".header").height();

	$("#homimage").width(CurrentWidth);
	$("#homimage").height(CurrentHeight);

	startTime();
});

var i = 0;

function startTime() {
	
	if ( i < 13) {
		i++;
		$("#image").attr('src','img/homeimg/HomeImg'+(i)+'.png');
		// $("#homeimage").prepend('<img id="theImg" src="img/homeimg/HomeImg'+(i)+'.png" />');
		// css("background-image","url(img/homeimg/HomeImg"+(i)+".png)");
		// console.log(/img/homeimg/HomeImg+(i)+".png");
		setTimeout(function() {startTime()}, 3000);
	}
	else {		
		i = 0;
		setTimeout(function() {startTime()}, 0);
	}

	
} 