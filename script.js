let watchYoutubeForm = document.getElementById("watch-youtube-form");
let flinkInput = document.getElementById("flink");

// open YouTube links as embedded video in new tab
const openVideoOnly = (url = "") => {
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
    alert("didnt work, probably bad url");
  }
};
watchYoutubeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let flinkInputValue = flinkInput.value;
  openVideoOnly(flinkInputValue);
});

const clearForm = () => {
  flinkInput.value = "";
  flinkInput.focus();
};
document.getElementById("clear-button").addEventListener("click", clearForm);
