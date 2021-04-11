; (function () {
  'use strict';

  let dropdown = document.querySelector('.dropdown');
  // let list = ['a', 'b', 'c', 'd'];
  let list = [
    {
      text: 'a',
      href: 'http://baidu.com',
    },
    {
      text: 'b',
      href: 'http://taobao.com',
    },
  ];

  boot();

  function boot() {
    render();

    setInterval(() => {
      list.push({
        text: 'e',
        href: 'http://ebay.com',
      });
      render();
    }, 500);
  }

  function render() {
    dropdown.innerHTML = '';
    list.forEach((it) => {
      let a = document.createElement('a');
      a.href = it.href;
      a.innerText = it.text;
      dropdown.appendChild(a);
    });
  }






})();