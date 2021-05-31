
// Global transition speed
var transitionSpeed = .5;

// Global ease setting
var easing = Power1.easeOut;

// Banner duration timer start time
var startTime;

// Timeline reference
var tl;

var bannerWidth = 160;

var bannerLeftMargin = -68;


// back up image go to en frame immediatly variable
var back_up_image = "no" /* @otomo string back_up_image_yes_no */

var prod1Xsize;
var prod1Ysize;

var prod2Xsize;
var prod2Ysize;

var prod3Xsize;
var prod3Ysize;

var prod4Xsize;
var prod4Ysize;

var productsHolderWidth;

var scrollDistance;


// Init tricggered by onLoad in Body tag
function init() {

    // Set Banner duration timer
    startTime = new Date();

    // Set Global Timeline
    tl = new TimelineMax({ onComplete: endTime });


    prod1Xsize = document.getElementById("product1").offsetWidth / 2;
    prod1Ysize = document.getElementById("product1").offsetHeight / 2;

    prod2Xsize = document.getElementById("product2").offsetWidth / 2;
    prod2Ysize = document.getElementById("product2").offsetHeight / 2;

    prod3Xsize = document.getElementById("product3").offsetWidth / 2;
    prod3Ysize = document.getElementById("product3").offsetHeight / 2;

    prod4Xsize = document.getElementById("product4").offsetWidth / 2;
    prod4Ysize = document.getElementById("product4").offsetHeight / 2;

    productsHolderWidth = prod1Xsize + prod2Xsize + prod3Xsize + prod4Xsize;

    scrollDistance = (productsHolderWidth) - (bannerWidth + scrollDistance);

    console.log("productsHolderWidth" + productsHolderWidth);
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

    tl.set(["#product1", "#product2", "#product3", "#product4"], { force3D: true, rotation: .001 });

    tl.set(["#product1_holder"], { width: prod1Xsize, height: prod1Ysize, force3D: true, rotation: .001 });

    tl.set(["#product2_holder"], { width: prod2Xsize, height: prod2Ysize, force3D: true, rotation: .001 });

    tl.set(["#product3_holder"], { width: prod3Xsize, height: prod3Ysize, force3D: true, rotation: .001 });

    tl.set(["#product4_holder"], { width: prod4Xsize, height: prod4Ysize, force3D: true, rotation: .001 });

    tl.set(["#products_holder"], { width: productsHolderWidth + 3, x: bannerLeftMargin, force3D: true, rotation: .001 });

    tl.set(["#bg1"], { y: 600, force3D: true, rotation: .001 });

    tl.set(["#bg2"], { y: -600, force3D: true, rotation: .001 });



    tl.set(["#main_content"], { autoAlpha: 1, force3D: true, rotation: .001 }, "+=0");

    tl.to(["#bg1"], 1, { y: 0, ease: Power1.easeOut }, "+=0");

    tl.to(["#bg2"], 1, { y: 0, ease: Power1.easeOut }, "-=1");

    tl.to(["#logo", "#end_frame"], 1, { autoAlpha: 1, ease: Power1.easeOut }, "-=0");

    tl.to(["#product_mask"], 0, { autoAlpha: 1, ease: Power1.easeInOut }, "-=0");

    tl.staggerTo([".prod"], 1, { autoAlpha: 1, stagger: 0.5, ease: Power1.easeInOut }, 1);

    tl.to(["#products_holder"], 11, { x: -878, ease: "none" }, 4);

    tl.to(["#cta"], .5, { autoAlpha: 1, ease: Power1.easeInOut }, 4);

}

// End timer

function endTime() {

    // show total banner animation time in browser console.
    var endTime = new Date()

    console.log("Animation duration: " + ((endTime - startTime) / 1000) + " seconds");

}
