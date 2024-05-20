jQuery(function($) {

$(document).ready(function() {
	
	"use strict";
	
	HeroHeight();
	FirstLoad();
	VirtualScr();	
	PageAnim();	
	HeaderHeight();
	OpenHeader();
	FullPage();
	PlayVideo();
	ClassicSlider();
	Carousel();
	CarouselTeamHeight();
	MagnificPopup();
  	BackToTop();
	HideShowHeader();	
	FooterAppear();
	InitContactMap();
	MagnificPopup();
	AppearIteam();
	CollagePlus();
	Shortcodes();	
});

$(window).on( 'resize', function () {
	CarouselTeamHeight();
	CollagePlus();
});

$(window).scroll(function(e){
	HeroParallax();
	HeaderReachBottom();
});



/*--------------------------------------------------
Function Firs tLoad
---------------------------------------------------*/	


	function FirstLoad() {		
		
		$('body').waitForImages({
			finished: function() {
				setTimeout( function(){
					
					setTimeout( function(){
						$("#cd-main").removeClass("hidden"); 
						$("#showcase-holder").removeClass("hidden");   
					} , 50 );
					
					setTimeout( function(){
						$("header, .hamburger").removeClass("hidden");
						$("footer").appear(function() {
							$(this).removeClass("hidden");
						});
						
					} , 100 );						
					
					setTimeout( function(){
						$("#hero").removeClass("hidden");  
					} , 250 );
									
					setTimeout( function(){
						$("#main-content").removeClass("hidden");
						MasonryPortfolio();
						$("#page-counter-mask").removeClass("fade-out");						
					} , 300 );
					
					setTimeout( function(){						
						$("#showcase-slider").removeClass("delay");				
					} , 1500 );						
					
				} , 100 );
			},
			waitForAll: true
		});	
			
		
	}// End First Load
	
	
/*--------------------------------------------------
Function Virtual Scroll
---------------------------------------------------*/	


	function VirtualScr() {		
		
		var enable_smooth_scroll = false;
		if( typeof ClapatVillarThemeOptions != 'undefined' ){
			
			if( ClapatVillarThemeOptions.enable_smooth_scrolling == true ){
				
				enable_smooth_scroll = true;
			}
		}
		
		if( enable_smooth_scroll ){
			
			new SmoothScroll();

			function SmoothScroll(el) {
			  var t = this, h = document.documentElement;
			  el = el || window;
			  t.rAF = false;
			  t.target = 0;
			  t.scroll = 0;
			  t.animate = function() {
				t.scroll += (t.target - t.scroll) * 0.1;
				if (Math.abs(t.scroll.toFixed(5) - t.target) <= 0.47131) {
				  cancelAnimationFrame(t.rAF);
				  t.rAF = false;
				}
				if (el == window) scrollTo(0, t.scroll);
				else el.scrollTop = t.scroll;
				if (t.rAF) t.rAF = requestAnimationFrame(t.animate);
			  };
			  el.onmousewheel = function(e) {
				e.preventDefault();
				e.stopPropagation();
				var scrollEnd = (el == window) ? h.scrollHeight - h.clientHeight : el.scrollHeight - el.clientHeight;
				t.target += (e.wheelDelta > 0) ? -100 : 100;
				if (t.target < 0) t.target = 0;
				if (t.target > scrollEnd) t.target = scrollEnd;
				if (!t.rAF) t.rAF = requestAnimationFrame(t.animate);
			  };
			  el.onscroll = function() {
				if (t.rAF) return;
				t.target = (el == window) ? pageYOffset || h.scrollTop : el.scrollTop;
				t.scroll = t.target;
			  };
			}
		}
		
	}// End First Load	



/*--------------------------------------------------
Function Page Animation
---------------------------------------------------*/	


	function PageAnim() {
		
		var in_duration = 1;
		var loading_parent_element = 'body';
		if( typeof ClapatVillarThemeOptions != 'undefined' ){
			
			if( ClapatVillarThemeOptions.enable_preloader == true ){
				
				in_duration = 1500;
				loading_parent_element = 'html';
			}
		}
		
		$(".animsition").animsition({
	  
			inClass               :   'fade-in',
			outClass              :   'fade-out',
			inDuration            :    in_duration,
			outDuration           :    300,
			linkElement           :   '.animation-link',
			loading               :    true,
			loadingParentElement  :   loading_parent_element,
			loadingClass          :   'animsition-loading',
			unSupportCss          : [ 'animation-duration',
									  '-webkit-animation-duration',
									  '-o-animation-duration'
									],			
			overlay               :   false,			
			overlayClass          :   'animsition-overlay-slide',
			overlayParentElement  :   'body'
	  });
	
		
	}// End Page Animation


	
/*--------------------------------------------------
Function Hero Height
---------------------------------------------------*/	
	
	function HeroHeight() {
		
		var heights = window.innerHeight;
		
		if( $('#hero').length > 0 ){
		
			if ($('#hero').hasClass('hero-small')) {
				var heights = window.innerHeight;
				document.getElementById("hero").style.height = heights * 0.5 + "px";
			} else if ($('#hero').hasClass('hero-large')) {
				var heights = window.innerHeight;
				document.getElementById("hero").style.height = heights * 0.65 + "px";
			}  else  {			
				var heights = window.innerHeight;
				document.getElementById("hero").style.height = heights + "px";
			}
		
		} else {
			$('#main').addClass('no-hero-page');
		}
		
	}//End Hero Height
	
		
	
/*--------------------------------------------------
Function Header Height
---------------------------------------------------*/	
	
	function HeaderHeight() {
		
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
			
			
			if( $('.villar_portfolio-template-default').length > 0 ){
				if (scroll >= 300) {
					$("header").removeClass("big-header");
				} else {
					$("header").addClass("big-header");
				}
			} else {
				if (scroll >= 50) {
					$("header").removeClass("big-header");
				} else {
					$("header").addClass("big-header");
				}
			}
			
			if (scroll >= 50) {
				$(".icon-scroll").addClass("disable");
			} else {
				$(".icon-scroll").removeClass("disable");
			}
		});
		
	}//End Header Height
	
	
	
