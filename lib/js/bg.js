var bg = {
    init: function(){
        chrome.browserAction.onClicked.addListener(function (a) {
            chrome.tabs.create({ url: "/main/index.html" });
        });
    }
    // TODO 点击按钮创建页面而不是选择 ‘扩展选项’
}