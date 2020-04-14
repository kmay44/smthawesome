//var firstHref = $("a[href^='http']").eq(0).attr("href");
//console.log(firstHref);
//alert(firstHref);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("before clicked ba");
        if( request.message === "clicked_browser_action" ) {
            console.log("clickedba");
            var firstHref = $("a[href^='http']").eq(0).attr("href");

            console.log(firstHref);

            chrome.runtime.sendMessage({"message": "open_new_tab", "url": "chrome://settings/clearBrowserData"});
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": "chrome://settings/siteData?search=Content"});
        }
    }
);