/*--------------------------------------------------
Function HeroParallax
---------------------------------------------------*/	
	
	function HeroParallax() {
	
		var page_title = $('body');
		var block_intro = page_title.find('#hero-styles');
		if( block_intro.length > 0 ) var block_intro_top = block_intro.offset().top;	
	
		var current_top = $(document).scrollTop(); 
		var hero_height = $('#hero-styles').height();
		if( $('#hero-styles').hasClass('parallax-hero')){			  
			block_intro.css('top', (current_top*0.3));			
		}
		if( $('#hero-styles').hasClass('static-hero')){			  
			block_intro.css('top', (current_top*1));			
		}
		if( $('#hero-styles').hasClass('opacity-hero')){				 
			block_intro.css('opacity', (1 - current_top / hero_height * 2));
		}
		$('.project-bg-image').css('opacity', (1 - current_top / $('.project-bg-image').height() * 2));
	
	}//End HeroParallax
	
	
	
/*--------------------------------------------------
Function Open Header
---------------------------------------------------*/
	
	function OpenHeader() {		
		
		$(".hamburger, #close-filters").click(function() {
			if ($("#filters").hasClass('is-active')){
				$("#filters").toggleClass("is-active");
				setTimeout(function(){	
					$("#cd-main").toggleClass("is-down");
				},( 300 ));
				$(".hamburger ").removeClass("is-active");
				$(".disable-content").toggleClass("is-active");	
			} else {
				if ($(document).scrollTop() >= 150) {    				
					$('html, body').animate({ scrollTop: 0 },400);
					setTimeout(function(){
						$(".hamburger ").addClass("is-active");
						$("#cd-main").toggleClass("is-down");
						$("#filters").toggleClass("is-active");					
						$(".disable-content").toggleClass("is-active");
					},( 600 ));
				} else {
					$('html, body').animate({ scrollTop: 0 },300);
					$(".hamburger ").addClass("is-active");
					$("#cd-main").toggleClass("is-down");	
					$("#filters").toggleClass("is-active");					
					$(".disable-content").toggleClass("is-active");
				}
			}
		});
		
		
		$("#search-toggle, #close-search").click(function() {
			if ($("#search-field").hasClass('is-active')){
				$("#search-field").toggleClass("is-active");
				setTimeout(function(){	
					enableScroll();
					$("#cd-main").toggleClass("is-down");
				},( 300 ));
				$(".disable-content-blog").toggleClass("is-active");	
			} else {
				if ($(document).scrollTop() >= 150) {    				
					$('html, body').animate({ scrollTop: 0 },400);
					setTimeout(function(){
						$("#search-field").toggleClass("is-active");					
						$(".disable-content-blog").toggleClass("is-active");
						$("#cd-main").toggleClass("is-down");
						disableScroll();				
					},( 600 ));
				} else {
					$('html, body').animate({ scrollTop: 0 },300);
					$("#search-field").toggleClass("is-active");
					$("#cd-main").toggleClass("is-down");	
					$(".disable-content-blog").toggleClass("is-active");
					disableScroll();	
				}
			}
		});
		
		$("#share-toggle, #close-share").click(function() {
			if ($("#share-field").hasClass('is-active')){
				$("#share-field").toggleClass("is-active");
				setTimeout(function(){	
					enableScroll();				
				},( 300 ));
				$(".disable-content-project").toggleClass("is-active");	
			} else {
				if ($(document).scrollTop() >= 150) {    				
					$('html, body').animate({ scrollTop: 0 },400);
					setTimeout(function(){
						$("#share-field").toggleClass("is-active");					
						$(".disable-content-project").toggleClass("is-active");						
						disableScroll();				
					},( 600 ));
				} else {
					$('html, body').animate({ scrollTop: 0 },300);
					$("#share-field").toggleClass("is-active");					
					$(".disable-content-project").toggleClass("is-active");
					disableScroll();	
				}
			}
		});
		
		$("#openform, #close-contact").click(function() {
			if ($("#contact-field").hasClass('is-active')){
				$("#contact-field").toggleClass("is-active");
				setTimeout(function(){	
					$("#cd-main").toggleClass("is-down");				
				},( 300 ));
				$(".disable-content-contact").toggleClass("is-active");	
			} else {
				if ($(document).scrollTop() >= 150) {    				
					$('html, body').animate({ scrollTop: 0 },400);
					setTimeout(function(){
						$("#contact-field").toggleClass("is-active");					
						$(".disable-content-contact").toggleClass("is-active");
						$("#cd-main").toggleClass("is-down");
					},( 600 ));
				} else {
					$('html, body').animate({ scrollTop: 0 },300);
					$("#contact-field").toggleClass("is-active");					
					$(".disable-content-contact").toggleClass("is-active");
					$("#cd-main").toggleClass("is-down");
				}
			}
		});
		
		
		var keys = {37: 1, 38: 1, 39: 1, 40: 1};

		function preventDefault(e) {
		  e = e || window.event;
		  if (e.preventDefault)
			  e.preventDefault();
		  e.returnValue = false;  
		}
		
		function preventDefaultForScrollKeys(e) {
			if (keys[e.keyCode]) {
				preventDefault(e);
				return false;
			}
		}
		
		function disableScroll() {
		  if (window.addEventListener) // older FF
			  window.addEventListener('DOMMouseScroll', preventDefault, false);
			  window.onwheel = preventDefault; // modern standard
			  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
			  window.ontouchmove  = preventDefault; // mobile
			  document.onkeydown  = preventDefaultForScrollKeys;
		}
		
		function enableScroll() {
			if (window.removeEventListener)
				window.removeEventListener('DOMMouseScroll', preventDefault, false);
				window.onmousewheel = document.onmousewheel = null; 
				window.onwheel = null; 
				window.ontouchmove = null;  
				document.onkeydown = null;  
		}
		
			
			
	}//End Open Header	
	
		
	

