// let url = window.location.href;
// const refreshUrl = () => {
//   url = window.location.href;
// };
// console.log(url);

// const getCurrentTab = async () => {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// };

// const runScript = async () => {
//   //   const currentTab = await getCurrentTab();
//   console.log(currentTab);
//   chrome.scripting.executeScript({
//     target: { tabId: window.tabs[0].id },
//     file: "openVideo.js",
//   });
// };
// document.getElementById("open-button").addEventListener("click", runScript);

const run = async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Execute script in the current tab
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["openVideo.js"],
  });
};
run();
