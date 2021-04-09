(function(doc, win) {
    var html = doc.getElementsByTagName("html")[0],
    // orientationchange->手机屏幕转屏事件
    // resize->页面大小改变事件(一边pc端有用)
        reEvt = "orientationchange" in win ? "orientationchange" : "resize",
        reFontSize = function() {
            var clientW = doc.documentElement.clientWidth || doc.body.clientWidth;
            if(!clientW) {
                return;
            }
            console.log('clientW: ', clientW / 750);
            html.style.fontSize = 100 * (clientW / 750) + "px";
    }
    win.addEventListener(reEvt, reFontSize);
    // DOMContentLoaded->dom加载完就执行,onload要dom/css/js都加载完才执行
    doc.addEventListener("DOMContentLoaded", reFontSize);
})(document, window);
/**
 * 编写script代码重置rem，我这儿的代码是使用750px宽度的设计稿为参照对象。
 * 如果想自己修改可以看到上面有一个750,750px大小设计稿对应的就是750，一对一就可以了。
 * 现在，在750px宽的屏幕下，1rem代表的就是100px，7.5rem就是整个屏幕宽度了，
 * 当屏幕宽度改变时1rem代表的宽度会改变，不过其所占的屏幕比例不会变，也就是7.5rem还是整个屏幕的宽度
 */