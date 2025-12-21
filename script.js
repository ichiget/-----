
/* ===== 音量 ===== */
const video = document.getElementById('bgVideo');
const soundBtn = document.getElementById('soundBtn');
soundBtn.addEventListener('click',()=>{
  video.muted = !video.muted;
  soundBtn.textContent = video.muted ? '🔇' : '🔊';
});

/* ===== mobile nav : 2ページ円柱ループ ===== */
const track = document.getElementById('navTrack');
const pages = Array.from(track.children);
let index = 1; // start at real page A
let busy = false;

track.style.transform = `translateX(${-index * 100}%)`;

function slide(direction){
  if(busy) return;
  busy = true;
  index += direction;
  track.style.transition = 'transform .45s cubic-bezier(.4,0,.2,1)';
  track.style.transform = `translateX(${-index * 100}%)`;
}

track.addEventListener('transitionend',()=>{
  track.style.transition = 'none';
  if(index === 0){ index = 2; }
  if(index === pages.length - 1){ index = 1; }
  track.style.transform = `translateX(${-index * 100}%)`;
  busy = false;
});

document.getElementById('next').addEventListener('click',()=>{
  slide(1);
});

document.getElementById('prev').addEventListener('click',()=>{
  slide(-1);
});
