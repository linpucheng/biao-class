; (function () {
  'use strict';

  let q = document.querySelector.bind(document);

  let html = q('html');
  let html2 = document.documentElement;

  let body = q('body');
  let body2 = document.body;

  let a = document.getElementById('a');
  let a2 = document.getElementsByClassName('a');

  let div = document.getElementsByTagName('div')[0];

  console.log(div);
})();