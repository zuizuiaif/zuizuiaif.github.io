// shake(box,"top",150)
// 调用 (元素 属性 多少)
function shake(obj,attr,speek){
    var arr = [];
    for( var i = speek; i >= 0 ; i-=3 ){
        arr.push(i,-i);
    }
    arr.push(0);
    var n = 0;
    var start = parseInt(getStyle(obj,attr));
    obj.timer = setInterval(function (){
        obj.style[attr] = start + arr[n] + "px";
        n++;
        if( n > arr.length ){
            clearInterval(obj.timer);
        } 
    },16)
}