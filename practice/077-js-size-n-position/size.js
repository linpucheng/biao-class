; (function () {
  'use strict';

  const a = document.querySelector('#a');
  // const b = document.querySelector('#b');

  // console.log(a.offsetTop);
  // console.log(a.offsetLeft);
  console.log(a.getBoundingClientRect());

  console.log('b.scrollTop:', b.scrollTop);
})();