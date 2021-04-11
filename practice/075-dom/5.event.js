; (function () {
  'use strict';

  const a = document.getElementById('a');
  const toggle = document.getElementById('toggle');

  a.addEventListener('mouseenter', () => {
    console.log('进来了');
  });

  a.addEventListener('mouseleave', () => {
    console.log('出去了');
  });

  window.addEventListener('keyup', (event) => {
    console.log(event);
  });
})();