var arrColor=['#ec6630','#b64154','#edaf26','#4d98d6','#5a9149','#b64154','#ec6630','#4d98d6','#5a9149'];
var arrWidth=['85%','90%','75%','80%','75%','85%','60%','70%','50%'];
function repeat(index){
	$('#skill #right div').eq(index)
	.animate({'opacity': '1'},2000)
	.animate({'width': '0px'},fnRandom())
	.animate({'width': arrWidth[index]},fnRandom(),function(){repeat(index)});
}
function fnRandom(){
	var random=Math.random()*400+2000;
	return random;
}
$('#nav>li').each(function(index) {
	$(this).css('background', arrColor[index]);
});
$('#nav>li').eq(0)
		.css('transition','0.35s')
		.css({'fontSize': '22px','textShadow':'2px 2px 4px black'});
$('#skill #left>li').each(function(index) {
	$(this).css({'color': arrColor[index],'fontWeight':'bold'});
});
$('#nav>li').mouseenter(function(event) {
	$(this)
		.css('transition','0.35s')
		.css({'fontSize': '22px','textShadow':'2px 2px 4px black'});
	$(this).siblings().css({'fontSize': '18px','textShadow':'none'});
});

$('#skill #right div').each(function(index) {
	$(this).animate({'width': arrWidth[index]},fnRandom(),function(){repeat(index)});
});
clock();
var n=0;
var bul=true;
var time;
function move(){
		if(n==-7){bul=false;}
		if(n==0){bul=true;}
		if(bul){n--;}
		if(!bul){n++;}
		$('#project #pic').animate({'left':n*760+'px'},1000);
	}
function clock(){
	time=setInterval(move, 4000);
}


$('#project .stop').hover(function() {
	clearInterval(time);
}, function() {
	if(time){clearInterval(time);};
	setTimeout(clock, 3000);
});
$('#project #right').click(function(event) {
	if(time){clearInterval(time);};
	bul=true;
	if(n!=-7){move();}
});
$('#project #left').click(function(event) {
	if(time){clearInterval(time);};
	bul=false;
	if(n!=0){move();}
});

// $('#basic').slideDown(1000);
// $('#skill').slideDown(1000);
$('#project').slideDown(1000);


