// 사진 클릭하면 창 띄우기
$(".image").click(function () {
   $(this).find('.click_wrap').fadeIn(500);
});
// 닫기 버튼 클릭하면 창 닫기
$(".close_button").click(function (e) {
   e.stopPropagation();
   $(this).parents('.click_wrap').fadeOut(500);
});

// 메뉴 버튼 누르면 메뉴 열고 닫기
$(".list_button").click(function () {
   $("#header .fixed .nav").toggle(300);
});