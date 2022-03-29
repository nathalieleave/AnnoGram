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

function handleButtonClick() {
  // Use stored sync value.
  chrome.storage.sync.get("title", ({ title }) => {
    //alert(title);
  });
  chrome.storage.sync.get("url", ({ url }) => {
    //alert(url);
  });
  chrome.storage.sync.get("summary", ({ summary }) => {
    //alert(summary);
  });
  return { title, url, summary };
}

document.addEventListener("DOMContentLoaded", documentEvents2, false);
function documentEvents2() {
  document.getElementById("save").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // Store sync value before the script is executed.
    let title = document.getElementById("title").value;
    chrome.storage.sync.set({ title });
    /*chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: handleButtonClick,
    });*/
    let url = document.getElementById("url").value;
    chrome.storage.sync.set({ url });
    /*chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: handleButtonClick,
    });*/
    let summary = document.getElementById("summary").value;
    chrome.storage.sync.set({ summary });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: handleButtonClick,
    });
    window.location.href = "menu.html";
  });
  //chrome.browserAction.setPopup({ popup: "menu.html" });
}

//module.exports = handleButtonClick;
