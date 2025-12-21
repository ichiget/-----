/* 音量切替 */
const video = document.getElementById("bgVideo");
const soundBtn = document.getElementById("soundBtn");

soundBtn.onclick = () => {
  video.muted = !video.muted;
  soundBtn.textContent = video.muted ? "🔇" : "🔊";
};

/* スマホ下メニュー スライド */
const track = document.getElementById("navTrack");
const items = track.children;
let index = 0;

document.getElementById("next").onclick = () => {
  index = (index + 1) % items.length;
  track.style.transform = `translateX(-${index * 100}%)`;
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + items.length) % items.length;
  track.style.transform = `translateX(-${index * 100}%)`;
};
