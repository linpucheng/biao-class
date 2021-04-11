; (function () {
  'use strict';

  let users = [
    {
      name: '林圃成',
      gender: '男',
      score: 60,
    },
    {
      name: '徐歆玥',
      gender: '女',
      score: 90,
    },
    {
      name: '林毅',
      gender: '男',
      score: 80,
    },
  ];

  boot();

  function boot() {
    render();
  }

  function render() {
    users.forEach((user, i) => {
      let tr = document.createElement('tr');
      tr.innerHTML = `
      <td>${user.name}</td>
      <td>${user.gender}</td>
      <td>${user.score}</td>
      <td><button class="del">删除</button></td>
      `;

      let delButton = tr.querySelector('.del');

      tbody.appendChild(tr);

      delButton.addEventListener('click', () => {
        users.splice(i, 1);
        tr.remove();
      });
    });

  }




})();