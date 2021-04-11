//本课重点1：Element.classList.add();Element.classList.remove();
//本课重点2：Document.createElement();
//本课重点3：Node.appendChild();
//本课重点4：includes();
//本课重点5：Object.assign({},{});

; (function () {
  'use strict';

  let trigger, popup, mask, config;

  const defaultConfig = {
    position: 'center',
    offsetX: 0,
    offsetY: 0,
    on: 'click',
    keyToHide: 'Escape',
  };

  boot('#trigger', '#popup', {
    // position: 'top-left',
    // offsetX: 70,
    // offsetY: 70,
    // on: 'dblclick',
    // keyToHide: 'a',
  });

  function boot(triggerSelector, popupSelector, custom = {}) {
    trigger = document.querySelector(triggerSelector);
    popup = document.querySelector(popupSelector);

    loadConfig(custom);

    initPopup();

    initMask();

    bindOpen();

    bindClose();
  }

  function loadConfig(custom) {
    config = Object.assign({}, defaultConfig, custom);
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
    trigger.addEventListener(config.on, () => {
      setVisibility(true);

      repositionPopup(config.position, config.offsetY, config.offsetX);
    });
  }

  function bindClose() {
    mask.addEventListener(config.on, () => {
      setVisibility(false);
    });

    window.addEventListener('keyup', (e) => {
      if (e.key === config.keyToHide) {
        setVisibility(false);
      }
    })
  }

  function setVisibility(show = false) {
    popup.hidden = mask.hidden = !show;
  }

  function repositionPopup(position = 'center', yOffset = 0, xOffset = 0) {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let width = popup.offsetWidth;
    let height = popup.offsetHeight;
    let style = popup.style;

    if (!position.includes('-')) {
      if (position == 'left' || position == 'right') {
        position += '-centery';
      } else if (position == 'top' || position == 'bottom') {
        position += '-centerx';
      } else {
        position = 'centerx-centery';
      }
    }

    if (position.includes('centerx')) {
      style.left = windowWidth / 2 - width / 2 + xOffset + 'px';
    }

    if (position.includes('centery')) {
      style.top = windowHeight / 2 - height / 2 + yOffset + 'px';
    }

    if (position.includes('top')) {
      style.top = yOffset + 'px';
    }

    if (position.includes('bottom')) {
      style.bottom = yOffset + 'px';
    }

    if (position.includes('left')) {
      style.left = xOffset + 'px';
    }

    if (position.includes('right')) {
      style.right = xOffset + 'px';
    }
  }
})();