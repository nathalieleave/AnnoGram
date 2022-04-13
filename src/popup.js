
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

chrome.storage.sync.get(['titleKey'], function(result){
  if(result.titleKey != null){
    document.querySelector('#File_1').textContent = result.titleKey;
  }
});


function newFileFunction(){
  document.getElementById("New File").addEventListener("click", async () =>{
    let[tab] = await chrome.tabs.query({active:true, currentWindow: true});
    window.location.href = "menu.html";
  });
}
document.addEventListener("DOMContentLoaded", newFileFunction, false);

//export default handleButtonClick;
//module.exports = handleButtonClick;
