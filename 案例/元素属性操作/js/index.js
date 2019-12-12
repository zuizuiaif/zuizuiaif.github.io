var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var div = document.getElementById("div")
document.getElementById("span").onclick = function (){
	box1.style.display = "block";
	box2.style.display = "block";
};
document.getElementById("red").onclick = function (){
	div.style.background = "red";
}
document.getElementById("yellow").onclick = function (){
	div.style.background = "yellow";
};
document.getElementById("blue").onclick = function (){
	div.style.background = "blue";
};
document.getElementById("width1").onclick = function (){
	div.style.width = "200px";
};
document.getElementById("width2").onclick = function (){
	div.style.width = "300px";
};
document.getElementById("width3").onclick = function (){
	div.style.width = "400px";
};
document.getElementById("height1").onclick = function (){
	div.style.height = "200px";
};
document.getElementById("height2").onclick = function (){
	div.style.height = "300px";
};
document.getElementById("height3").onclick = function (){
	div.style.height = "400px";
};
document.getElementById("recover").onclick = function (){
	div.style.width = "100px";
	div.style.height = "100px";
	div.style.background = "#fff";
};
document.getElementById("confirm").onclick = function (){
	box1.style.display = "none";
	box2.style.display = "none";
};