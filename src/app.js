let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.left', 10, {y:-10})
.to('.right', 10, {y:-13}, "-=10")
.to('.middle', 10, {y:-15}, "-=10")
.fromTo('.mountains-bg', {y:0}, {y:10, duration: 10}, '-=10')
.to(".main", 10, { top: "0%" }, "-=10");

let scene = new ScrollMagic.Scene({
    triggerElement: ".container",
    duration: "100%",
    triggerHook: 0,
})
.setTween(timeline)
.setPin(".container")
.addTo(controller);