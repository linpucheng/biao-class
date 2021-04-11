; (function () {
  'use strict';

  //在有专门信息的按钮上绑定事件，一点击则出现弹出层。

  let triggers = new Set();
  let lastTrigger;

  boot();

  function boot() {
    document.addEventListener('click', (e) => {
      let el = e.target;
      let content = el.dataset.popout;

      if (content) {
        lastTrigger && hide(lastTrigger);

        lastTrigger = el;

        show(el, content);

        triggers.add(el);
      } else {
        hideAll();
      }
    });
  }

  function show(button, content) {
    if (!button.$popout) {
      let popout = document.createElement('div');
      popout.innerText = content;
      popout.classList.add('popout');
      document.body.appendChild(popout);
      button.$popout = popout;
    } else {
      button.$popout.hidden = false;
    }

    reposition(button);
  }

  function hide(button) {
    button.$popout.hidden = true;
  }

  function hideAll() {
    triggers.forEach((button) => {
      button.$popout.hidden = true;
    });
  }

  function reposition(button) {
    let p = button.$popout;
    let buttonPosition = button.getBoundingClientRect();

    console.log(buttonPosition);

    p.style.left = buttonPosition.left + 'px';
    p.style.top = buttonPosition.top + button.offsetHeight + 5 + 'px';
  }




})();