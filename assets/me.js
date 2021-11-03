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

var titleText = [ "$ skt.xyz", "$ skt.xy", "$ skt.y", "$ skt.", "$ skt", "$ sk", "$ s", "$ sk", "$ skt", "$ skt.", "$ skt.x", "$ skt.xy", "$ skt.xyz" ];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
