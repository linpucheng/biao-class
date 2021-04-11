; (function () {
  'use strict';

  let data = {
    name: 'wanghuahua',
    age: 20,
    gender: 'fale',
    height: '180cm',
  };

  /**
   * 解析表单数据
   * 
   * @param {Object}
   * @return {Object}
   */
  function getData(form) {
    let data = {};
    let input = form.querySelectorAll('[name]');

    input.forEach((it) => {
      data[it.name] = it.value;
    });

    return data;
  }

  function setData(data, form) {
    for (const key in data) {
      let input = form.querySelector(`[name=${key}]`);
      input.value = data[key];
    }
  }

  console.log(getData(document.getElementById('a')));
  setData(data, document.getElementById('b'));
})();
