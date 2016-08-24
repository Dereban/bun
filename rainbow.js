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

tryrainbow();
