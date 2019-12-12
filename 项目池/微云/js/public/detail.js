//--------------------展开关闭树形菜单和排序区--------------------
var establish = tools.$("#establish")
establish.onmouseover = function(){
	establish.firstElementChild.style.backgroundPosition = "-195px 0"
}
establish.onmouseout = function(){
	establish.firstElementChild.style.backgroundPosition = "-180px 0"
}
var navigations = tools.$("#navigation")
var sideBar = tools.$("#sideBar")
var tree = tools.$("#tree")
var clinetW = tools.view().W;
navigations.style.width = clinetW - sideBar.offsetWidth - tree.offsetWidth + "px"
details.style.float = "left"
details.style.width = clinetW - sideBar.offsetWidth - tree.offsetWidth + "px"
establish.onOff = true;
establish.onclick = function(){
	if(establish.onOff){
		tree.style.display = "none";
	}else{
		tree.style.display = "block";
	}
	establish.onOff = !establish.onOff
	navigations.style.width = clinetW - sideBar.offsetWidth - tree.offsetWidth + "px"
	details.style.width = clinetW - sideBar.offsetWidth - tree.offsetWidth + "px"
}
var sort = tools.$("#sort")
var stateUl = tools.$(".stateUl")[0]
sort.onmouseover = function(){
	sort.firstElementChild.style.backgroundPosition = "-183px -12px"
	sort.lastElementChild.style.borderTopColor = "#000"
	this.style.borderBottomColor = "#fff"
	stateUl.style.display = "block"
}
sort.onmouseout = function(){
		sort.firstElementChild.style.backgroundPosition = "-168px -12px"
		sort.lastElementChild.style.borderTopColor = "#8d919b"
		sort.style.borderBottomColor = "#bfc3cb"
		stateUl.style.display = "none"
}
stateUl.onmouseover = function(){
	sort.firstElementChild.style.backgroundPosition = "-183px -12px"
	this.style.display = "block"
	sort.style.borderBottomColor = "#fff"
}
stateUl.onmouseout = function(){
	sort.firstElementChild.style.backgroundPosition = "-168px -12px"
	this.style.display = "none"
	sort.style.borderBottomColor = "#bfc3cb"
}
//--------------------自适应屏幕的高度--------------------
var header = tools.$("#header")
var functions = tools.$("#function")
var visual = tools.$("#visual")
var clinetH = tools.view().H;  //可视区的高
var clinetW = tools.view().W;
document.body.style.width = clinetW + "px"
visual.style.height = clinetH - header.offsetHeight -functions.offsetHeight + "px";
details.style.height = clinetH - header.offsetHeight -functions.offsetHeight + "px";
window.onresize = function(){
	if(document.body.offsetWidth<=tools.view().W){
		clinetW = tools.view().W;
		document.body.style.width = clinetW + "px"
		details.style.width = clinetW - sideBar.offsetWidth - tree.offsetWidth + "px"
		navigations.style.width = clinetW - sideBar.offsetWidth - tree.offsetWidth + "px"
	}
	clinetH = tools.view().H;
	visual.style.height = clinetH - header.offsetHeight -functions.offsetHeight + "px";
}
//---------------------登录区的信息--------------------------
var names = tools.$(".names")[0]
var mails = tools.$(".mails")[0]
var url = document.location.href.split("name=")[1]
if(!url){
	alert("非法打开，没有登录")
}
var storage = window.localStorage;
var data = JSON.parse(storage[url])
names.innerHTML = "用户名："+data.name
mails.innerHTML = "邮箱："+data.mail
var diva = tools.$("a",sideBar)