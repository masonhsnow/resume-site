//Icon Animations
$("i").on("mouseover", function (e) {
  $(e.target).addClass("rotate-scale-down");
});

$("i").on("mouseleave", function (e) {
  $(e.target).removeClass("rotate-scale-down");
});

//Scroll reveal animations
ScrollReveal().reveal("#about-me", { delay: 250 });
ScrollReveal().reveal("#experience", { delay: 250 });
ScrollReveal().reveal("#education", { delay: 250 });
ScrollReveal().reveal("#projects", { delay: 250 });
ScrollReveal().reveal("#other", { delay: 250 });

//Image Animations
$("span.project-img").on("mouseover", function (e) {
  $(e.target).addClass("zoom");
});

$("span.project-img").on("mouseout", function (e) {
  $(e.target).addClass("zoomout");
  $(e.target).removeClass("zoom");
  setTimeout(() => $(e.target).removeClass("zoomout"), 500);
});

$("img.timber").on("mouseover", function (e) {
  $(e.target).addClass("wobble-hor-bottom");
});

$("img.timber").on("mouseout", function (e) {
  $(e.target).removeClass("wobble-hor-bottom");
});

//Button Animations

$("button").on("mouseover", function (e) {
  $(e.target).removeClass("heartbeat");
  $(e.target).addClass("zoom-button");
});

$("button").on("mouseout", function (e) {
  $(e.target).addClass("zoomout-button");
  $(e.target).removeClass("zoom-button");
  setTimeout(() => $(e.target).removeClass("zoomout-button"), 500);
});
