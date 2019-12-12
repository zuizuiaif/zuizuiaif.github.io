var scrollFunc = function(e){
    e=e || window.event;
    if(e.wheelDelta){//IE/Opera/Chrome
    	if(e.wheelDelta>0){
    		// console.log("上滚")
    		if(timer === 1){
    			if(index === 1){
    				$.scroll0()
    			}else if(index === 2){
	    			$.scroll1()
	    		}else if(index === 3){
	    			$.scroll2()
	    		}
    		}
    	}else{
    		// console.log("下滚")
    		if(timer === 1){
    			if(index === 0){
	    			$.scroll1()
	    		}else if(index === 1){
	    			$.scroll2()
	    		}else if(index === 2){
	    			$.scroll3()
	    		}else if(index === 3){
	    			$.scroll0()
	    		}
    		}
    		
    	}
    }else if(e.detail){//Firefox 
        if(e.detail>0){
        	alert("下滚")
        }else{
        	alert("上滚")
        }
    }
}


if(document.addEventListener){ 
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}
window.onmousewheel=document.onmousewheel=scrollFunc;