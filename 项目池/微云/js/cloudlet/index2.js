//------------------div的渲染和点击-------------------
var dataFiles = data.files;//获得数据
var initialId = 0;	////初始第一层的id
//找到这些数据中那些数据的pid为0
var childs = pure.passId(dataFiles,initialId);
//根据数据，生成结构
function generatingStructure(item){
    var html = '<div data-file-id="'+item.id+'" style="background-image:'+item.imgs+';" minutia="'+item.read+'" size="'+item.size+'">\
            <span></span>\
            <input type="text" value="'+item.title+'" readonly>\
        </div>'
	return html;
}
//循环数据，拼写结构放在文件区域

function detailsHtml(datas,id){
    var childs = pure.passId(datas,id);
    var str = '';
    for( var i = 0; i < childs.length; i++ ){
        str += generatingStructure(childs[i]);
    }
    return str;
}
function imgHtml(datas){
    var str = '';
    for( var i = 0; i < datas.length; i++ ){
        if(datas[i].type == "imgs"){
            str += generatingStructure(datas[i]);
        }
    }
    return str;
}
function audioHtml(datas){
    var str = '';
    for( var i = 0; i < datas.length; i++ ){
        if(datas[i].type == "audio"){
            str += generatingStructure(datas[i]);
        }
    }
    return str;
}
function videoHtml(datas){
    var str = '';
    for( var i = 0; i < datas.length; i++ ){
        if(datas[i].type == "video"){
            str += generatingStructure(datas[i]);
        }
    }
    return str;
}
function texHtml(datas){
    var str = '';
    for( var i = 0; i < datas.length; i++ ){
        if(datas[i].type == "text"){
            str += generatingStructure(datas[i]);
        }
    }
    return str;
}

//文件区域的容器
var details = tools.$("#details");
//放入容器中
details.innerHTML = detailsHtml(dataFiles,initialId);

