let liEls = document.querySelectorAll(".home ul li");

let index = 0;
show = function(increase) {
  index = index + increase;
  index = Math.min(
    Math.max(index,0),
    liEls.length-1
  );
  liEls[index].scrollIntoView({behavior:"smooth"});
}
   $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        items: 4,
        autoPlay: 3000,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 4],
        navigation: true,
        navigationText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
        ]
      });
    });