/*--------------------------------------------------
Function FullPage
---------------------------------------------------*/
	
	function FullPage() {
		
		if( $('#showcase-slider').length > 0 ){		
	
			$('#showcase-slider').fullpage({
       			css3: true,
				navigation: true,
        		navigationPosition: 'right',
				afterLoad: function(anchorLink, index, direction){
					if(index == 1){
						$("#page-counter").css({top:0});
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
					if(index == 2){
						$("#page-counter").css({top:-20});
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );		
					}
					if(index == 3){
						$("#page-counter").css({top:-40})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}					
					if(index == 4){
						$("#page-counter").css({top:-60})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
					if(index == 5){
						$("#page-counter").css({top:-80})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );					
					}
					if(index == 6){
						$("#page-counter").css({top:-100})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
					if(index == 7){
						$("#page-counter").css({top:-120})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}					
					if(index == 8){
						$("#page-counter").css({top:-140})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
					if(index == 9){
						$("#page-counter").css({top:-160})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
					if(index == 10){
						$("#page-counter").css({top:-180})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
					if(index == 11){
						$("#page-counter").css({top:-200});
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
					if(index == 12){
						$("#page-counter").css({top:-220})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
					if(index == 13){
						$("#page-counter").css({top:-240})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}					
					if(index == 14){
						$("#page-counter").css({top:-260})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
					if(index == 15){
						$("#page-counter").css({top:-280})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );					
					}
					if(index == 16){
						$("#page-counter").css({top:-300})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
					if(index == 17){
						$("#page-counter").css({top:-320})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}					
					if(index == 18){
						$("#page-counter").css({top:-340})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
					if(index == 19){
						$("#page-counter").css({top:-360})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
					if(index == 20){
						$("#page-counter").css({top:-380})
						setTimeout( function(){
							if ($(".active").hasClass("light-content")) {
								$('#cd-main').addClass("project-light-content");
							} else {
								$('#cd-main').removeClass("project-light-content");
							}
						} , 300 );	
					}
				},
				
				onLeave: function(index, nextIndex, direction){
					var leavingSection = $(this);
		
					//after leaving section 2
					if(index  && direction =='down'){
						setTimeout( function(){
							$(".slider-animate-box").addClass("from-right");
							setTimeout( function(){
								$(".slider-animate-box").addClass("from-right-end");
								setTimeout( function(){
									$(".slider-animate-box").removeClass("from-right");
									$(".slider-animate-box").removeClass("from-right-end");
								} , 400 );
							} , 500 );
						} , 500 );
						setTimeout( function(){
							$("#page-counter-mask").addClass("fade-out");
							setTimeout( function(){
								$("#page-counter-mask").removeClass("fade-out");															
							} , 1000 );
						} , 10 );
					}
		
					else if(index  && direction == 'up'){
						setTimeout( function(){
							$(".slider-animate-box").addClass("from-left");
							setTimeout( function(){
								$(".slider-animate-box").addClass("from-left-end");
								setTimeout( function(){
									$(".slider-animate-box").removeClass("from-left");
									$(".slider-animate-box").removeClass("from-left-end");
								} , 400 );
							} , 500 );
						} , 500 );
						setTimeout( function(){
							$("#page-counter-mask").addClass("fade-out");
							setTimeout( function(){								
								$("#page-counter-mask").removeClass("fade-out");															
							} , 1000 );
						} , 10 );
					}
					
				}
							
       		});
			
			if ($(".active").hasClass("light-content")) {
				$('#cd-main').addClass("project-light-content");
			}	
			
		}
			
	}//End FullPage
	
	
/*--------------------------------------------------
Function Page PlayVideo
---------------------------------------------------*/	


	function PlayVideo() {
		
		var figure = $(".bg-video").hover( hoverVideo, hideVideo );

		function hoverVideo(e) {  
			$('video', this).get(0).play(); 
		}
		function hideVideo(e) {			
			$('video', this).get(0).pause();					 
			//$('video', this).get(0).currentTime = 0;			
		}

	
		if( jQuery('.video-wrapper-full').length > 0 ){	
		
			
			var video = $('#myVideo');
			
			//remove default control when JS loaded
			video[0].removeAttribute("controls");
			$('.control').fadeIn(500);
			$('.caption').fadeIn(500);
		 
			//before everything get started
			video.on('loadedmetadata', function() {
					
				//set video properties
				$('.current').text(timeFormat(0));
				$('.duration').text(timeFormat(video[0].duration));
				updateVolume(0, 0.7);
					
				//start to get video buffering data 
				setTimeout(startBuffer, 150);
					
				//bind video events
				$('.videoContainer')
				.hover(function() {
					$('.control').stop().fadeIn();
					$('.caption').stop().fadeIn();
				}, function() {
					if(!volumeDrag && !timeDrag){
						$('.control').stop().fadeOut();
						$('.caption').stop().fadeOut();
					}
				})
				
			});
			
			//display video buffering bar
			var startBuffer = function() {
				var currentBuffer = video[0].buffered.end(0);
				var maxduration = video[0].duration;
				var perc = 100 * currentBuffer / maxduration;
				$('.bufferBar').css('width',perc+'%');
					
				if(currentBuffer < maxduration) {
					setTimeout(startBuffer, 500);
				}
			};	
			
			//display current video play time
			video.on('timeupdate', function() {
				var currentPos = video[0].currentTime;
				var maxduration = video[0].duration;
				var perc = 100 * currentPos / maxduration;
				$('.timeBar').css('width',perc+'%');	
				$('.current').text(timeFormat(currentPos));	
			});
			
			//CONTROLS EVENTS
			//video screen and play button clicked
			video.on('click', function() { playpause(); } );
			
			var playpause = function() {
				if(video[0].paused || video[0].ended) {			
					video[0].play();
				}
				else {			
					video[0].pause();
				}
			};
		
			
			//fullscreen button clicked
			$('.btnFS').on('click', function() {
				if($.isFunction(video[0].webkitEnterFullscreen)) {
					video[0].webkitEnterFullscreen();
				}	
				else if ($.isFunction(video[0].mozRequestFullScreen)) {
					video[0].mozRequestFullScreen();
				}
				else {
					alert('Your browsers doesn\'t support fullscreen');
				}
			});
			
			//sound button clicked
			$('.sound').click(function() {
				video[0].muted = !video[0].muted;
				$(this).toggleClass('muted');
				if(video[0].muted) {
					$('.volumeBar').css('width',0);
				}
				else{
					$('.volumeBar').css('width', video[0].volume*100+'%');
				}
			});
			
			//VIDEO EVENTS
			//video canplay event
			video.on('canplay', function() {
				$('.loading').fadeOut(100);
			});
			
			//video canplaythrough event
			//solve Chrome cache issue
			var completeloaded = false;
			video.on('canplaythrough', function() {
				completeloaded = true;
			});
			
			//video ended event
			video.on('ended', function() {		
				video[0].pause();
			});
		
			//video seeking event
			video.on('seeking', function() {
				//if video fully loaded, ignore loading screen
				if(!completeloaded) { 
					$('.loading').fadeIn(200);
				}	
			});
			
			//video seeked event
			video.on('seeked', function() { });
			
			//video waiting for more data event
			video.on('waiting', function() {
				$('.loading').fadeIn(200);
			});
			
			//VIDEO PROGRESS BAR
			//when video timebar clicked
			var timeDrag = false;	/* check for drag event */
			$('.progress').on('mousedown', function(e) {
				timeDrag = true;
				updatebar(e.pageX);
			});
			$(document).on('mouseup', function(e) {
				if(timeDrag) {
					timeDrag = false;
					updatebar(e.pageX);
				}
			});
			$(document).on('mousemove', function(e) {
				if(timeDrag) {
					updatebar(e.pageX);
				}
			});
			var updatebar = function(x) {
				var progress = $('.progress');
				
				//calculate drag position
				//and update video currenttime
				//as well as progress bar
				var maxduration = video[0].duration;
				var position = x - progress.offset().left;
				var percentage = 100 * position / progress.width();
				if(percentage > 100) {
					percentage = 100;
				}
				if(percentage < 0) {
					percentage = 0;
				}
				$('.timeBar').css('width',percentage+'%');	
				video[0].currentTime = maxduration * percentage / 100;
			};	
		
			//Time format converter - 00:00
			var timeFormat = function(seconds){
				var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
				var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
				return m+":"+s;
			};
			
		}
		
	}// End PlayVideo		
	
	
	

		
	
	
/*--------------------------------------------------
Function Classic Slider
---------------------------------------------------*/	
		
	function ClassicSlider() {
		
		if( $('.classic-slider').length > 0 ){	
			$('.classic-slider').flexslider({
				animation: "slide",
				direction: "horizontal",
				animationSpeed: 1000,
				animationLoop: true,
				smoothHeight: false,
				controlNav: false,
				slideshow: false,						
			});
		}
		
	}//End ClassicSlider
	
	
	
/*--------------------------------------------------
Function Carousel
---------------------------------------------------*/	
	
	function Carousel() {
		
		if( $('.clients-carousel').length > 0 ){
		
			$(".clients-carousel").owlCarousel({	
				loop:true,
				margin:40,
				autoplay: true,
				autoplayTimeout: 5000,
				dots:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},            
					960:{
						items:3
					},
					1200:{
						items:4
					},
					1500:{
						items:4
					}
				}
				
			});
		  
		}
		
		
		if( $('.text-carousel').length > 0 ){
		
			$(".text-carousel").owlCarousel({	
				loop:true,
				dots:true,
				dotsEach: 1,
				items:1,
			});
		  
		}
		
		
		if( $('.team-carousel').length > 0 ){
		
			$(".team-carousel").owlCarousel({	
				loop:true,
				dots:false,
				autoplay: true,
				autoplayTimeout: 6000,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},            
					960:{
						items:3
					},
					1200:{
						items:4
					}
				}
				
			});
		  
		}
		
	}//End Carousel	
	
	
/*--------------------------------------------------
Function CarouselTeamHeight
---------------------------------------------------*/	
	
	function CarouselTeamHeight() {
		
		if( $('.team-carousel').length > 0 ){	
		
			var listwidth = $('.team-member-carousel').width();
			$('.team-member-carousel').css({'height': listwidth + 'px'});
	
		}
		
	}//End CarouselTeamHeight
	
	
	
/*--------------------------------------------------
Function Back To Top Button
---------------------------------------------------*/
	
	function BackToTop() {
		
		//Click event to scroll to top
		$('.scrolltotop').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
		
		$('#gotomap').click(function(){
			$('html, body').animate({ scrollTop: $('#main').offset().top - 100 },800);
			return false;
		});
		
		$('#hero .icon-scroll').click(function(){
			$('html, body').animate({ scrollTop: $('#main').offset().top +1 },800);
			return false;
		});
	
	}//End BackToTop
	
	
	
/*--------------------------------------------------
Function Hide Show Header
---------------------------------------------------*/
	
	function HideShowHeader() {
			
			var didScroll;
			var lastScrollTop = 0;
			var delta = 5;
			var navbarHeight = 10;
			var navbarHideAfter = navbarHeight
			
			$(window).scroll(function(event){
				didScroll = true;
			});			
			
			if( $('.scroll-hide').length > 0 ){
				
				setInterval(function() {
					if (didScroll) {
						hasScrolled();
						didScroll = false;
					}
				}, 100);
			
			}
		
			return false;
			
			function hasScrolled() {
				var st = $(this).scrollTop();
				
				if(Math.abs(lastScrollTop - st) <= delta)
					return;
				
				if (st > lastScrollTop && st > navbarHideAfter){
					if( $('.scroll-hide').length > 0 ){
					$('header').addClass('nav-hide');
					}
				} else {
					if( $('.scroll-hide').length > 0 ){
					if(st + $(window).height() < $(document).height()) {
						$('header').removeClass('nav-hide');
					}
					}
				}
				
				lastScrollTop = st;
			}
			
			
	}//End Hide Show Header		
	


/*--------------------------------------------------
Function HeaderReachBottom
---------------------------------------------------*/
	
	function HeaderReachBottom() {	
	
		if($(window).scrollTop() + $(window).height() > ($(document).height() - 50 ) ) {
			//you are at bottom
			$('header').addClass('reach-bottom');
		} else {
			$('header').removeClass('reach-bottom');
		}
		
	}//End HeaderReachBottom				
	
		
	
/*--------------------------------------------------
Function Masonry Portfolio
---------------------------------------------------*/	
		
	function MasonryPortfolio() {	
	
		if( $('#portfolio-wrap').length > 0 ){
			
		
			var $container = $('#portfolio');
		
			$container.isotope({
				layoutMode: 'packery',
			  itemSelector: '.item',
			  gutter:0,
			  transitionDuration: "0.5s"
			});
			
			$('#filters a').click(function(){
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector });		
				return false;
			});
			
			$(window).on( 'resize', function () {
			
				var winWidth = window.innerWidth;
				columnNumb = 1;			
				var attr_col = $('#portfolio').attr('data-col');
					
				 if (winWidth >= 1024) {
					
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 100 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() - 140 + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					if (typeof attr_col !== typeof undefined && attr_col !== false) {
						columnNumb = $('#portfolio').attr('data-col');
					} else columnNumb = 3;
					
					postHeight = window.innerHeight
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						
						
			
						
						if ( $('#portfolio').attr('data-col') == '4' ) {						
							if( $('.hover-visible-text').length > 0 ){
								$('.item').css( { 
									width : postWidth * 1 - 30 + 'px',
									height : postWidth * 0.7 + 55 + 'px',
									margin : 15 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth + 'px',
									height : postWidth * 0.7  + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 2 - 30 + 'px',
									height : postWidth * 1.4 + 140 + 'px',
									margin : 15 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px'  
								});
								$('.item.wider').css( { 
									width : postWidth * 2 - 30 + 'px',
									height : postWidth * 0.7 + 55 + 'px',
									margin : 15 + 'px' 
								});
								$('.no-gutter .item.wider').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 0.7 + 'px',
									margin : 0 + 'px'  
								});
								$('.item.tall').css( { 
									width : postWidth * 1 - 30 + 'px',
									height : postWidth * 1.4 + 140 + 'px',
									margin : 15 + 'px' 
								});
								$('.no-gutter .item.tall').css( { 
									width : postWidth + 'px',
									height : postWidth * 1.4  + 'px',
									margin : 0 + 'px' 
								});	
							} else {
								$('.item').css( { 
									width : postWidth * 1 - 30 + 'px',
									height : postWidth * 0.7 - 30 + 'px',
									margin : 15 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth + 'px',
									height : postWidth * 0.7 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 2 - 30 + 'px',
									height : postWidth * 1.4 - 30 + 'px',
									margin : 15 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px'  
								});
								$('.item.wider').css( { 
									width : postWidth * 2 - 30 + 'px',
									height : postWidth * 0.7 - 30 + 'px',
									margin : 15 + 'px' 
								});
								$('.no-gutter .item.wider').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 0.7 + 'px',
									margin : 0 + 'px'  
								});
								$('.item.tall').css( { 
									width : postWidth * 1 - 30 + 'px',
									height : postWidth * 1.4 - 30 + 'px',
									margin : 15 + 'px' 
								});
								$('.no-gutter .item.tall').css( { 
									width : postWidth + 'px',
									height : postWidth * 1.4  + 'px',
									margin : 0 + 'px' 
								});
							}
						}
						
						if ( $('#portfolio').attr('data-col') == '3' ) {						
							if( $('.hover-visible-text').length > 0 ){
								$('.item').css( { 
									width : postWidth * 1 - 50 + 'px',
									height : postWidth * 0.7  + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth + 'px',
									height : postWidth * 0.7  + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 2 - 50 + 'px',
									height : postWidth * 1.4 + 50 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px'  
								});	
								$('.item.wider').css( { 
									width : postWidth * 2 - 50 + 'px',
									height : postWidth * 0.7 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.wider').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 0.7 + 'px',
									margin : 0 + 'px'  
								});
								$('.item.tall').css( { 
									width : postWidth * 1 - 50 + 'px',
									height : postWidth * 1.4 + 50 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.tall').css( { 
									width : postWidth + 'px',
									height : postWidth * 1.4  + 'px',
									margin : 0 + 'px' 
								});
							} else {
								$('.item').css( { 
									width : postWidth * 1 - 50 + 'px',
									height : postWidth * 0.7 - 50 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth + 'px',
									height : postWidth * 0.7 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 2 - 50 + 'px',
									height : postWidth * 1.4 - 50 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px'  
								});	
								$('.item.wider').css( { 
									width : postWidth * 2 - 50 + 'px',
									height : postWidth * 0.7 - 50 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.wider').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 0.7 + 'px',
									margin : 0 + 'px'  
								});
								$('.item.tall').css( { 
									width : postWidth * 1 - 50 + 'px',
									height : postWidth * 1.4 - 50 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.tall').css( { 
									width : postWidth + 'px',
									height : postWidth * 1.4  + 'px',
									margin : 0 + 'px' 
								});
							}
						}  
						
						if ( $('#portfolio').attr('data-col') == '2' ) {
							if( $('.hover-visible-text').length > 0 ){
								$('.item').css( { 
									width : postWidth * 1 - 50 + 'px',
									height : postWidth * 0.7  + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth + 'px',
									height : postWidth * 0.7  + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 2 - 50 + 'px',
									height : postWidth * 1.4 - 250 + 'px',
									margin : 25 + 'px'
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 1.4 - 250 + 'px',
									margin : 0 + 'px'  
								});	
								$('.item.wider').css( { 
									width : postWidth * 1 - 50 + 'px',
									height : postWidth * 0.7  + 'px',
									margin : 25 + 'px'
								});
								$('.no-gutter .item.wider').css( { 
									width : postWidth * 1  + 'px',
									height : postWidth * 0.7 + 'px',
									margin : 0 + 'px'  
								});
								$('.item.tall').css( { 
									width : postWidth * 1 - 50 + 'px',
									height : postWidth * 1.4 + 50 + 'px',
									margin : 25 + 'px'
								});
								$('.no-gutter .item.tall').css( { 
									width : postWidth + 'px',
									height : postWidth * 1.4  + 'px',
									margin : 0 + 'px' 
								});
							} else {
								$('.item').css( { 
									width : postWidth * 1 - 50 + 'px',
									height : postWidth * 0.6 - 50 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth + 'px',
									height : postWidth * 0.6 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 2 - 50 + 'px',
									height : postWidth * 1.2 - 200 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 1.2 - 200 + 'px',
									margin : 0 + 'px'  
								});	
								$('.item.wider').css( { 
									width : postWidth * 1 - 50 + 'px',
									height : postWidth * 0.6 - 50 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.wider').css( { 
									width : postWidth * 1  + 'px',
									height : postWidth * 0.6 + 'px',
									margin : 0 + 'px'  
								});
								$('.item.tall').css( { 
									width : postWidth * 1 - 50 + 'px',
									height : postWidth * 1.2 - 50 + 'px',
									margin : 25 + 'px' 
								});
								$('.no-gutter .item.tall').css( { 
									width : postWidth + 'px',
									height : postWidth * 1.2  + 'px',
									margin : 0 + 'px' 
								});
							}	
						}
						
					});
					
					
				} else if (winWidth > 767) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 60 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width()  + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						if( $('.hover-visible-text').length > 0 ){
							$('.item').css( { 
								width : postWidth * 1 - 50 + 'px',
								height : postWidth * 0.7  + 'px',
								margin : 25 + 'px' 
							});
							$('.no-gutter .item').css( {
								width : postWidth + 'px',
								height : postWidth * 0.7  + 'px',
								margin : 0 + 'px' 
							});
							$('.item.wide').css( { 
								width : postWidth * 2 - 50 + 'px',
								height : postWidth * 1.1 + 50 + 'px',
								margin : 25 + 'px' 
							});
							$('.no-gutter .item.wide').css( { 
								width : postWidth * 2  + 'px',
								height : postWidth * 1.1 + 'px',
								margin : 0 + 'px'  
							});	
							$('.item.wider').css( { 
								width : postWidth * 1 - 50 + 'px',
								height : postWidth * 0.7 + 'px',
								margin : 25 + 'px' 
							});
							$('.no-gutter .item.wider').css( { 
								width : postWidth * 1  + 'px',
								height : postWidth * 0.7 + 'px',
								margin : 0 + 'px'  
							});
							$('.item.tall').css( { 
								width : postWidth * 1 - 50 + 'px',
								height : postWidth * 1.4 + 50 + 'px',
								margin : 25 + 'px' 
							});
							$('.no-gutter .item.tall').css( { 
								width : postWidth + 'px',
								height : postWidth * 1.4  + 'px',
								margin : 0 + 'px' 
							});
						} else {						
							$('.item').css( { 
								width : postWidth * 1 - 20 + 'px',
								height : postWidth * 0.65 - 20 + 'px',
								margin : 10 + 'px' 
							});
							$('.no-gutter .item').css( {
								width : postWidth + 'px',
								height : postWidth * 0.65 + 'px',
								margin : 0 + 'px' 
							});					
							$('.item.wide').css( { 
								width : postWidth * 2 - 20 + 'px',
								height : postWidth * 1.3 - 20 + 'px',
								margin : 10 + 'px' 
							});
							$('.no-gutter .item.wide').css( { 
								width : postWidth * 2  + 'px',
								height : postWidth * 1.3 + 'px',
								margin : 0 + 'px'  
							});								
							$('.item.tall').css( { 
								width : postWidth * 1 - 20 + 'px',
								height : postWidth * 1.3 - 20 + 'px',
								margin : 10 + 'px' 
							});
							$('.no-gutter .item.tall').css( { 
								width : postWidth + 'px',
								height : postWidth * 1.3  + 'px',
								margin : 0 + 'px' 
							});	
						}
					});
					
					
				}	else if (winWidth > 479) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 60 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 1;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						$('.item').css( { 
							width : postWidth * 1 - 20 + 'px',
							height : postWidth * 0.65 - 20 + 'px',
							margin : 10 + 'px' 
						});
						$('.no-gutter .item').css( {
							width : postWidth + 'px',
							height : postWidth * 0.65 + 'px',
							margin : 0 + 'px' 
						});					
						$('.item.wide').css( { 
							width : postWidth * 1 - 20 + 'px',
							height : postWidth * 0.65 - 20 + 'px',
							margin : 10 + 'px' 
						});
						$('.no-gutter .item.wide').css( { 
							width : postWidth * 1  + 'px',
							height : postWidth * 0.65 + 'px',
							margin : 0 + 'px'  
						});								
						$('.item.tall').css( { 
							width : postWidth * 1 - 20 + 'px',
							height : postWidth * 1.3 - 20 + 'px',
							margin : 10 + 'px' 
						});
						$('.no-gutter .item.tall').css( { 
							width : postWidth + 'px',
							height : postWidth * 1.3  + 'px',
							margin : 0 + 'px' 
						});
					});
					
					
				}
				
				else if (winWidth <= 479) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 20 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 1;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						if( $('.hover-visible-text').length > 0 ){
							$('.item').css( { 
								width : postWidth * 1 - 20 + 'px',
								height : postWidth * 0.9  + 'px',
								margin : 10 + 'px' 
							});
							$('.no-gutter .item').css( {
								width : postWidth + 'px',
								height : postWidth * 0.9  + 'px',
								margin : 0 + 'px' 
							});
							$('.item.wide').css( { 
								width : postWidth * 1 - 20 + 'px',
								height : postWidth * 0.9 + 'px',
								margin : 10 + 'px' 
							});
							$('.no-gutter .item.wide').css( { 
								width : postWidth * 1  + 'px',
								height : postWidth * 0.9 + 'px',
								margin : 0 + 'px'  
							});	
							$('.item.wider').css( { 
								width : postWidth * 1 - 20 + 'px',
								height : postWidth * 0.9 + 'px',
								margin : 10 + 'px' 
							});
							$('.no-gutter .item.wider').css( { 
								width : postWidth * 1  + 'px',
								height : postWidth * 0.9 + 'px',
								margin : 0 + 'px'  
							});
							$('.item.tall').css( { 
								width : postWidth * 1 - 20 + 'px',
								height : postWidth * 1.4 + 20 + 'px',
								margin : 10 + 'px' 
							});
							$('.no-gutter .item.tall').css( { 
								width : postWidth + 'px',
								height : postWidth * 1.4  + 'px',
								margin : 0 + 'px' 
							});
						} else {
							$('.item').css( { 
								width : postWidth * 1 - 20 + 'px',
								height : postWidth * 0.65 - 20 + 'px',
								margin : 10 + 'px' 
							});
							$('.no-gutter .item').css( {
								width : postWidth + 'px',
								height : postWidth * 0.65 + 'px',
								margin : 0 + 'px' 
							});					
							$('.item.wide').css( { 
								width : postWidth * 1 - 20 + 'px',
								height : postWidth * 0.65 - 20 + 'px',
								margin : 10 + 'px' 
							});
							$('.no-gutter .item.wide').css( { 
								width : postWidth * 1  + 'px',
								height : postWidth * 0.65 + 'px',
								margin : 0 + 'px'  
							});								
							$('.item.tall').css( { 
								width : postWidth * 1 - 20 + 'px',
								height : postWidth * 1.3 - 20 + 'px',
								margin : 10 + 'px' 
							});
							$('.no-gutter .item.tall').css( { 
								width : postWidth + 'px',
								height : postWidth * 1.3  + 'px',
								margin : 0 + 'px' 
							});
						}
					});
					
					
				}		
				return columnNumb;
				
			
			}).resize();
		
			$("#all").click();
			
			//Scale Up Items Appear
			if( $('.scale-up').length > 0 ){
				setTimeout( function(){		
					$('.item').each(function(i) {	
						
							$(this).delay(i*90).queue(function (next) {
						
						$(this).addClass('animate-in');
						
						next();
						});
						
					
					});	
				} , 1000 );	
			}
			
			//Fade In From Bottom Items Appear
			if( $('.fade-from-bottom').length > 0 ){
				setTimeout( function(){		
					$('.item').each(function(i) {	
						$(this).appear(function() {
							$(this).delay(i*80).queue(function (next) {
						
						$(this).addClass('animate-in');
						
						next();
						});
						});
					
					});	
				} , 400 );	
			}
			
			//Strech Horizontal Items Appear
			if( $('.stretch-horizontal').length > 0 ){
				setTimeout( function(){		
					$('.item').each(function(i) {	
						$(this).appear(function() {
							$(this).delay(i*120).queue(function (next) {
						
						$(this).addClass('animate-in');
						
						next();
						});
						});
					
					});	
				} , 400 );	
			}					
		}
	
	}//End MasonryPortfolio
	

