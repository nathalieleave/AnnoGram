document.getElementById("subnote").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let note = document.getElementById("addTxt").value;
  chrome.storage.sync.set({ note: note }, function () {});
  chrome.storage.sync.get("note", ({ note }) => {
    alert(note);
  });
  document.getElementById("currentNotes").innerHTML = note;
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
