let openVideoOnly = () => {
  let url = window.location.href;
  try {
    let videoId = "";
    const formattedUrl = url.split("&")[0];
    if (url.includes("v=")) {
      videoId = formattedUrl.split("v=")[1];
    }
    if (url.includes("youtu.be")) {
      const formattedUrlParams = formattedUrl.split("youtu.be/")[1];
      videoId = formattedUrlParams.split("?")[0];
    }
    if (videoId.length === 11) {
      window.open(`https://www.youtube.com/embed/${videoId}`, "_blank");
    } else throw new Error();
  } catch (e) {
    console.log("didnt work, probably bad url");
  }
};

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: openVideoOnly,
  });
});
