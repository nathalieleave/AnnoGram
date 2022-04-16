//document.getElementById("File_1").addEventListener("click", myFunction);
//make a global array (or map w btn id) that stores each unique titleKey when its changed, so as to change the buttons when necessary (file1,file2, etc);
//https://developer.chrome.com/docs/extensions/reference/storage/ (asynch preload from storage);

/*
chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [titleKey, { oldValue, newValue }] of Object.entries(changes)) {
    alert(oldValue);
    alert(newValue);
    document.querySelector('#File_1').textContent = oldValue;
    document.querySelector('#File_2').textContent = newValue;
  }
});
*/
//let title1 = document.querySelector("#File_1").textContent;
chrome.storage.sync.get(["titleKey1"], function (result) {
  document.querySelector("#File_1").textContent = result.titleKey1;
});
chrome.storage.sync.get(["titleKey2"], function (result) {
  document.querySelector("#File_2").textContent = result.titleKey2;
});
chrome.storage.sync.get(["titleKey3"], function (result) {
  document.querySelector("#File_3").textContent = result.titleKey3;
});

function newFileFunction() {
  document.getElementById("New File").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    window.location.href = "menu.html";
  });
}
document.addEventListener("DOMContentLoaded", newFileFunction, false);

function textEditorHref(){
  document.getElementById("File_1").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.storage.sync.set({'File_Name' : "titleKey1"}, function(){});
    window.location.href = "textEditor.html";
  });
    
  document.getElementById("File_2").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.storage.sync.set({'File_Name' : 'titleKey2'}, function(){});
    window.location.href = "textEditor.html";
  });
  document.getElementById("File_3").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.storage.sync.set({'File_Name' : 'titleKey3'}, function(){});
    window.location.href = "textEditor.html";
  });
}
document.addEventListener("DOMContentLoaded", textEditorHref, false);




//export default handleButtonClick;
//module.exports = handleButtonClick;
