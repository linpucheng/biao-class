; (function () {
  'use strict';

  const toggle = document.querySelector('.toggle');
  const dropdown = document.querySelector('.dropdown');

  // toggle.addEventListener('click', () => {
  //   dropdown.hidden = !dropdown.hidden;
  // });

  toggle.addEventListener('mouseenter', () => {
    dropdown.hidden = false;
  });

  toggle.addEventListener('mouseleave', () => {
    dropdown.hidden = true;
  });

})();