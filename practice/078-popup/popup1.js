; (function () {
  'use strict';

  let trigger, popup, mask;

  boot('#trigger', '#popup');

  function boot(triggerSelector, popupSelector) {
    trigger = document.querySelector(triggerSelector);
    popup = document.querySelector(popupSelector);

    initPopup();

    initMask();

    bindOpen();

    bindClose();
  }

  function initPopup() {
    popup.classList.add('biao-popup');
    popup.hidden = true;
  }

  function initMask() {
    mask = document.createElement('div');
    mask.classList.add('biao-mask');
    document.body.appendChild(mask);
    mask.hidden = true;
  }

  function bindOpen() {
    trigger.addEventListener('click', () => {
      setVisibility(true);
      repositionPopup();
    });
  }

  function bindClose() {
    mask.addEventListener('click', () => {
      setVisibility(false);
    });
  }

  function setVisibility(show = false) {
    mask.hidden = popup.hidden = !show;
  }

  function repositionPopup() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let width = popup.offsetWidth;
    let height = popup.offsetHeight;

    popup.style.left = windowWidth / 2 - width / 2 + 'px';
    popup.style.top = windowHeight / 2 - height / 2 + 'px';
  }
})();