/*--------------------------------------------------
Function FooterAppear
---------------------------------------------------*/	
	
	function FooterAppear() {
		
		
		if( $('#page-content').length > 0 ){
			$(window).scroll(function() {    
				var scroll = $(window).scrollTop();
			
				if (scroll >= 300) {
					
					$(".scrolltotop, #socials-holder").addClass('is-active');
					
				} else {				
					
					$(".scrolltotop, #socials-holder").removeClass('is-active');
				}
			});
		}
		
		
		
		var lastScroll = 0;
	
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			if (scroll > lastScroll) {
				$(".scrolltotop, #socials-holder").addClass("is-visible");
			} else if (scroll < lastScroll) {
				$(".scrolltotop, #socials-holder").removeClass("is-visible");
			}
			lastScroll = scroll;
		});
		
  
  }//End FooterAppear	
	
	
/*--------------------------------------------------
Function MagnificPopup
---------------------------------------------------*/	
	
	function MagnificPopup() {	
	
		var mfp = $('.mfp-gallery');
		if(mfp.length) {
			mfp.each(function(index, element) {
				$(element).magnificPopup({
					  delegate: 'a.mf-zoom',
					  type: 'image',
					  image: {
						  markup: '<div class="mfp-figure">'+
									'<div class="mfp-close"></div>'+
									'<div class="mfp-img"></div>'+
								  '</div>' +
								  '<div class="mfp-bottom-bar">'+
									'<div class="mfp-title"></div>'+
									'<div class="mfp-counter"></div>'+
								  '</div>', 
						
						  cursor: 'mfp-zoom-out-cur', 
						  
						  titleSrc: 'title', 
						  verticalFit: true, 
						
						  tError: '<a href="%url%">The image</a> could not be loaded.' 
						},
						gallery: {
						  enabled:true,
						  tCounter: '<span class="mfp-counter">%curr% / %total%</span>' 
						},
					  mainClass: 'mfp-zoom-in',
					  tLoading: '',
					  removalDelay: 300, 
					  callbacks: {
						imageLoadComplete: function() {
						  var self = this;
						  setTimeout(function() {
							self.wrap.addClass('mfp-image-loaded');
						  }, 16);
						},
						close: function() {
						  this.wrap.removeClass('mfp-image-loaded');
						}
					  },
					  closeBtnInside: false,
					  closeOnContentClick: true,
					  midClick: true
					});
			});	
		}
		
	}//End MagnificPopup	
	
	
	
