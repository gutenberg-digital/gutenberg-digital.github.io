
// Global transition speed
var transitionSpeed = .5;

// Global ease setting
var easing = Power1.easeOut;

// Banner duration timer start time
var startTime;

// Timeline reference
var tl;

var bannerWidth = 970;

var bannerLeftMargin = 350;


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

var prod5Xsize;
var prod5Ysize;

var prod6Xsize;
var prod6Ysize;

var prod7Xsize;
var prod7Ysize;

var prod8Xsize;
var prod8Ysize;

var prod9size;
var prod9Ysize;

var prod10Xsize;
var prod10Ysize;

var prod11Xsize;
var prod11Ysize;

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

    prod5Xsize = document.getElementById("product5").offsetWidth / 2;
    prod5Ysize = document.getElementById("product5").offsetHeight / 2;

    prod6Xsize = document.getElementById("product6").offsetWidth / 2;
    prod6Ysize = document.getElementById("product6").offsetHeight / 2;

    prod7Xsize = document.getElementById("product7").offsetWidth / 2;
    prod7Ysize = document.getElementById("product7").offsetHeight / 2;

    prod8Xsize = document.getElementById("product8").offsetWidth / 2;
    prod8Ysize = document.getElementById("product8").offsetHeight / 2;

    prod9Xsize = document.getElementById("product9").offsetWidth / 2;
    prod9Ysize = document.getElementById("product9").offsetHeight / 2;

    prod10Xsize = document.getElementById("product10").offsetWidth / 2;
    prod10Ysize = document.getElementById("product10").offsetHeight / 2;

    prod11Xsize = document.getElementById("product11").offsetWidth / 2;
    prod11Ysize = document.getElementById("product11").offsetHeight / 2;

    productsHolderWidth = prod1Xsize + prod2Xsize + prod3Xsize + prod4Xsize + prod5Xsize + prod6Xsize + prod7Xsize + prod8Xsize + prod9Xsize + prod10Xsize + prod11Xsize;

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

    tl.set(["#product1", "#product2", "#product3", "#product4", "#product5", "#product6", "#product7", "#product8", "#product9", "#product10", "#product11"], { force3D: true, rotation: .001 });

    tl.set(["#product1_holder"], { width: prod1Xsize, height: prod1Ysize, force3D: true, rotation: .001 });

    tl.set(["#product2_holder"], { width: prod2Xsize, height: prod2Ysize, force3D: true, rotation: .001 });

    tl.set(["#product3_holder"], { width: prod3Xsize, height: prod3Ysize, force3D: true, rotation: .001 });

    tl.set(["#product4_holder"], { width: prod4Xsize, height: prod4Ysize, force3D: true, rotation: .001 });

    tl.set(["#product5_holder"], { width: prod5Xsize, height: prod5Ysize, force3D: true, rotation: .001 });

    tl.set(["#product6_holder"], { width: prod6Xsize, height: prod6Ysize, force3D: true, rotation: .001 });

    tl.set(["#product7_holder"], { width: prod7Xsize, height: prod7Ysize, force3D: true, rotation: .001 });

    tl.set(["#product8_holder"], { width: prod8Xsize, height: prod8Ysize, force3D: true, rotation: .001 });

    tl.set(["#product9_holder"], { width: prod9Xsize, height: prod9Ysize, force3D: true, rotation: .001 });

    tl.set(["#product10_holder"], { width: prod10Xsize, height: prod10Ysize, force3D: true, rotation: .001 });

    tl.set(["#product11_holder"], { width: prod11Xsize, height: prod11Ysize, force3D: true, rotation: .001 });

    tl.set(["#products_holder"], { width: productsHolderWidth + 3, x: bannerLeftMargin, force3D: true, rotation: .001 });

    tl.set(["#bg1"], { y: 250, force3D: true, rotation: .001 });

    tl.set(["#bg2"], { y: -250, force3D: true, rotation: .001 });


    tl.set(["#main_content"], { autoAlpha: 1, force3D: true, rotation: .001 }, "+=0");

    tl.to(["#bg1"], 1, { y: 0, ease: Power1.easeOut }, "+=0");

    tl.to(["#bg2"], 1, { y: 0, ease: Power1.easeOut }, "-=1");

    tl.to(["#logo", "#end_frame"], 1, { autoAlpha: 1, ease: Power1.easeOut }, "-=0");

    tl.to(["#product_mask"], 0, { autoAlpha: 1, ease: Power1.easeInOut }, "-=0");

    tl.staggerTo([".prod"], 1, { autoAlpha: 1, stagger: 0.5, ease: Power1.easeInOut }, 1);

    tl.to(["#products_holder"], 14, { x: -1650, ease: "none" }, .5);

    tl.to(["#product1_holder"], 1, { autoAlpha: 0, ease: Power1.easeInOut }, 4);

    tl.to(["#product2_holder"], 1, { autoAlpha: 0, ease: Power1.easeInOut }, 6.5);

    tl.to(["#product3_holder"], 1, { autoAlpha: 0, ease: Power1.easeInOut }, 9);

    tl.to(["#product4_holder"], 1, { autoAlpha: 0, ease: Power1.easeInOut }, 11.5);

    tl.to(["#cta"], .5, { autoAlpha: 1, ease: Power1.easeInOut }, 4);

}

// End timer

function endTime() {

    // show total banner animation time in browser console.
    var endTime = new Date()

    console.log("Animation duration: " + ((endTime - startTime) / 1000) + " seconds");

}
