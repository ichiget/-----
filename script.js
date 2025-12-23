
// /* ===== 音量トグル ===== */
// const video = document.getElementById('bgVideo');
// const soundBtn = document.getElementById('soundBtn');
// const mobileSoundBtn = document.getElementById('mobileSoundBtn');

// function toggleSound() {
//   video.muted = !video.muted;
//   const icon = video.muted ? '🔇' : '🔈';
//   soundBtn.textContent = icon;
//   mobileSoundBtn.textContent = icon;
// };

// soundBtn.addEventListener('click', toggleSound);
// mobileSoundBtn.addEventListener('click', toggleSound);

/*  モバイルナビゲーション - 円柱回転  */
const navTrack = document.getElementById('navTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const navWindow = document.querySelector('.nav-window');


// オリジナルのページ内容を取得
const pages = [
  { items: ['game', 'gallery', 'characters'] },
  { items: ['wiki', 'guestbook', 'contact'] },
]

let currentIndex = 0;
let isAnimating = false;

// 無限ループ用に前後にページを追加
function createPage(pageData) {
  const page = document.createElement('div');
  page.className = 'nav-page';
  pageData.items.forEach(item => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = item;
    page.appendChild(link);
  });
  return page;
}

// 初期化：prev, current, nextの3ページを配置
function initPages() {
  navTrack.innerHTML = '';
  const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
  const nextIndex = (currentIndex + 1) % pages.length;
  
  navTrack.appendChild(createPage(pages[prevIndex]));
  navTrack.appendChild(createPage(pages[currentIndex]));
  navTrack.appendChild(createPage(pages[nextIndex]));
  
  navTrack.style.transition = 'none';
  navTrack.style.transform = 'translateX(-100%)';
}

function slideToNext() {
  if (isAnimating) return;
  isAnimating = true;
  
  navTrack.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  navTrack.style.transform = 'translateX(-200%)';
  
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % pages.length;
    initPages();
    isAnimating = false;
  }, 500);
}

function slideToPrev() {
  if (isAnimating) return;
  isAnimating = true;
  
  navTrack.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  navTrack.style.transform = 'translateX(0%)';
  
  setTimeout(() => {
    currentIndex = (currentIndex - 1 + pages.length) % pages.length;
    initPages();
    isAnimating = false;
  }, 500);
}

nextBtn.addEventListener('click', slideToNext);
prevBtn.addEventListener('click', slideToPrev);

// // スワイプ対応
// let touchStartX = 0;
// let touchEndX = 0;

// navWindow.addEventListener('touchstart', (e) => {
//   touchStartX = e.changedTouches[0].screenX;
// });

// navWindow.addEventListener('touchend', (e) => {
//   touchEndX = e.changedTouches[0].screenX;
//   const diff = touchStartX - touchEndX;
  
//   if (Math.abs(diff) > 50) {
//     if (diff > 0) {
//       slideToNext();
//     } else {
//       slideToPrev();
//     }
//   }
// });

// 初期化
initPages();