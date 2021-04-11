; (function () {
  'use strict';

  let a1 = document.querySelector('.a1');
  let a2 = document.querySelector('.a2');
  let a11 = document.querySelector('.a11');

  // console.dir(a1);
  // console.log(a2.parentElement);
  // console.log(a2.previousElementSibling);
  console.log(a1.firstElementChild);
  console.log(a11.closest('.yo'));
})();