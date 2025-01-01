function resizeIframe(id) {
    var iframe = document.getElementById(id);
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframe.style.height = iframeDoc.body.scrollHeight + "px";
}
