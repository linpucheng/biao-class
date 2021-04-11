; (function () {
  'use strict';

  let obj = {
    la: 'Ha',
    v: 2,
    p: [2, 5],
    b: {
      a: {
        name: 'White',
        yo: [5, 'a', 'c'],
        length: 100,
        map: true,
      },
    },
  };

  let a = typeof obj.la;
  let b = typeof obj.b.a.name;
  console.log(a, b);
})();