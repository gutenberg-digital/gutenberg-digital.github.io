
// Global transition speed
var transitionSpeed = .5;

// Global ease setting
var easing = Power4.easeOut;

// Banner duration timer start time
var startTime;

// Timeline reference
var tl, tl2, tl3;

//  Loop count
var loops = 0


// Init tricggered by onLoad in Body tag
function init() {

    // Set Banner duration timer
    startTime = new Date();

    // Set Global Timeline
    tl = new TimelineMax({ onComplete:endTime });
    animate();
}


function animate(){
    tl.set(["#main_content"], { autoAlpha:1, force3D:true });

    tl.addLabel('zoom_out', 1)
      .to(['#bg', '#woman'], 2.75, { scale: 1, ease: Power3.easeInOut }, 'zoom_out')
      .to('#t1', 1.4, { autoAlpha: 1, x: 0, ease: Power1.easeInOut }, 'zoom_out+=0.75')
      .to(['#a1', '#v2'], 1.5, { autoAlpha: 1, x: 0, ease: Power1.easeInOut }, 'zoom_out+=0.75')
      .to(['#v1', '#a2'], 1.5, { autoAlpha: 1, x: 0, ease: Power1.easeInOut }, 'zoom_out+=0.85')
      .to('#cta', 0.5, { autoAlpha: 1, ease: Power1.easeIn }, "+=0.5")

    ctaRolloverState()
}

//  Rollover CTA
function ctaRolloverState () {
  document.querySelector('a').addEventListener('mouseover', function(e) {
    TweenMax.to('#cta', 0.25, { scale: 1.05, ease: Power1.easeOut })
  })
  document.querySelector('a').addEventListener('mouseout', function(e) {
    TweenMax.to('#cta', 0.25, { scale: 1, ease: Power1.easeOut })
  })
}

// End timer

function endTime(){

    // show total banner animation time in browser console.
    var endTime = new Date()

    console.log("Animation duration: " + ((endTime - startTime) / 1000) + " seconds");

}
