(function() {
  'use strict';
  const menu = document.getElementById('menu');
  const menuClose = document.getElementById('menu-close');
  //ハンバーガーメニュー
  menu.addEventListener('click', function() {
      document.body.className = 'menu-open';
  });
  menuClose.addEventListener('click', function() {
      document.body.className = '';
  });
  //pc用背景画像
  const bgImages = ['img/bg-img1.jpg', 'img/bg-img2.jpg', 'img/bg-img3.jpg',];
  //スライドショー
  let currentIndex = 0;
  const slide = function() {
    document.getElementById('bg-slider').style.backgroundImage = `url(${bgImages[currentIndex]})`;
    currentIndex++;
    if (currentIndex == bgImages.length) {
      currentIndex = 0;
    }
  }
  slide();
  setInterval(slide, 5000);
})();