//找到所有的div，添加点击处理
var divs = details.getElementsByTagName('div')
clickDispose();
//添加点击处理
function clickDispose(){
	for (var i = 0; i < divs.length; i++) {
        if(tools.getStyle(divs[i],"background-image").indexOf("1.png")!=-1){
    		tools.addEvent(divs[i],"click",function (ev){
    			var fileIds = this.dataset.fileId;  //找到这个文件的id
    			var childs = pure.passId(dataFiles,fileIds);//获取pid为fileId的数据
    			details.innerHTML = detailsHtml(dataFiles,fileIds);
                navigation.innerHTML = drawingNav(dataFiles,fileIds);
                var tree = getTreeById("divClass",fileIds);
                tools.removeClass(prevObj,"acquiesce");
                tools.addClass(tree,"acquiesce");
                prevObj = tree;
                clickDispose()
                for (var i = 0; i < divs.length; i++) {
                    divs[i].firstElementChild.onOff = true;
                }
                move()
                abc()
                MultipleChoice()
                if(divs.length === 0){
                    empty()
                }
    		})
        }else if(tools.getStyle(divs[i],"background-image").indexOf("1-2.png")!=-1){
            tools.addEvent(divs[i],"click",previewText)
        }else if(tools.getStyle(divs[i],"background-image").indexOf("1-3.png")!=-1){
            tools.addEvent(divs[i],"click",previewAudio)
        }else if(tools.getStyle(divs[i],"background-image").indexOf("1-4.png")!=-1){
            tools.addEvent(divs[i],"click",previewViedo)
        }else if(tools.getStyle(divs[i],"background-image").indexOf("1-5.png")!=-1){
            tools.addEvent(divs[i],"click",previewImg)
        }
	}
}
function previewImg(){
    mobile = false
    omit.omit = true
    var src = this.getAttribute("minutia")
    var divg = document.createElement("div")
    divg.style.cssText = 'width:100%;height:100%;background:#ccc;opacity:.5;position:absolute;top:0;left:0;z-index: 100;'
    divg.setAttribute("id","tmc")
    document.body.appendChild(divg)
    dialog({
        title:"预览",
        content:previewImgHTML(src),
        okFn:function(){
            mobile = true
            omit.omit = false
        }
    })
}
function previewText(){
    mobile = false
    omit.omit = true
    var src = this.getAttribute("minutia")
    var divg = document.createElement("div")
    divg.style.cssText = 'width:100%;height:100%;background:#ccc;opacity:.5;position:absolute;top:0;left:0;z-index: 100;'
    divg.setAttribute("id","tmc")
    document.body.appendChild(divg)
    dialog({
        title:"预览",
        content:previewTxtHTML(src),
        okFn:function(){
            mobile = true
            omit.omit = false
        }
    })
}
function previewAudio(){
    mobile = false
    omit.omit = true
    var src = this.getAttribute("minutia")
    var divg = document.createElement("div")
    divg.style.cssText = 'width:100%;height:100%;background:#ccc;opacity:.5;position:absolute;top:0;left:0;z-index: 100;'
    divg.setAttribute("id","tmc")
    document.body.appendChild(divg)
    dialog({
        title:"预览",
        content:previewAudioHTML(src),
        okFn:function(){
            mobile = true
            omit.omit = false
        }
    })
    var plays = tools.$(".plays")[0]
    var audios = tools.$("audio")[0]
    plays.onclick = function(){
        if(audios.paused){
            audios.previousElementSibling.src = "./img/1.gif"
            audios.play();
        }else{
            audios.previousElementSibling.src = "./img/15.png"
            audios.pause();
        }
    }
}
function previewViedo(){
    mobile = false
    omit.omit = true
    var src = this.getAttribute("minutia")
    var divg = document.createElement("div")
    divg.style.cssText = 'width:100%;height:100%;background:#ccc;opacity:.5;position:absolute;top:0;left:0;z-index: 100;'
    divg.setAttribute("id","tmc")
    document.body.appendChild(divg)
    dialog({
        title:"预览",
        content:previewViedoHTML(src),
        okFn:function(){
            mobile = true
            omit.omit = false
        }
    })
}
//-------------------预览文件的弹框结构------------
function previewImgHTML(src){
    var html
    html = '<div style="position: relative;height: 400px;">\
            <img src="'+src+'" style="width: 100%;;height: 400px;">\
            </div>'
    return html
}
function previewTxtHTML(src){
    var html
        html = '<div style="position: relative;height: 400px;overflow: auto;">'+src+'</div>'
    return html
}
function previewAudioHTML(src){
    var html
        html = '<div style="position: relative;height: 400px;">\
            <img src="./img/15.png" style="width:100%;height:90%;">\
            <audio controls style="width:100%;height:10%;">\
                <source src="'+src+'"></source>\
            </audio>\
            <div class="plays" style="width:20px;height:20px;background:red;position:absolute;bottom:4px;left:13px;opacity:0"></div>\
        </div>'
    return html
}
function previewViedoHTML(src){
    var html
        html = '<div style="position: relative;height: 400px;background:#000;">\
            <video controls style="width:100%;height:100%;">\
                <source src="'+src+'"></source>\
            </video>\
        </div>'
    return html
}
//------------------导航区的渲染--------------------
function drawingNav(dataFiles,id){
    var parents = pure.sgetId(dataFiles,id).reverse();
    var str = '';
    var zIndex = parents.length+10;
    for( var i = 0; i < parents.length-1; i++ ){
       str += '<a href="javascript:;"'
       +' style="z-index:'+(zIndex--)+'" data-file-id="'+parents[i].id+'">'+parents[i].title+'</a>';                         
    }
    str += '<span style="z-index:'+zIndex+'" data-file-id="'+parents[i].id+'">'+parents[parents.length-1].title+'</span>';   
    return str;
}
var navigation = tools.$(".navigation")[0];
navigation.innerHTML = drawingNav(dataFiles,initialId);
navigation.firstElementChild.style.cssText = "margin: 0;border-left: 1px solid #d8dce5;padding-left: 11px;z-index:100;"
//------------------导航区的点击--------------------
tools.addEvent(navigation,"click",function (ev){
    var target = ev.target;
    if( target.nodeName === "A" ){
        var fileIds = target.dataset.fileId;  //找到这个文件的id
        var childs = pure.passId(dataFiles,fileIds);//获取pid为fileId的数据
        navigation.innerHTML = drawingNav(dataFiles,fileIds);
        navigation.firstElementChild.style.cssText = "margin: 0;border-left: 1px solid #d8dce5;padding-left: 11px;z-index:100;"
        details.innerHTML = detailsHtml(dataFiles,fileIds);
        var tree = getTreeById("divClass",fileIds);
        tools.removeClass(prevObj,"acquiesce");
        tools.addClass(tree,"acquiesce");
        prevObj = tree;
        clickDispose()
        for (var i = 0; i < divs.length; i++) {
            divs[i].firstElementChild.onOff = true;
        }
        move()
        abc()
        MultipleChoice()
    }
})
//--------------------------------树形菜单的渲染-------------------------
var tree = tools.$('#tree')
function treeHtml(datas,id){
    var treeChilds = pure.passId(datas,id);
    var html =   '<ul>';
    for (var i = 0; i < treeChilds.length; i++) {
        if(treeChilds[i].type != "file"){
            treeChilds.splice(i,1)
            i--
        }
    }
    for( var i = 0; i < treeChilds.length; i++ ){
        var level = pure.getLevel(datas,treeChilds[i].id);
        var treeNav = id === -1 ? "acquiesce" : "";
        //判断某个id下是否有子级
        var hasChild = pure.hasChilds(datas,treeChilds[i].id);
        var treeContro = hasChild ? "divClassZ" : "divClassZNone";
        html += '<li>'
            +'<div data-file-id="'+treeChilds[i].id+'" class="divClass '+treeNav+' '+treeContro+'" style="padding-left:'+level*14+'px;">'
                +'<span>'
                    +'<strong>'+treeChilds[i].title+'</strong>'
                    +'<i class="ico"></i>'
                +'</span>'
            +'</div>'
        html += treeHtml(datas,treeChilds[i].id);
        html += '</li>'
    }
    html += '</ul>'
    return html;
}
tree.innerHTML = treeHtml(dataFiles,-1);
//---------------------------树形菜单点击-------------------------------------------
var treeTitle = tools.$(".divClass");
var prevObj = treeTitle[0]
function treeClick(){
    for( var i = 0; i < treeTitle.length; i++ ){
        tools.addEvent(treeTitle[i],"click",function (){
            var fileId = this.dataset.fileId;
            //点击导航区域渲染文件区域的内容
            details.innerHTML = detailsHtml(dataFiles,fileId);
            //添加点击事件
            clickDispose()
            //点击导航区域渲染点击导航区域
            navigation.innerHTML = drawingNav(dataFiles,fileId);
            var tree = getTreeById("divClass",fileId)
            tools.removeClass(prevObj,"acquiesce")
            tools.addClass(tree,"acquiesce")
            prevObj = tree
            navigation.firstElementChild.style.cssText = "margin: 0;border-left: 1px solid #d8dce5;padding-left: 11px;z-index:100;"
            for (var i = 0; i < divs.length; i++) {
                divs[i].firstElementChild.onOff = true;
            }
            move()
            abc()
            MultipleChoice()
            if(divs.length === 0){
                empty()
            }
        })
    }
}
treeClick()
//找到lass的元素，身上自定属性为参数二的元素
function getTreeById(classNams,id){
   var classElement = tools.$("."+classNams);
   for( var i = 0; i < classElement.length; i++ ){
     if( classElement[i].dataset.fileId == id ){
        return  classElement[i];
     }
   }
   return null;
}