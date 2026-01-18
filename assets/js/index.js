
$(document).ready(function() {
  $("audio").mediaelementplayer({
    alwaysShowControls: true,
    features: ["playpause", "current","progress", "duration", "volume"],
    audioVolume: "vertical",
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  margin: 0,    
  center: true,
  items: 3
});


  