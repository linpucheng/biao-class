; (function () {
  'use strict';

  const arr = [
    '王花花',
    '李拴蛋',
    '赵可爽',
  ];

  let str = '';

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    let connector = ', ';

    if (i == arr.length - 1) {
      connector = '';
    }

    str = str + el + connector;
  }
  
  console.log(str);

})();