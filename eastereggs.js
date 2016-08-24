var Tension = -4
var counter = 0
var right = "http://daijoubu.org/src/1459438268111.png"
var left = "http://daijoubu.org/src/1459438274646.png"
var id = ["0"];

//var audio = new Audio('http://daijoubu.org/awoo~.mp3');
var audio = new Audio('http://daijoubu.org/CardcaptorSakuraOp2.mp3');
//audio.play();

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function rainbow()
{
	var inputs = document.getElementsByTagName("article");
	for (var i = 0; i < inputs.length; i++) {
	  var y = (inputs[i].id);
	 var x = document.getElementById(y);
	    x.style.color = getRandomColor();
	    x.style.backgroundColor = getRandomColor();
	}
	   
}

function tryrainbow()
{
	if(document.body) rainbow();
		else setTimeout(tryanimate,100);
}

function randomCoord() {
	var x=document.body.scrollLeft||document.documentElement.scrollLeft;
	var y=document.body.scrollTop||document.documentElement.scrollTop;
	var w=window.innerWidth||document.body.offsetWidth;
	var h=window.innerHeight||document.body.offsetHeight;
	return {x:x+Math.round(Math.random()*w),
	y:y+Math.round(Math.random()*h)};
}

function cardinalPoint(u, coords) {
	var u2 = u*u
	var u3 = u2*u
	var s = (1-Tension)/2;
	var CAR0 = -s*u3 + 2*s*u2 - s*u
	var CAR1 = (2-s)*u3 + (s-3)*u2 + 1
	var CAR2 = (s-2)*u3 + (3-2*s)*u2 + s*u
	var CAR3 = s*u3 - s*u2
	return {
		x: Math.floor(coords[0].x * CAR0 + coords[1].x * CAR1 + coords[2].x * CAR2 + coords[3].x * CAR3),
		y: Math.floor(coords[0].y * CAR0 + coords[1].y * CAR1 + coords[2].y * CAR2 + coords[3].y * CAR3)
	};
}

function animate()
{
	(new Image).src=left;
	(new Image).src=right;

	var bee=document.createElement("img");
	bee.style.zIndex=1000;
	bee.style.position="absolute";
	/* for Internet Explorer */
	/*@cc_on @*/
	/*@if (@_win32)
	var iekludge=function() {
		if(document.readyState=="complete") document.body.appendChild(bee);
		else setTimeout(iekludge,100);
	}
	iekludge();
	@else */
	document.body.appendChild(bee);
	/*@end @*/

	var time=0;
	var coords=[randomCoord(),randomCoord(),randomCoord(),randomCoord()];

	setInterval(function() {
		time+=0.03;
		if(time>1) {
			time-=1;
			coords=[coords[1],coords[2],coords[3],randomCoord()];
		}

		var coord=cardinalPoint(time,coords);

		if(coord.x>parseInt(bee.style.left)) {
			if(bee.src!=right) bee.src=right;
		} else {
			if(bee.src!=left) bee.src=left;
		}

		bee.style.left=coord.x+"px";
		bee.style.top=coord.y+"px";
		var count = counter;
		


	},40)
	bee.id=id[counter];
}

function add()
{
	counter += 1;
	id.push(counter);
}

function tryanimate()
{
	if(document.body) animate();
	else setTimeout(tryanimate,100);
	add();
	var audio = new Audio('http://daijoubu.org/plop.mp3');
	audio.play();
}

function edit()
{
	var audio = new Audio('http://daijoubu.org/awoo~.mp3');
	audio.play();
	if (document.designMode=='off')
	 { document.body.contentEditable='true';
	 document.designMode='on';
	} else {
	 document.body.contentEditable='false'; 
	document.designMode='off';
	} void 0
}

function GRAYSKULL()
{
	var audio = new Audio('http://daijoubu.org/BythePowerofGreyskull.mp3');
	audio.play();
	tryrainbow();
}

function asteroids()
{
	javascript:var KICKASSVERSION='2.0';
	var s = document.createElement('script');
	s.type='text/javascript';
	document.body.appendChild(s);
	s.src='http://daijoubu.org/asteroids.js';
	void(0);
}

var vglnk = { key: '6dfa6e13873920fad2ece1ce49cfb167' };

(function(d, t)
{
    var s = d.createElement(t); s.type = 'text/javascript'; s.async = true;
    s.src = '//cdn.viglink.com/api/vglnk.js';
    var r = d.getElementsByTagName(t)[0]; r.parentNode.insertBefore(s, r);
}(document, 'script'));

//document.getElementById("onlineCount").onclick = function() {tryanimate()};

//document.getElementById("sync").onclick = function() {edit()};

//document.getElementById("lock").onclick = function() {asteroids()};

//document.getElementById("modOverlay").onclick = function() {GRAYSKULL()};

