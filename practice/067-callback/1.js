; (function () {
  'use strict';

  let a = ['a', 'yo', 'yoo'];
  let b = ['a', 'foo', 'b', 'bar'];
  let c = ['Y', 'o', 'o'];
  let d = ['背背山', '六六坡', '背背路'];

  function eachStr(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      fn(arr[i]);
    }
  }

  function getYo(arr) {
    let result = [];

    eachStr(arr, (it) => {
      if (it.includes('yo')) {
        result.push(it);
      }
    });

    return result;
  }

  function shortStr(arr) {
    let result = [];

    eachStr(arr, (it) => {
      if (it.length === 1) {
        result.push(it);
      }
    });

    return result;
  }

  function join(arr) {
    let result = '';

    eachStr(arr, (it) => {
      result += it;
    });

    return result;
  }

  function search(arr, getter) {
    let result = [];

    eachStr(arr, (it) => {
      if (it.includes(getter)) {
        result.push(it);
      }
    });

    return result;
  }

  function exclude(arr, getter) {
    let result = [];

    eachStr(arr, (it) => {
      if (!(it.includes(getter))) {
        result.push(it);
      }
    });

    return result;
  }


  console.log(getYo(a));
  console.log(shortStr(b));
  console.log(join(c));
  console.log(search(d, '背背'));
  console.log(exclude(d, '背背'));

})();