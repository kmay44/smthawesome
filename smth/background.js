// called when the user clicks on the browser action

chrome.browserAction.onClicked.addListener(function(tab) {
    // send message to the active tab
    console.log("background1");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log("background1");
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "open_new_tab" ) {
            chrome.tabs.create({"url": request.url});
        }
        if(request.message === "redirect_this_tab"){
            chrome.tabs.update({"url": request.url});
        }
    }
);