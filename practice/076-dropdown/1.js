//本课重点：Event.target和Element.closest();

; (function () {
  'use strict';

  let trigger = document.querySelector('.trigger');
  let dropdown = document.querySelector('.dropdown');

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

})();