; (function () {
  'use strict';

  let list = {
    name: 'wanghuahua',
    age: 20,
    gender: 'female',
    orientation: ['male', 'car'],
    height: '180cm',
  };

  function getData(form) {
    let data = {};
    let inputs = form.querySelectorAll('[name]');

    inputs.forEach((it) => {
      switch (it.type) {
        case 'number':
          data[it.name] = parseFloat(it.value);
          break;
        case 'radio':
          if (!it.checked) {
            return;
          } else {
            data[it.name] = it.value;
          }
          break;
        case 'checkbox':
          if (!Array.isArray(data[it.name])) {
            data[it.name] = [];
          }
          if (!it.checked) {
            return;
          } else {
            data[it.name].push(it.value);
          }
          break;

        default:
          data[it.name] = it.value;
          break;
      }
    });
    return data;
  }

  /**
   * 
   * @param {Object} data 
   * @param {HTMLElement} form 
   */
  function setData(data, form) {
    for (const key in data) {
      let val = data[key];
      let input = form.querySelector(`[name=${key}]`);
      console.log(input);

      switch (input.type) {
        case 'radio':
          let radio = form.querySelector(`[name=${key}]`);
          break;
        default:
          input.value = data[key];
          break;
      }
    }
  }

  setData(list, document.getElementById('b'));
})();
