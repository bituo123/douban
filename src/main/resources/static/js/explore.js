//加载更多，给每一个加上样式类
const changeIcon = document.querySelector('.loadmore');
changeIcon.addEventListener('click', function() {
  const x = document.querySelectorAll('.channel-img .item');
  for (i = 0; i < x.length; i++) {
    x[i].setAttribute("class", "item");
  }
});
