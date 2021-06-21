// Global transition speed
var transitionSpeed = 0.5;

// Global ease setting
var easing = Power4.easeOut;

// Banner duration timer start time
var startTime;

// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });

  animate();
}

function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });

  tl.set(["#bg_holder", "#bg"], { transformOrigin: "55% 50%", scale: 1 });
  tl.set(["#txtBox", "#ctaBox", "#txt1", "#cta", "#arrow"], { autoAlpha: 0 });

  tl.to(
    ["#bg_holder"],
    10,
    { scale: 1.17, x: "-=0", ease: Power1.easeOut },
    "0"
  );

  tl.to(["#txtBox"], 1, { autoAlpha: 1, ease: Power1.easeOut }, "-=9.5");

  tl.to(["#txt1"], 1, { autoAlpha: 1, ease: Power1.easeOut }, "-=8.5");

  tl.to(
    ["#txtBox", "#txt1"],
    1,
    { autoAlpha: 0, ease: Power1.easeOut },
    "-=5.5"
  );

  tl.to(["#ctaBox"], 1, { autoAlpha: 1, ease: Power1.easeOut }, "-=4.5");

  tl.to(["#cta", "#arrow"], 1, { autoAlpha: 1, ease: Power1.easeOut }, "-=3.5");
}

// End timer

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
