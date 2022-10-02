const changeIcon = document.querySelector('.change');
//点击事件，更换图片逻辑：先调用接口，获取后端数据，然后写一个新建li标签的方法，后面把获取到的每个body中的元素内容放到新建li标签里面
changeIcon.addEventListener('click', function() {
    fetch('/singer/random')
      .then(function(response) {
        return response.json();
      })
      .then(function(body) {
        if (!body) {
          return;
        }

        function createItem(item) {
          const li = document.createElement('li');
          li.innerHTML = `
            <li>
                <div class="icon" style="background:url(${item.avatar}) no-repeat center;background-size: contain;">
                    <!-- 选择后，头像上有对勾 -->
                    <div class="shadow">
                        <span></span>
                    </div>
                </div>
                <h4>${item.name}</h4>
                <div class="like">喜欢</div>
            </li>`;
          return li;
        }

        const artistsList = document.querySelector('.artists-list');
        artistsList.innerHTML = '';
        for (const singerItem of body) {
          console.log(singerItem);
          const li = createItem(singerItem);
          artistsList.appendChild(li);
        }
      });
});


