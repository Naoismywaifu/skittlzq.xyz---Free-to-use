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

var x = 0;var titleText = [ "$ sktittlz.xyz", "$ skittlzt.xy", "$ sktittlz.y", "$ sktittlz.", "$ sktittlz", "$ skittl", "$ skitt", "$ skit", "$ ski", "$ sk", "$ s", "$ sk", "$ ski" 
"$ skit", "$ skitt", "$ skittl" , "$ skittlz", "$ skittlz." , "$ skittlz.x" "$ skittlz.xy", "$ skittlz.xyz" ];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