/*--------------------------------------------------
Function AppearIteam
---------------------------------------------------*/	
		
	function AppearIteam() {		
		
		$('.has-animation').each(function() {	
			$(this).appear(function() {
				$(this).addClass('animate-in');
			});		
		});
		
		if( $('.scroll-reveal').length > 0 ){		
			$(".scroll-reveal").jqScrollAnim({
				rep: {start: 100, end: 400},
				animation: {type:'fade'}
			});			
		}
	
	}//End AppearIteam	



function CollagePlus() {
		
		if( $('.collage').length > 0 ){
			
			$.fn.removeSpace = function(){ 
			  $(this).contents().filter(function() {
				return this.nodeType === 3; 
			  }).remove();
			};
			
			$('.collage').removeSpace();
		
			$('#main').waitForImages({
				finished: function() {
					
					$('.collage').collagePlus(
						{	
							'targetHeight'    : 400,
							'fadeSpeed'       : "fast",
							'effect'          : 'default',
							'direction'       : 'vertical',
							'allowPartialLastRow'       : true,
						}
					);	
					
				},
			waitForAll: true
			});	
		
		}
		
	}//End Collage Plus		
	
	
/*--------------------------------------------------
Function Shortcodes
---------------------------------------------------*/	
		
	function Shortcodes() {
		
		//Progress bar animations	
		$('.progress-bar li').each(function(i){		
			$(this).appear(function(){			
				var percent = $(this).find('span').attr('data-width');
				var $endNum = parseInt($(this).find('span strong i').text());
				var $that = $(this);			
				$(this).find('span').animate({
					'width' : percent + '%'
				},1600, function(){
				});			
				$(this).find('span strong').animate({
					'opacity' : 1
				},1400);			
				$(this).find('span strong i').countTo({
					from: 0,
					to: $endNum,
					speed: 1200,
					refreshInterval: 30,
					onComplete: function(){}
				});	 
				if(percent == '100'){
					$that.find('span strong').addClass('full');
				}	
			});
		});	
		
		
		// Accordion	  
		$('dl.accordion dt').filter(':first-child').addClass('accordion-active');
		$('dd.accordion-content').filter(':nth-child(n+3)').slideUp(1).addClass('hide');		
		$('dl.accordion').on('click', 'dt', function() {
			$(this).addClass('accordion-active').next().slideDown(200).siblings('dd.accordion-content').slideUp(200).prev().removeClass('accordion-active');						
		});	
		$('dl.accordion').on('click', 'dt.accordion-active', function() {
			$(this).removeClass('accordion-active').siblings('dd.accordion-content').slideUp(200);
		});
		
		
		// Toggle	
		$(".toggle_container").hide(); 
		$("span.toggle-title").click(function(){
			$(this).toggleClass("toggle-active").next().slideToggle("normal");
			return false; 
		});
		
		
		// Tabs	
		$(".tab_container").hide(); 
		$("ul.tabs li:first").addClass("tab-active").show(); 
		$(".tab_container:first").show(); 		
		$("ul.tabs li").click(function() {
			$("ul.tabs li").removeClass("tab-active"); 
			$(this).addClass("tab-active"); 
			$(".tab_container").hide(); 
			var activeTab = $(this).find("a").attr("href"); 
			$(activeTab).fadeIn(); 
			return false;
		});
		
		
		//Fading Out AlertBox
		$('.shortcode_alertbox').find('.box_close').click(function(){
			$(this).parents('.alertboxes').animate({opacity:0},300).animate({height:"0px"});
		});
		
		// Radial Counters	
		if( jQuery('.radial-counter').length > 0 ){		
			$(".knob").knob({
				width: 140,
				height: 140,
				fgColor: '#000',
				bgColor: '#fff',
				inputColor: '#fff',
				dynamicDraw: true,
				thickness: 0.05,
				tickColorizeValues: true,
				skin:'tron',
				readOnly:true,
			});	
			$(".knob").appear(function(e){			
				var $this = $(this);
				var myVal = $this.attr("data-gal");	
			   $({value: 0}).animate({value: myVal}, {
				   duration: 2000,
				   easing: 'swing',
				   step: function () {
					   $this.val(Math.ceil(this.value)).trigger('change');
				   }
			   })			
			});	
		}
		
		// Milestone counters
		$('.clapat-counter').each(function() {
			$(this).appear(function() {
				var $endNum = parseInt($(this).find('.number').text());
				$(this).find('.number').countTo({
					from: 0,
					to: $endNum,
					speed: 1500,
					refreshInterval: 30
				});
			},{accX: 0, accY: 0});
		});
		
		// FlexNav
		$(".flexnav").flexNav({ 'animationSpeed' : 0 });
		
	
	}//End Shortcodes
});

