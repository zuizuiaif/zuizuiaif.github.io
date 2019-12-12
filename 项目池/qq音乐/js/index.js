var j = 0
var html = ""
var datas = ""
var p = 0
var datas1 = "",datas2 = "",datas3 = "",datas4 = ""
var timer
var n = 1;
var m = 0;
function fn(data){
	datas = data
	document.body.removeChild(document.body.lastElementChild)
}
function zero(){
	var script = document.createElement("script");
	script.src = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=30&offset=0&callback=fn"
	document.body.appendChild(script)
}
zero()
function fn1(data){
	datas1 = data
	document.body.removeChild(document.body.lastElementChild)
}
function one(){
	var script = document.createElement("script");
	script.src = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0&callback=fn1"
	document.body.appendChild(script)
}
one()
function fn2(data){
	datas2 = data
	document.body.removeChild(document.body.lastElementChild)
}
function two(){
	var script = document.createElement("script");
	script.src = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=11&size=10&offset=0&callback=fn2"
	document.body.appendChild(script)
}
two()
function fn3(data){
    datas3 = data
    document.body.removeChild(document.body.lastElementChild)
}
function three(name){
    var script = document.createElement("script");
    script.src = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query="+name+"&callback=fn3"
    document.body.appendChild(script)
}
function fn4(data){
    datas4 = data
    document.body.removeChild(document.body.lastElementChild)
}
function four(ids){
    var script = document.createElement("script");
    script.src = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid="+ids+"&callback=fn4"
    document.body.appendChild(script)
}
var section = tools.$("#section")
var box1 = tools.$("#box1")
var box2 = tools.$("#box2")
var box3 = tools.$("#box3")
var box4 = tools.$("#box4")
box4.style.height = window.innerHeight + "px"
document.body.style.height = window.innerHeight + "px"
var page = tools.$(".page")
for (var i = 0; i < page.length; i++) {
	page[i].style.display = "none"
}
page[0].style.display = "block"
box1.style.display = "block"
box2.style.display = "none"
box3.style.display = "none"
var carousel = tools.$("#carousel")
var list = tools.$("#list")
var listLi = tools.$("li",list)
var listimg = tools.$("img",list)
for (var i = 0; i < listimg.length; i++) {
	listimg[i].style.width = document.body.offsetWidth + "px"
}
var spans = tools.$("span",carousel)
var oneLiW = parseFloat(tools.getStyle(listLi[0],"width"))
var len = listLi.length;
var ofn = true
list.style.width = oneLiW * len + "px";
list.style.left = -n * oneLiW + "px";
function xd(){
    for (var i = 0; i < spans.length; i++) {
        spans[i].style.background = "#ccc"
    }
    if(m === len - 2){
        m = 0;
    }
    spans[m].style.background = "#fff";
}
function cf(s){
    n++;
    m++;
    var l = n * oneLiW
    MTween(list,{left:-l},s,"linear",function(){
        if( n >= len-1 ){
            n = 1;
            list.style.left = -n*oneLiW + "px";
        }
        ofn = true
    })
    xd();
}
function vf(s){
    n--;
    m--;
    if(m < 0){
        m = spans.length - 1;
    }
    var l = -n*oneLiW;
    MTween(list,{left:l},s,"linear",function (){
        if( n <= 0 ){
            n = len-2;
            list.style.left = -n*oneLiW+"px";
        }
    })
    xd();
}
timer = setInterval(function(){
    ofn = false
    cf(500)
},3000)
function down(ev){
    if(ofn){
    	clearTimeout(timer)
    	var x = ev.changedTouches[0].pageX
    	var listLeft = parseFloat(tools.getStyle(list,"left"))
    	function move(ev){
    		listx = ev.changedTouches[0].pageX - x
    		list.style.left = listLeft + listx + "px"
    	}
    	function up(){
    		if(parseFloat(tools.getStyle(list,"left"))>listLeft+oneLiW/2){
    			vf(300)
    		}else if(parseFloat(tools.getStyle(list,"left"))<listLeft-oneLiW/2){
    			cf(300)
    		}else{
    			MTween(list,{left:listLeft},300)
    		}
    		timer = setInterval(function(){
                ofn = false
        		cf(500)
    		},3000)
    		tools.removeEvent(list,"touchmove",move)
    		tools.removeEvent(list,"touchend",up)
    	}
    	tools.addEvent(list,"touchmove",move)
    	tools.addEvent(list,"touchend",up)
    }
}
tools.addEvent(list,"touchstart",down)
function liftConter(){
    function ten(data,k){
        if(data){
        	for (j = k; j < k+5; j++) {
                if(data.song_list[j].title.length>8){
                    data.song_list[j].title = data.song_list[j].title.slice(0,8)+"··"
                }
                if(data.song_list[j].language.length>4){
                    data.song_list[j].language = data.song_list[j].language.slice(0,4)+"··"
                }
                if(data.song_list[j].artist_name.length>5){
                    data.song_list[j].artist_name = data.song_list[j].artist_name.slice(0,5)+"··"
                }
                if(data.song_list[j].album_title.length>8){
                    data.song_list[j].album_title = data.song_list[j].album_title.slice(0,8)+"··"
                }
    		html += '<li data-file-id="'+data.song_list[j].song_id+'">\
                        <img src="'+data.song_list[j].pic_small+'">\
                        <span class="titleName">'+data.song_list[j].title+'</span>\
                        <span class="languageName">('+data.song_list[j].language+')</span></br>\
                        <span class="artistName">'+data.song_list[j].artist_name+'</span>\
                        <span class="albumTitle">专辑《'+data.song_list[j].album_title+'》</span>\
                    </li>'
    		}
    		return html
        }else{
            hotCenter.innerHTML = ten(datas,0)
        }
    }
	var hotCenter = tools.$(".hotCenter")[0]
	hotCenter.innerHTML = ten(datas,0)
	var pullDown = tools.$(".pullDown")[0]
    function press(ev){
        if(window.pageYOffset+window.innerHeight == document.body.scrollHeight){
    		var y = ev.changedTouches[0].pageY
    		function slide(ev){
    			pullDowny = y - ev.changedTouches[0].pageY
    			if(pullDowny > 0){
    				if(pullDowny > 90){
    					pullDowny = 90
    				}
        			pullDown.style.marginBottom = pullDowny  + "px"
    			}
    		}
    		function pine(){
    			if(p>=25){
    				pullDown.innerHTML = "暂时没有更多数据"
    				MTween(pullDown,{marginBottom:0},100)
    				return
    			}
    			if(parseFloat(tools.getStyle(pullDown,"marginBottom"))>85){
    				p = p+5
    				hotCenter.innerHTML = ten(datas,p)
    				pullDown.style.marginBottom = 0
    			}else{
    				MTween(pullDown,{marginBottom:0},100)
    			}
    			tools.removeEvent(hotCenter,"touchmove",slide)
        		tools.removeEvent(hotCenter,"touchend",pine)
    		}
    		tools.addEvent(hotCenter,"touchmove",slide)
        	tools.addEvent(hotCenter,"touchend",pine)
        }
	}
	tools.addEvent(hotCenter,"touchstart",press)
}
function middleConter(){
	clearTimeout(timer)
	var page = tools.$(".page")
	for (var i = 0; i < page.length; i++) {
		page[i].style.display = "none"
	}
	page[1].style.display = "block"
	box1.style.display = "none"
	box2.style.display = "block"
	box3.style.display = "none"
	function htmls(datas){
        var hts = ""
        for (var i = 0; i < 10; i++) {
            if(datas.song_list[i].title.length > 4){
                datas.song_list[i].title = datas.song_list[i].title.slice(0,4)+"··"
            }
            if(datas.song_list[i].artist_name.length > 4){
                datas.song_list[i].artist_name = datas.song_list[i].artist_name.slice(0,4)+"··"
            }
            datas.song_list[i].artist_name
            if(i<3){
                hts += '<li data-file-id="'+datas.song_list[i].song_id+'">\
                        <span style="color:red;">'+(i+1)+'.</span><span>'+datas.song_list[i].title+'</span><span>---'+datas.song_list[i].artist_name+'</span>\
                    </li>'
            }else{
                hts += '<li data-file-id="'+datas.song_list[i].song_id+'">\
                        <span>'+(i+1)+'.</span><span>'+datas.song_list[i].title+'</span><span>---'+datas.song_list[i].artist_name+'</span>\
                    </li>'
            }
        }
		var ht = '<img src="'+datas.billboard.pic_s210+'"><ul>'+hts+'</ul>'
		return ht
	}
	var html = "<div>"
	html += htmls(datas1)
	html += htmls(datas2)
	html += "</div>"
	box2.innerHTML = html
}
function rightConter(){
	clearTimeout(timer)
	var page = tools.$(".page")
	for (var i = 0; i < page.length; i++) {
		page[i].style.display = "none"
	}
	page[2].style.display = "block"
	box1.style.display = "none"
	box2.style.display = "none"
	box3.style.display = "block"
}
var nav = tools.$("#nav")
var nava = tools.$("a",nav)
function lift2conter(){
    clearTimeout(timer)
    var page = tools.$(".page")
    for (var i = 0; i < page.length; i++) {
        page[i].style.display = "none"
    }
    page[0].style.display = "block"
    box1.style.display = "block"
    box2.style.display = "none"
    box3.style.display = "none"
    timer = setInterval(function(){
        ofn = false
        cf(500)
    },3000)
}
tools.addEvent(nava[0],"touchend",lift2conter)
tools.addEvent(nava[1],"touchend",middleConter)
tools.addEvent(nava[2],"touchend",rightConter)
window.onload = function(){
	liftConter()
    var seek = tools.$("#seek")
    var btn = tools.$("#btn")
    var h5 = tools.$("#h5")
    var hunt = tools.$("#hunt")
    var huntList = tools.$("#huntList")
    var em = tools.$("#em")
    tools.addEvent(btn,"touchend",function(){
        var val = seek.value.trim()
        if(val != ""){
            three(val)
            var times = setInterval(sous,100)
            function sous(){
                if(datas3){
                    var html = ""
                    clearTimeout(times)
                    if(!datas3.song){
                        html += '<li style="padding-top:20px;background:#fff;">暂无资源</li>'
                    }else{
                        for (var i = 0; i < datas3.song.length; i++) {
                            if(datas3.song[i].songname.length > 20){
                                datas3.song[i].songname = datas3.song[i].songname.slice(0,20)+"··"
                            }
                            if(datas3.song[i].artistname.length > 20){
                                datas3.song[i].artistname = datas3.song[i].artistname.slice(0,20)+"··"
                            }
                            html += '<li data-file-id="'+datas3.song[i].songid+'">\
                                    <p>'+datas3.song[i].songname+'</p>\
                                    <span>'+datas3.song[i].artistname+'</span>\
                                </li>'
                        }
                    }
                    huntList.innerHTML = html
                    h5.style.display = "none"
                    hunt.style.display = "none"
                    huntList.style.display = "block"
                    datas3 = ""
                }
            }
        }
    })
    tools.addEvent(em,"touchend",function(){
        h5.style.display = "block"
        hunt.style.display = "block"
        huntList.style.display = "none"
        seek.value = ""
    })
    var spanSp = tools.$(".spanSp")
    for (var i = 0; i < spanSp.length; i++) {
        tools.addEvent(spanSp[i],"touchend",function(){
            var val = this.innerHTML
            seek.value = val
            three(val)
            var times = setInterval(sous,100)
            function sous(){
                if(datas3){
                    var html = ""
                    for (var i = 0; i < datas3.song.length; i++) {
                        if(datas3.song[i].songname.length > 20){
                            datas3.song[i].songname = datas3.song[i].songname.slice(0,20)+"··"
                        }
                        if(datas3.song[i].artistname.length > 20){
                            datas3.song[i].artistname = datas3.song[i].artistname.slice(0,20)+"··"
                        }
                        html += '<li data-file-id="'+datas3.song[i].songid+'">\
                                    <p>'+datas3.song[i].songname+'</p>\
                                    <span>'+datas3.song[i].artistname+'</span>\
                                </li>'
                    }
                    huntList.innerHTML = html
                    h5.style.display = "none"
                    hunt.style.display = "none"
                    huntList.style.display = "block"
                    clearTimeout(times)
                    datas3 = ""
                }
            }
        })
    }
    tools.addEvent(document,"click",function(ev){
        var lis = tools.parents(ev.target,"li")
        if(lis){
            var fid = lis.dataset.fileId
            if(fid){
                four(fid)
                document.body.style.overflow = "hidden"
                box1.display = tools.getStyle(box1,"display")
                box2.display = tools.getStyle(box2,"display")
                box3.display = tools.getStyle(box3,"display")
                box1.style.display = "none"
                box2.style.display = "none"
                box3.style.display = "none"
                box4.style.display = "block"
                window.scrollTo(0,0)
                var times = setInterval(suspend4,100)
                function suspend4(){
                    if(datas4){
                        var long = parseInt(datas4.bitrate.file_duration/60)
                        var longs = parseInt(datas4.bitrate.file_duration%60)
                        if(long<10){
                            long = "0" +long
                        }
                        if(longs<10){
                            longs = "0" +longs
                        }
                        long = long+":"+longs
                        var html = '<span class="fh"></span>\
                            <h2 class="songName">'+datas4.songinfo.title+'</h2>\
                            <h5 class="singerName">'+datas4.songinfo.author+'</h5>\
                            <div class="songImg" style = "background-image:url('+datas4.songinfo.pic_big+');"></div>\
                            <span class="suspend"></span>\
                            <h5 class="albumName">专辑《'+datas4.songinfo.album_title+'》</h5>\
                            <div class="schedule">\
                                <span class="start">00:00</span>\
                                <span class="startSchedule"><em></em></span>\
                                <span class="finishSchedule"></span>\
                                <span class="finish">'+long+'</span>\
                            </div>\
                            <audio class="audios">\
                                <source src="'+datas4.bitrate.file_link+'">\
                            </audio>'
                        box4.innerHTML = html
                        var suspend = tools.$(".suspend")[0]
                        var songImg = tools.$(".songImg")[0]
                        var audios = tools.$(".audios")[0]
                        var start = tools.$(".start")[0]
                        var startSchedule = tools.$(".startSchedule")[0]
                        var finishSchedule = tools.$(".finishSchedule")[0]
                        var onfs = true;
                        var timez,z = 0
                        tools.addEvent(suspend,"touchend",function(ev){
                            if(onfs){
                                audios.play()
                                this.style.backgroundImage = "url(./img/suspendT.png)"
                                timez = setInterval(function(){
                                    z++
                                    if(z == 360){
                                        z = 0
                                    }
                                    songImg.style.transform = "rotateZ("+z+"deg)"
                                    var lon = parseInt(parseInt(audios.currentTime)/60)
                                    var lons = parseInt(parseInt(audios.currentTime)%60)
                                    if(lon<10){
                                        lon = "0" +lon
                                    }
                                    if(lons<10){
                                        lons = "0" +lons
                                    }
                                    lon = lon+":"+lons
                                    start.innerHTML = lon
                                    startSchedule.style.width = parseInt(parseInt(tools.getStyle(finishSchedule,"width"))*parseInt(audios.currentTime)/datas4.bitrate.file_duration)+"px"
                                },50)
                            }else{
                                audios.pause();
                                this.style.backgroundImage = "url(./img/suspend.png)"
                                clearTimeout(timez)
                            }
                            onfs = !onfs
                        })
                        tools.addEvent(startSchedule,"touchstart",tz)
                        tools.addEvent(finishSchedule,"touchstart",tz)
                        function tz(ev){
                            audios.pause();
                            clearTimeout(timez)
                            var evx = parseInt(ev.changedTouches[0].pageX)
                            var rawx = parseInt(startSchedule.getBoundingClientRect().left)+parseInt(tools.getStyle(startSchedule,"width"))
                            startSchedule.style.width = parseInt(tools.getStyle(startSchedule,"width")) + (evx-rawx) + "px"
                            function movs(ev){
                                evx = parseInt(ev.changedTouches[0].pageX)
                                rawx = parseInt(startSchedule.getBoundingClientRect().left)+parseInt(tools.getStyle(startSchedule,"width"))
                                startSchedule.style.width = parseInt(tools.getStyle(startSchedule,"width")) + (evx-rawx) + "px"
                                if(parseInt(tools.getStyle(startSchedule,"width"))>=parseInt(tools.getStyle(finishSchedule,"width"))){
                                    startSchedule.style.width = tools.getStyle(finishSchedule,"width")
                                }
                                if(parseInt(tools.getStyle(startSchedule,"width"))<=0){
                                    startSchedule.style.width = 0
                                }
                                audios.currentTime = parseInt(parseInt(tools.getStyle(startSchedule,"width"))*datas4.bitrate.file_duration/parseInt(tools.getStyle(finishSchedule,"width")))
                                var lon = parseInt(parseInt(audios.currentTime)/60)
                                var lons = parseInt(parseInt(audios.currentTime)%60)
                                if(lon<10){
                                    lon = "0" +lon
                                }
                                if(lons<10){
                                    lons = "0" +lons
                                }
                                lon = lon+":"+lons
                                start.innerHTML = lon
                            }
                            function ups(){
                                audios.currentTime = parseInt(parseInt(tools.getStyle(startSchedule,"width"))*datas4.bitrate.file_duration/parseInt(tools.getStyle(finishSchedule,"width")))
                                onfs = false
                                timez = setInterval(function(){
                                    var lon = parseInt(parseInt(audios.currentTime)/60)
                                    var lons = parseInt(parseInt(audios.currentTime)%60)
                                    if(lon<10){
                                        lon = "0" +lon
                                    }
                                    if(lons<10){
                                        lons = "0" +lons
                                    }
                                    lon = lon+":"+lons
                                    
                                    audios.play()
                                    suspend.style.backgroundImage = "url(./img/suspendT.png)"
                                        z++
                                        if(z == 360){
                                            z = 0
                                        }
                                        start.innerHTML = lon
                                        songImg.style.transform = "rotateZ("+z+"deg)"
                                        startSchedule.style.width = parseInt(parseInt(tools.getStyle(finishSchedule,"width"))*parseInt(audios.currentTime)/datas4.bitrate.file_duration)+"px"
                                },50)
                                tools.removeEvent(document,"touchmove",movs)
                                tools.removeEvent(document,"touchend",ups)
                            }
                            tools.addEvent(document,"touchmove",movs)
                            tools.addEvent(document,"touchend",ups)
                        }
                        var fh = tools.$(".fh")[0]
                        tools.addEvent(fh,"touchend",function(ev){
                            box1.style.display = box1.display
                            box2.style.display = box2.display
                            box3.style.display = box3.display
                            box4.style.display = "none"
                            document.body.style.overflow = "auto"
                            datas4 = ""
                            audios.pause();
                            suspend.style.backgroundImage = "url(./img/suspend.png)"
                            songImg.style.transform = "rotateZ(0deg)"
                            clearTimeout(timez)
                        })
                        clearTimeout(times)
                    }
                }
            }
        }
    })
}