; (function () {
  'use strict';

  let data = {
    name: 1,
    age: 2,
    gender: 3,
    height: 4,
  };

  let form = document.getElementById('b');

  function setData(form, data) {
    for (const key in data) {
      let input = form.querySelector(`[name=${key}]`);
      input.value = data[key];
    }
  }

  setData(form, data);
})();