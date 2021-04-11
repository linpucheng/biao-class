; (function () {
  'use strict';

  let data = {};
  let a = document.getElementById('a');

  function getData(form) {
    let inputs = form.querySelectorAll('[name]');

    inputs.forEach((it) => {
      data[it.name] = it.value;
    });

    return data;
  }

  console.log(getData(a));
})();