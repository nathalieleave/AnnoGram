//TO BE BUILT LATER:
//At this point, everything is integration and UI testing.
//Chrome is our compiler. Jest cannot access chrome storage.
//The following are what our storage tests WOULD be if we could.

/*function putInStorage(string) {
  chrome.storage.sync.set({ string });
}
function getOutOfStorage() {
  chrome.storage.sync.get("string", { string });
  return string;
}
test("Put non-null string into Chrome Storage and retrieve it", () => {
  putInStorage("test");
  expect(getOutOfStorage()).toBe("test");
});*/

//Just to prove that Jest exists and we have it set up:
test("Testing Jest", () => {
  expect(1).toBe(1);
});

//write test w premade example
//use handlebutt, run w inputs you know
//expect return abc, input abc.. just to have a test

//when present, mention how to test UI

//running = UI test
//write out everything thats supposed to happen when runninng and manually check it out
