$(function(){
    // trail_tab li a를 클릭하면,
    $(".trail_tab> li> a").click(function(){
        //눌려진 board li a(this) 의 부모(li)에 on을 추가하고 형제요소들은 on을 제거한다.
        $(this).parent().addClass("on").siblings().removeClass("on")

    });
});