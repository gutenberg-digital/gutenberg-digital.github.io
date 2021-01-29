var startTime, spriteFrames, isEnd;

//var headline1, headline2;

var Banner = ( function() {

	function banner() {
		this.init();

		this.startAnimation();

		isEnd = false;
	}

	banner.prototype.init = function() {

		$('#bannerClick').addEventListener('click', this.onClick.bind(this));
		$('#bannerClick').addEventListener('mouseover', this.onOver.bind(this));
		$('#bannerClick').addEventListener('mouseout', this.onOut.bind(this));

		TweenMax.set(['#cta', '#cta-over'], {transformOrigin: '884px 146px', autoAlpha:0});


		this.mainTL = new TimelineMax({ paused: true, force3D: true, onComplete: endAnimation, defaultEase: Power2.easeOut })

			.from(['#headline'], 0.75, {autoAlpha:1})

			.to(['#logo'], 0.5, {autoAlpha:1}, 1)

			.to(['#cta'], 0.5, {autoAlpha: 1, delay:1, onComplete:this.end})

			.to(['#swirl-gif'], 0.5, {autoAlpha: 0, delay:25})



		// this.ctaTL = new TimelineMax({ paused: true, force3D: true,  defaultEase: Power2.easeOut })

		// 	.to(['#cta'], .25,{scale:1.1})
		// 	.to(['#cta'], .2,{scale:1})

		// this.show
		$('#banner').classList.remove('hide');
	}

	banner.prototype.startAnimation = function() {
		startTime = new Date();

		this.mainTL.play();
	}

	banner.prototype.end = function() {
		isEnd=true;
	};

	banner.prototype.onClick = function() {
		window.open(window.clickTag);
		this.mainTL.progress(1);
		TweenMax.killAll(true);
	}

	banner.prototype.onOver = function() {
		if(isEnd){
			TweenMax.to(['#cta-over'], .5,{autoAlpha:1})
			TweenMax.to(['#cta'], .5,{autoAlpha:0})
		}
	}

	banner.prototype.onOut = function() {
		TweenMax.to(['#cta-over'], .5,{autoAlpha:0})
		TweenMax.to(['#cta'], .5,{autoAlpha:1})
	}

	return banner;

})();

//call this at the end of animation sequence
function endAnimation() {
    var endTime = new Date()
    console.log('Animation duration: ' + ((endTime - startTime) / 1000) + ' seconds');
}

window.addEventListener('load', function(){
	new Banner();
});

window.$=function(e,t,l){var n={"#":"getElementById",".":"getElementsByClassName","@":"getElementsByName","=":"getElementsByTagName","*":"querySelectorAll"}[e[0]],m=(t===l?document:t)[n](e.slice(1));return m.length<2?m[0]:m};window.Element.prototype.find=function(selector){return $(selector, this);};
