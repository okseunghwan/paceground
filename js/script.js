$(function(){
    // trail_tab li a를 클릭하면,
    $(".trail_tab> li> a").click(function(){
        //눌려진 board li a(this) 의 부모(li)에 on을 추가하고 형제요소들은 on을 제거한다.
        $(this).parent().addClass("on").siblings().removeClass("on")

    });
});

document.querySelectorAll('a').forEach(link => {

  link.addEventListener('click', function(e) {

    if (this.getAttribute('href') === '#') {

      e.preventDefault();

    }

  });

});

document.querySelectorAll('a[href="#"]').forEach(link => {

  link.style.cursor = "default";

});


// video js
const trails = document.querySelectorAll('.trail1_left')

trails.forEach(trail => {
  const video = trail.querySelector('video')

  trail.addEventListener('mouseenter', () => {
    video.style.opacity = '1'
    video.currentTime = 0
    video.play()
  })

  trail.addEventListener('mouseleave', () => {
    video.pause()
    video.style.opacity = '0'
  })
})