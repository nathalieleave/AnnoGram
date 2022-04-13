
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
  });
}
document.addEventListener("DOMContentLoaded", newFileFunction, false);




//export default handleButtonClick;
//module.exports = handleButtonClick;
