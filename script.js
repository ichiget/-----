
/* ===== 音量 ===== */
const video = document.getElementById('bgVideo');
const soundBtn = document.getElementById('soundBtn');
soundBtn.addEventListener('click',()=>{
  video.muted = !video.muted;
  soundBtn.textContent = video.muted ? '🔇' : '🔊';
});


