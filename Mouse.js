document.addEventListener('mousemove', function (event) {
    
    let jsonObject =
    {
        Key: 'mousemove',
        Value: "mousemoving" 
    };
    window.chrome.webview.postMessage(jsonObject);
});
document.addEventListener('click', function (event) {

    let jsonObject =
    {
        Key: 'mousemove',
        Value: "mousemoving"
    };
    window.chrome.webview.postMessage(jsonObject);
});
document.addEventListener('keypress', function (event) {

    let jsonObject =
    {
        Key: 'mousemove',
        Value: "mousemoving"
    };
    window.chrome.webview.postMessage(jsonObject);
});
document.addEventListener('keydown', function (event) {

    let jsonObject =
    {
        Key: 'mousemove',
        Value: "mousemoving"
    };
    window.chrome.webview.postMessage(jsonObject);
});