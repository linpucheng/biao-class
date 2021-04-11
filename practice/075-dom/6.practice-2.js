; (function () {
  'use strict';

  const blackboard = document.getElementById('blackboard');

  // window.addEventListener('keyup', (event) => {
  //   if (event.key === 'q') {
  //     blackboard.hidden = !blackboard.hidden;
  //   }
  // });

  window.addEventListener('keyup', (event) => {
    if (event.key === 'q' && event.ctrlKey) {
      blackboard.hidden = !blackboard.hidden;
    }
  });
})();