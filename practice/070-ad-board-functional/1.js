; (function () {
  'use strict';

  const board = document.querySelector('.board');
  const inner = board.querySelector('.inner');
  const counter = inner.querySelector('.counter');
  let count = 0;

  boot();

  function boot() {
    startFlash();
  }

  function startFlash() {
    setInterval(() => {
      toggleBorder();
      toggleText(increment);
    }, 500);
  }

  function isVisible() {
    return getComputedStyle(inner).opacity !== '0';
  }

  function toggleText(onShow, onHide) {
    if (isVisible()) {
      inner.style.opacity = 0;
      onShow && onShow();
    } else {
      inner.style.opacity = 1;
      onHide && onHide();
    }
  }

  function toggleBorder() {
    board.style.borderColor = isVisible() ? 'transparent' : 'inherit';
  }

  function increment() {
    count++;
    counter.innerText = count + '用了都说好';
  }
})();