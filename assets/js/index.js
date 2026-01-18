
$(document).ready(function() {
  $("audio").mediaelementplayer({
    alwaysShowControls: true,
    features: ["playpause", "current","progress", "duration", "volume"],
    audioVolume: "vertical",
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  navText: [$('.next-btn'),$('.prev-btn')],
  margin: 5,    
  center: true,
  items: 3,
  mouseDrag: false,
  touchDrag: false,
});

new WOW({
  mobile: false
}).init();


  