chrome.storage.sync.get(["File_Name"], function (result) {
  let stringVar = result.File_Name;
  if (stringVar == "titleKey1") {
    chrome.storage.sync.get(["titleKey1"], function (result1) {
      document.getElementById("FileName").innerHTML = result1.titleKey1;
    });
  } else if (stringVar == "titleKey2") {
    chrome.storage.sync.get(["titleKey2"], function (result1) {
      document.getElementById("FileName").innerHTML = result1.titleKey2;
    });
  } else {
    chrome.storage.sync.get(["titleKey3"], function (result1) {
      document.getElementById("FileName").innerHTML = result1.titleKey3;
    });
  }
});

document.getElementById("subnote").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let note = document.getElementById("addTxt").value;
  chrome.storage.sync.set({ note: note }, function () {});
  //chrome.storage.sync.get("note", ({ note }) => {
  // alert(note);
  //});
  document.getElementById("currentNotes").innerHTML = note;
});

chrome.storage.sync.get(["url"], function (result) {
  document.getElementById("link1").innerHTML = result.url;
});

/*chrome.storage.sync.get(["note"], function (result) {
  if (result.note != null) {
    document.querySelector("currentNotes").textContent = result.note;
  }
});*/

/*chrome.storage.sync.get(["bulletPoint"], function (result) {
  if (result.bulletPoint != null) {
    document.querySelector("addTxt").textContent = result.bulletPoint;
  }
});

chrome.storage.set({ notes: result, function() {} });

chrome.storage.sync.get(["notes"], function (result) {
  alert("hello");
});*/
