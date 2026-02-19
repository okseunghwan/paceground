$(".answer").hide(); 
$(".board_btn").click(function(){
    const nextAns = $(this).next(".answer");
    $(".answer").not(nextAns).slideUp();
    nextAns.slideToggle();
    $(this).children("strong").toggleClass("color");
    $(".board_btn").not(this).children("strong").removeClass("color");
    $(this).children("span").toggleClass("turn");
    $(".board_btn").not(this).children("span").removeClass("turn");
});