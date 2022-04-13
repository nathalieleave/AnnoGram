
//document.getElementById("File_1").addEventListener("click", myFunction);

chrome.storage.sync.get(['titleKey'], function(result){
  if(result.titleKey != null){
    document.querySelector('#File_1').textContent = result.titleKey;
  }
});

function newFileFunction(){
  document.getElementById("New File").addEventListener("click", async () =>{
    let[tab] = await chrome.tabs.query({active:true, currentWindow: true});
    window.location.href = "menu.html";
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
document.addEventListener("DOMContentLoaded", newFileFunction, false);

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