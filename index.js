$(document).ready(function () {
  $(document).on("scroll", function () {
    let scrollPosition = $(document).scrollTop();

    scrollPosition >= 40
      ? $("nav").addClass("scroll")
      : $("nav").removeClass("scroll");
  });

  $(".menu-mobile button").click(function() {
        let sidebarPosition = $("nav ul").offset().left;
        console.log(sidebarPosition)

        sidebarPosition === -300 ? $("nav ul").css("left", "0px"): $("nav ul").css("left", "-300px");
      
  })

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<img src='images/icon-angle-left.svg'>",
      "<img src='images/icon-angle-right.svg'>",
    ],
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
