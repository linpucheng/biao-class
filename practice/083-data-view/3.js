; (function () {
  'use strict';

  let tbody = document.getElementById('tbody');

  let users = [
    {
      name: '林圃成',
      gender: '男',
      score: 59,
    },
    {
      name: '徐歆玥',
      gender: '女',
      score: 90,
    },
    {
      name: '林  毅',
      gender: '男',
      score: 79,
    },
  ];

  boot();

  function boot() {
    //先将数据全塞进列表
    users.forEach((user, i) => {
      let tr = document.createElement('tr');

      tr.innerHTML = `
      <td>${user.name}</td>
      <td>${user.gender}</td>
      <td>${user.score}</td>
      <td><button class="del">删除</button></td>
      `;

      tbody.appendChild(tr);
      let delButton = tr.querySelector('.del');
      console.log(delButton);
      
      delButton.addEventListener('click', () => {
        users.slice(i, 1);
        tr.remove();
      });


    });
  }
})();