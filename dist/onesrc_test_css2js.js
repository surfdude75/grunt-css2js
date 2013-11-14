(function () {
    // one.css
    var cssText = "" +
"/* one css */\n" +
"html {width:100%;height:100%;position:absolute;}\n" +
"body {width:100%;height:100%;position:absolute;}\n" +
"div {width:100%;height:100%;position:absolute;}\n" +
".div {border-radius: 5px;border: 1px solid #000;}\n" +
"#div {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}";
    // cssText end

    var styleEl = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText
        } catch(e) {
            styleEl.innerText = cssText;
        }
    }
}());
