//Below outputs the given input
/*document.addEventListener("DOMContentLoaded", documentEvents, false);

function myAction(input) {
  console.log("input value is : " + input.value);
  alert("The entered data is : " + input.value);
}

function documentEvents() {
  document.getElementById("save").addEventListener("click", function () {
    myAction(document.getElementById("title"));
  });
}
function handleButtonClick() {
  // Use stored sync value.
  chrome.storage.sync.get("title", ({ title }) => {
    alert(title);
  });
}*/

//TEST: handleButtonClick should return the userinput from chrome storage
function handleButtonClick() {
  // Use stored sync value.
  chrome.storage.sync.get("title", ({ title }) => {
    alert(title);
  });
  chrome.storage.sync.get("url", ({ url }) => {
    alert(url);
  });
  chrome.storage.sync.get("summary", ({ summary }) => {
    alert(summary);
  });
}

document.addEventListener("DOMContentLoaded", documentEvents2, false);
function documentEvents2() {
  document.getElementById("save").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // Store sync value before the script is executed.
    let title = document.getElementById("title").value;
    chrome.storage.sync.set({ title });
    let url = document.getElementById("url").value;
    chrome.storage.sync.set({ url });
    let summary = document.getElementById("summary").value;
    chrome.storage.sync.set({ summary });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: handleButtonClick,
    });
    window.location.href = "menu.html"; //opens new page after data is stored
  });
}
//export default handleButtonClick;
//module.exports = handleButtonClick;

/*
var context_id = -1;

chrome.input.ime.onFocus.addListener(function(context) {
  context_id = context.contextID;
});

chrome.input.ime.onKeyEvent.addListener(
  function(engineID, keyData) {
    if (keyData.type == "keydown" && keyData.key.match(/^[a-z]$/)) {
      chrome.input.ime.commitText({"contextID": context_id,
                                    "text": keyData.key.toUpperCase()});
      return true;
    } else {
      return false;
    }
  }
  
);
*/