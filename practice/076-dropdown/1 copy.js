//要实现点击一个按钮，然后菜单出现，点别的地方，菜单隐藏

; (function () {
  'use strict';

  let trigger = document.querySelector('.trigger');
  let dropdown = document.querySelector('.dropdown');

  boot();

  function boot() {
    window.addEventListener('click', (e) => {
      let target = e.target;

      if (target === trigger) {
        dropdown.hidden = !dropdown.hidden;
        return;
      }

      if (!target.closest('.dropdown')) {
        dropdown.hidden = true;
      }

    });
  }
})();