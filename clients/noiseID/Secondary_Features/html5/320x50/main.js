
// Global transition speed
var transitionSpeed = .5;

// Global ease setting
var easing = Power1.easeInOut;

// Banner duration timer start time
var startTime;

// Timeline reference
var tl, tl2;


// Init tricggered by onLoad in Body tag
function init() {

    // Set Banner duration timer
    startTime = new Date();

    // Set Global Timeline
    tl = new TimelineMax({onComplete:endTime});
    tl2 = new TimelineMax({ repeat: 1 })
    animate();

}

var iamsLogoPaths = ['#Path_1', '#Path_2', '#Path_3', '#Path_4', '#Path_5', '#Path_6', '#Path_7', '#Path_7-2', '#Path_8', '#Path_8-2', '#Path_9', '#Path_9-2', '#Path_10', '#Path_10-2', '#Path_11']

function animate(){

    tl.set(["#main_content"], { autoAlpha:1, force3D:true });

    tl.addLabel('start')
      .to('#text_container', 0.5, { y: 0, ease: Power1.easeOut }, "+=0")
      .staggerTo('#t1 > span', 0.5, { autoAlpha: 1, y: 0, ease: Power1.easeInOut }, 0.1)
      .staggerTo('#t1 > span', 0.5, { autoAlpha: 0, y: -5, ease: Power1.easeInOut }, 0.1, "+=2.5")
      .staggerTo('#t2 > span', 0.5, { autoAlpha: 1, y: 0, ease: Power1.easeInOut }, 0.1)
      .to('#t2', 0.5, { autoAlpha: 0, y: 0, ease: Power1.easeInOut }, "+=2.55")

    addListeners()
}

function addListeners() {
  document.getElementById('default_exit').addEventListener('mouseover', cta_Over);
  document.getElementById('default_exit').addEventListener('mouseout', cta_Out);
}

function cta_Over() {
  TweenMax.to(["#cta"], .25, {scale:1.025, ease:easing});
}

function cta_Out() {
  TweenMax.to(["#cta"], .25, {scale:1, ease:easing});
}

// End timer
function endTime(){
  // show total banner animation time in browser console.
  var endTime = new Date()
  console.log("Animation duration: " + ((endTime - startTime) / 1000) + " seconds");
}
