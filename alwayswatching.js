var x = document.createElement("IMG");
var audio = new Audio('http://daijoubu.org/dundunduun.mp3');
audio.play();
x.setAttribute("src", "http://daijoubu.org/8bit.png");
x.setAttribute("id", "imag");
x.setAttribute("width", "1000");
x.setAttribute("onclick", "removeImage()");
document.body.appendChild(x);

function removeImage() {
var element = document.getElementById("imag");
element.parentNode.removeChild(element);
}