/*--------------------------------------------------
Function Collage Plus
---------------------------------------------------*/	
	
	

/*--------------------------------------------------
	Function Contact Map & Init Contact Map
---------------------------------------------------*/	

	function ContactMap() {	
		
		if( jQuery('#map_canvas').length > 0 ){
			
			var map_marker_image 	= 'images/marker.html';
			var map_address 		= 'New York City'
			var map_zoom			= 16;
			var marker_title 		= 'Hello Friend!';
			var marker_text			= 'Here we are. Come to drink a coffee!';
			var map_type			= google.maps.MapTypeId.SATELLITE;
			
			if( typeof ClapatMapOptions != 'undefined' ){
			
				map_marker_image 	= ClapatMapOptions.map_marker_image;
				map_address 		= ClapatMapOptions.map_address;
				map_zoom			= Number(ClapatMapOptions.map_zoom);
				marker_title 		= ClapatMapOptions.marker_title;
				marker_text			= ClapatMapOptions.marker_text;
				if( ClapatMapOptions.map_type == 0 ){
				
					map_type = google.maps.MapTypeId.SATELLITE;
				}
				else{
				
					map_type = google.maps.MapTypeId.ROADMAP;
				}
				
			}
			
			var newstyle = [{
							featureType: "all",
							elementType: "labels.text.fill",
							stylers: [{
								saturation: 36
							}, {
								color: "#333333"
							}, {
								lightness: 40
							}]
						}, {
							featureType: "all",
							elementType: "labels.text.stroke",
							stylers: [{
								visibility: "on"
							}, {
								color: "#ffffff"
							}, {
								lightness: 16
							}]
						}, {
							featureType: "all",
							elementType: "labels.icon",
							stylers: [{
								visibility: "off"
							}]
						}, {
							featureType: "administrative",
							elementType: "geometry.fill",
							stylers: [{
								color: "#fefefe"
							}, {
								lightness: 20
							}]
						}, {
							featureType: "administrative",
							elementType: "geometry.stroke",
							stylers: [{
								color: "#fefefe"
							}, {
								lightness: 17
							}, {
								weight: 1.2
							}]
						}, {
							featureType: "administrative.locality",
							elementType: "labels.text",
							stylers: [{
								color: "#8d8d8d"
							}, {
								weight: "0.35"
							}]
						}, {
							featureType: "landscape",
							elementType: "geometry",
							stylers: [{
								color: "#f5f5f5"
							}, {
								lightness: 20
							}]
						}, {
							featureType: "poi",
							elementType: "geometry",
							stylers: [{
								color: "#f5f5f5"
							}, {
								lightness: 21
							}]
						}, {
							featureType: "poi.park",
							elementType: "geometry",
							stylers: [{
								color: "#dedede"
							}, {
								lightness: 21
							}]
						}, {
							featureType: "road.highway",
							elementType: "geometry.fill",
							stylers: [{
								color: "#ffffff"
							}, {
								lightness: 17
							}]
						}, {
							featureType: "road.highway",
							elementType: "geometry.stroke",
							stylers: [{
								color: "#ffffff"
							}, {
								lightness: 29
							}, {
								weight: .2
							}]
						}, {
							featureType: "road.arterial",
							elementType: "geometry",
							stylers: [{
								color: "#ffffff"
							}, {
								lightness: 18
							}]
						}, {
							featureType: "road.local",
							elementType: "geometry",
							stylers: [{
								color: "#ffffff"
							}, {
								lightness: 16
							}]
						}, {
							featureType: "transit",
							elementType: "geometry",
							stylers: [{
								color: "#f2f2f2"
							}, {
								lightness: 19
							}]
						}, {
							featureType: "water",
							elementType: "geometry",
							stylers: [{
								color: "#e9e9e9"
							}, {
								lightness: 17
							}]
			}];
			var settings = {
				zoom: map_zoom,
				center: new google.maps.LatLng(43.270441,6.640888),
				mapTypeControl: false,
				scrollwheel: false,
				draggable: true,
				panControl:false,
				scaleControl: false,
				zoomControl: false,
				streetViewControl:false,
				navigationControl: false,
				mapTypeId: map_type,
				styles: newstyle
			};	
			
						
			var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});	
			var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h4 id="firstHeading" class="firstHeading" style="color:#000; margin-bottom:0px;"><strong>' + marker_title + '</strong></h4>'+
				'<div id="bodyContent">'+
				'<p style="font-family:Verdana; color:#999; font-size:12px; margin-bottom:10px">' + marker_text + '</p>'+
				'</div>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});	
			var companyImage = new google.maps.MarkerImage(map_marker_image,
				new google.maps.Size(58,63),<!-- Width and height of the marker -->
				new google.maps.Point(0,0),
				new google.maps.Point(35,20)<!-- Position of the marker -->
			);
			
			var latitude = 43.270441;
			var longitude = 6.640888;
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({'address':map_address}, function(results, status) {
				if(status == google.maps.GeocoderStatus.OK) {
				
					map.setCenter(results[0].geometry.location);
					
					latitude = results[0].geometry.location.lat();
					longitude = results[0].geometry.location.lng();
					
					var companyPos = new google.maps.LatLng(latitude, longitude);	
					var companyMarker = new google.maps.Marker({
										position: companyPos,
										map: map,
										icon: companyImage,               
										title:"Our Office",
										zIndex: 3});	
									google.maps.event.addListener(companyMarker, 'click', function() {
										infowindow.open(map,companyMarker);
									});	
				}
			});
			
		}
		
		return false
		
	} // End ContactMap

	function InitContactMap() {
		
		if( jQuery('#map_canvas').length > 0 ){
			
			if (typeof google != 'undefined' && typeof google.maps != 'undefined'){
				
				// google maps already loaded, call the function which draws the map
				ContactMap();
				
			} else {
			
				var map_api_key = '';
				if( typeof ClapatMapOptions != 'undefined' ){
					map_api_key = 'key=' + ClapatMapOptions.map_api_key;
				}
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'https://maps.googleapis.com/maps/api/js?' + map_api_key +
							'&callback=ContactMap';
				document.body.appendChild(script);
			}
			
		}
	} // End InitContactMap