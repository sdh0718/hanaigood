$(".mo-navi").click(function () {
   $(".mo-navi-view").show();
});
$(".mo-navi-view .close").click(function () {
   $(".mo-navi-view").hide();
});

$(".mo-navi-view .nav-wrap a").click(function () {
   $(".mo-navi-view").hide();
});

$(".popup").hide();

$(".request-btn").click(function () {
   $(".popup.request").show();
});
$(".popup.request .close").click(function () {
   $(".popup.request").hide();
});

$(".popup, .mo-navi-view").on("scroll touchmove mousewheel", function (e) {
   e.preventDefault();
   e.stopPropagation();
});

var WWidth = $(window).width();
var Wheight = $(window).height();

$(window).scroll(function () {
   if (WWidth < 992 && $(this).scrollTop() > 500) {
      $(".more-area").fadeOut();
   }
});
