alert('onyong');

chrome.extension.sendRequest("request message", function (response_str) {
    alert(response_str);
  }