console.log('page.js loaded!');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded!');
  
  const stageContent = document.getElementById('stageContent');
  const pageTransition = document.getElementById('pageTransition');
  
  console.log('stageContent:', stageContent);
  console.log('pageTransition:', pageTransition);

  if (!stageContent || !pageTransition) {
    console.error('Elements not found!');
    return;
  }

  function loadPage(pageName) {
    console.log('Loading page:', pageName);
    
    // トランジション開始
    pageTransition.classList.add('active');
    
    setTimeout(() => {
      // iframeを作成
      const iframe = document.createElement('iframe');
      iframe.src = pageName + '.html';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      
      console.log('Creating iframe for:', iframe.src);
      
      // 既存の内容をクリアしてiframeを追加
      stageContent.innerHTML = '';
      stageContent.appendChild(iframe);
      stageContent.classList.add('active');
      
      // トランジション終了
      setTimeout(() => {
        pageTransition.classList.remove('active');
      }, 150);
    }, 300);
  }

  // PCサイドメニュー
  document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageName = e.target.getAttribute('data-page');
      console.log('Side menu clicked:', pageName);
      if (pageName) {
        loadPage(pageName);
      }
    });
  });

  // トップメニュー
  document.querySelectorAll('.top-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageName = e.target.getAttribute('data-page');
      console.log('Top menu clicked:', pageName);
      if (pageName) {
        loadPage(pageName);
      }
    });
  });

  // モバイルナビ
  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-page a')) {
      e.preventDefault();
      const pageName = e.target.getAttribute('data-page');
      console.log('Mobile nav clicked:', pageName);
      if (pageName) {
        loadPage(pageName);
      }
    }
  });
});