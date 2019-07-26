
var window_width = 1024;
var window_height = 700;
var RADIUS =8;
var MARGIN_TOP=60;
var MARGIN_LEFT =15;

const endTime = new Date(2017,7,19,18,47,52);
//var endTime = new Date();
//endTime.setTime(endTime.getTime()+3600*1000)//当前时间加上1小时
var curShowTimeSeconds =0

var balls=[];
const colors=["#3b5","#09c","#a6c","#93c","#9c0","#690","#fb3","#f80","#f44","#c00"];

window.onload=function() {

		window_width = document.body.clientWidth
		window_height = document.body.clientHeight

		MARGIN_LEFT = Math.round(window_width/10);
		RADIUS = Math.round(window_width*4/5/108)-1
		MARGIN_TOP = Math.round(window_height/5);


		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		canvas.width=window_width;
		canvas.height=window_height;

		curShowTimeSeconds=getCurrentShowTimeSeconds()
		
		setInterval(
			function(){
				render(context);
				update();
			},50
			)

	}
function getCurrentShowTimeSeconds(){
	var curTime = new Date();
	var ret = endTime.getTime()-curTime.getTime();
	ret = Math.round(ret/1000)

	return ret>=0 ? ret:0;
}

function update(){
	var nextShowTimeSeconds =getCurrentShowTimeSeconds();

	var nextHours = parseInt(nextShowTimeSeconds/3600);
	var nextMinutes=parseInt(nextShowTimeSeconds%60/60);
	var nextSeconds =nextShowTimeSeconds%60;

	var curHours = parseInt(curShowTimeSeconds/3600);
	var curMinutes=parseInt(curShowTimeSeconds%60/60);
	var curSeconds =curShowTimeSeconds%60;
	//当时间发生改变
	if (nextSeconds != curSeconds) {
		if (parseInt(curHours/10)!=parseInt(nextHours/10)) {
			addBalls(MARGIN_LEFT+0,MARGIN_TOP,parseInt(curHours/10))
		}
		if (parseInt(curHours%10)!=parseInt(nextHours%10)) {
			addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(curHours/10))
		}

		if (parseInt(curMinutes/10)!=parseInt(nextMinutes/10)) {
			addBalls(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes/10))
		}
		if (parseInt(curMinutes%10)!=parseInt(nextMinutes%10)) {
			addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes%10))
		}

		if (parseInt(curSeconds/10)!=parseInt(nextSeconds/10)) {
			addBalls(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds/10))
		}
		if (parseInt(curSeconds%10)!=parseInt(nextSeconds%10)) {
			addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds%10))
		}

		curShowTimeSeconds = nextShowTimeSeconds;
	}

	 updateBalls();

}

function updateBalls(){
	for (var i = 0; i < balls.length; i++) {
		balls[i].vy+=balls[i].g;
		balls[i].x+=balls[i].vx;
		balls[i].y+=balls[i].vy;

		if (balls[i].y>=window_height- RADIUS) {
			balls[i].y=window_height- RADIUS;
			balls[i].vy=- balls[i].vy*0.9;
		}
	}
	var cnt =0;
	for (var i = 0; i < balls.length; i++) {
		if (balls[i].x+RADIUS>0&&balls[i].x-RADIUS<window_width) {
			balls[cnt++]=balls[i]
		}
	}
	while(balls.length>Math.min(300,cnt)){
		balls.pop();
	}
}


function addBalls(x,y,num){
	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length; j++) {
			if (digit[num][i][j] ==1) {
				var aBall={
					x:x+j*2*(RADIUS+1)+(RADIUS+1),
					y:y+i*2*(RADIUS+1)+(RADIUS+1),
					g:1.5+Math.random(),
					vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
					vy:-5,
					color:colors[Math.floor(Math.random()*colors.length)]
				}

				balls.push(aBall)
			}
		}
	}
}

function render(ctx){
	ctx.clearRect(0,0,window_width,window_height)

	var hours = parseInt(curShowTimeSeconds/3600);
	var minutes=parseInt( (curShowTimeSeconds - hours * 3600)/60 );
	var seconds =curShowTimeSeconds%60;

	renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),ctx)
	renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),ctx)
	renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,ctx)
	renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),ctx)
	renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),ctx)
	renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,ctx)
	renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),ctx)
	renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),ctx)

	for (var i = 0; i < balls.length; i++) {
		ctx.fillStyle= balls[i].color;

		ctx.beginPath();
		ctx.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI)
		
		ctx.fill();
	}
}
//根据digit.js数组位置画小圆
function renderDigit(x,y,num,ctx){
	ctx.fillStyle = "rgb(0,102,153)";
	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length; j++) {
			if (digit[num][i][j]==1) {
				ctx.beginPath()
				ctx.arc(
					x+j*2*(RADIUS+1)+(RADIUS+1),
					y+i*2*(RADIUS+1)+(RADIUS+1),
					RADIUS,0,2*Math.PI
					)
				ctx.closePath()
				ctx.fill()
			}
			
		}
		
	}
}
