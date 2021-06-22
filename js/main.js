AOS.init();

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


$(function () {
  $(".carousel-indicators .active ").click(function (e) {
    e.preventDefault();
    $(".carousel-inner .carousel-item img").attr('src', $(this).attr("data-img"));
  });

  $(".add-info").click(function (e) {
    e.preventDefault();
    $(".add-info.active").removeClass("active");
    $(this).addClass("active");
    $(".section-content").text($(this).text());
    $(".show-section").removeClass("show-section");
    $("."+$(this).attr('data-id')).addClass("show-section");
  });

});
