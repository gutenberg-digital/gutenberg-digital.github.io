
// Global transition speed
var transitionSpeed = .5;

// Global ease setting
var easing = Power1.easeOut;

// Banner duration timer start time
var startTime;

// Timeline reference
var tl;

var bannerWidth = 300;

var bannerLeftMargin = 200;


// back up image go to en frame immediatly variable
var back_up_image = "no" /* @otomo string back_up_image_yes_no */


// Init tricggered by onLoad in Body tag
function init() {

    // Set Banner duration timer
    startTime = new Date();

    // Set Global Timeline
    tl = new TimelineMax({ onComplete: endTime });

    animate();

    if (back_up_image == "no") {
        // tl.seek("frame_1");
        // tl.seek("frame_2");
        // tl.seek("frame_3");
        // tl.seek("end_frame");
        tl.play();
    } else {
        tl.progress(1).pause();
    }

}

function addListeners() {
    document.getElementById("default_exit").addEventListener('mouseover', rolloverExit);
    document.getElementById("default_exit").addEventListener('mouseout', rolloutExit);
}

function rolloverExit() {
    TweenMax.set("#cta", { autoAlpha: 0 });
    TweenMax.set("#cta_over", { autoAlpha: 1 });
}

function rolloutExit() {
    TweenMax.set("#cta", { autoAlpha: 1 });
    TweenMax.set("#cta_over", { autoAlpha: 0 });
}

function textAnim() {

    tlText = new TimelineMax({});

}

function animate() {

    tl.pause();

    tl.set(["#bg1"], { y: 250, force3D: true, rotation: .001 });

    tl.set(["#bg2"], { y: -250, force3D: true, rotation: .001 });



    tl.set(["#main_content"], { autoAlpha: 1, force3D: true, rotation: .001 }, "+=0");

    tl.to(["#bg1"], 1, { y: 0, ease: Power1.easeOut }, "+=0");

    tl.to(["#bg2"], 1, { y: 0, ease: Power1.easeOut }, "-=1");

    tl.to(["#logo"], 1, { autoAlpha: 1, ease: Power1.easeOut }, "-=0");

    tl.to(["#copy1"], 1, { autoAlpha: 1, ease: Power1.easeInOut }, "+=0");

    tl.to(["#copy1"], 1, { autoAlpha: 0, ease: Power1.easeInOut }, "+=3");

    tl.to(["#copy2"], 1, { autoAlpha: 1, ease: Power1.easeInOut }, "+=0.5");

    tl.to(["#copy2"], 1, { autoAlpha: 0, ease: Power1.easeInOut }, "+=3");

    tl.to(["#cta"], 1, { autoAlpha: 1, ease: Power1.easeInOut }, "+=.5");

}

// End timer

function endTime() {

    // show total banner animation time in browser console.
    var endTime = new Date()

    console.log("Animation duration: " + ((endTime - startTime) / 1000) + " seconds");

}
