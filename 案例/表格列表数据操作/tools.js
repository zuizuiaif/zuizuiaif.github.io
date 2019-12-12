var tools = {
	//获取元素
	$:function (selector,context){
		var firstChar = selector.charAt(0);
		context = context || document;
		if( firstChar === "#" ){
			return document.getElementById(selector.substring(1));
		}else if(firstChar === "."){
			return context.getElementsByClassName(selector.substring(1));
		}else{
			return context.getElementsByTagName(selector);
		}	
	},
	//获取样式
	getStyle:function (obj,attr){
		if( obj.currentStyle ){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj)[attr];
		}
	},
	//用处，就是获取可视区的宽高
	view:function (){
		return {
			W:document.documentElement.clientWidth,
			H:document.documentElement.clientHeight
		}
	},
	//获取纵向滚动条滚动了多少
	scrollT:function (){
		return document.documentElement.scrollTop || document.body.scrollTop;	
	},
	//newElement：要插入的新节点	targetElement：要插入到那个元素后面
	insertAfter:function (newElement,targetElement){
		var parent = targetElement.parentNode;
		if( targetElement === parent.lastElementChild ){
			parent.appendChild(newElement)
		}else{
			parent.insertBefore(newElement,targetElement.nextElementSibling);
		}
	},
	//判断class是否存在
	hasClass:function (element,classNames){
		var classAll = 	element.className.split(" ");
		for( var i = 0; i < classAll.length; i++ ){
			if( classAll[i] === classNames ){
				return true;
			}
		}
		return false;
	},
	//删除class
	removeClass:function (element,classNames){
		if( tools.hasClass(element,classNames) ){
			var classAll = element.className.split(" ");
			for( var i = 0; i < classAll.length; i++ ){
				if( classAll[i] === classNames ){
					classAll.splice(i,1);
					i--;
				}
			}
			if( classAll.length === 0 ){
				element.removeAttribute("class");
			}else{
				element.className = classAll.join(" ");
			}
		}
	},
	//添加class
	addClass:function (element,classNames){
		var classAll = element.className;
		if( !tools.hasClass(element,classNames) ){
			classAll += " " + classNames;
		}
		element.className = classAll.trim();
	},
	//有class就删除，没有就添加
	toggleClass:function (element,classNames){
		if( tools.hasClass(element,classNames) ){
			tools.removeClass(element,classNames);
			return false;
		}else{
			tools.addClass(element,classNames);
			return true;
		}
	}
}