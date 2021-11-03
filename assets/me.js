if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "$ skt.rip", "$ skt.ri", "$ skt.r", "$ skt.", "$ skt", "$ sk", "$ s", "$ sk", "$ skt", "$ skt.", "$ skt.r", "$ skt.ri", "$ skt.rip" ];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
