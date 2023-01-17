VANTA.GLOBE({
  el: "#vantajs",
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 50.00,
  minWidth: 50.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffffff,
  backgroundColor: 0x000000
})
$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});


const step1 = document.querySelector(".step-1-btn");
const step2 = document.querySelector(".step-2-btn");
const step3 = document.querySelector(".step-3-btn");

let t1 = gsap.timeline({ paused:true, reversed:true });
let t2 = gsap.timeline({ paused:true, reversed:true });
let t3 = gsap.timeline({ paused:true, reversed:true });


step1.addEventListener("click", (e) => {
    t2.play();
    console.log("clicked-step1");
});

step2.addEventListener("click", (e) => {
    t3.play();
    console.log("clicked-step2");
});

step3.addEventListener("click", (e) => {
    t1.restart();
    console.log("clicked-step3");
});

t1.play();

t1.to(".step-container", {
    ease: "elastic.out(1, .8)",
    transform: "perspective(700px) rotate3d(0, -45, 1, 30deg)",
    top: "25%",
    duration: 1.5,
    opacity: 1,
});

/*!

 =========================================================
 * Paper Kit 2 - v2.0.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/paper-kit-2
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;

$(document).ready(function(){
    window_width = $(window).width();

    //  Activate the tooltips
    $('[data-toggle="tooltip"]').tooltip();

    //      Activate the switches with icons
    if($('.switch').length != 0){
        $('.switch')['bootstrapSwitch']();
    }
    //      Activate regular switches
    if($("[data-toggle='switch']").length != 0){
         $("[data-toggle='switch']").bootstrapSwitch();
    }

    if($(".tagsinput").length != 0){
        $(".tagsinput").tagsInput();
    }
    if (window_width >= 768) {
        big_image = $('.page-header[data-parallax="true"]');

        if(big_image.length != 0){
           $(window).on('scroll', pk.checkScrollForPresentationPage);
        }
    }

    if($("#datetimepicker").length != 0){
        $('#datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            },
            debug: true
        });
    };

    // Navbar color change on scroll
    if($('.navbar[color-on-scroll]').length != 0){
        $(window).on('scroll', pk.checkScrollForTransparentNavbar)
    }


    $('.btn-tooltip').tooltip();
    $('.label-tooltip').tooltip();

	// Carousel
	$('.carousel').carousel({
      interval: 4000
    });

    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

    // Init popovers
    pk.initPopovers();

    // Init Collapse Areas
    pk.initCollapseArea();

    // Init Sliders
    pk.initSliders();

});


$(document).on('click', '.navbar-toggler', function(){
    $toggle = $(this);
    if(pk.misc.navbar_menu_visible == 1) {
        $('html').removeClass('nav-open');
        pk.misc.navbar_menu_visible = 0;
        setTimeout(function(){
            $toggle.removeClass('toggled');
            $('#bodyClick').remove();
        }, 550);
    } else {
        setTimeout(function(){
            $toggle.addClass('toggled');
        }, 580);

        div = '<div id="bodyClick"></div>';
        $(div).appendTo("body").click(function() {
            $('html').removeClass('nav-open');
            pk.misc.navbar_menu_visible = 0;
            $('#bodyClick').remove();
            setTimeout(function(){
                $toggle.removeClass('toggled');
            }, 550);
        });

        $('html').addClass('nav-open');
        pk.misc.navbar_menu_visible = 1;
    }
});

pk = {
    misc:{
        navbar_menu_visible: 0
    },

    checkScrollForPresentationPage: debounce(function(){
        oVal = ($(window).scrollTop() / 3);
        big_image.css({
            'transform':'translate3d(0,' + oVal +'px,0)',
            '-webkit-transform':'translate3d(0,' + oVal +'px,0)',
            '-ms-transform':'translate3d(0,' + oVal +'px,0)',
            '-o-transform':'translate3d(0,' + oVal +'px,0)'
        });
    }, 4),

    checkScrollForTransparentNavbar: debounce(function() {
        	if($(document).scrollTop() > $(".navbar").attr("color-on-scroll") ) {
                if(transparent) {
                    transparent = false;
                    $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
                }
            } else {
                if( !transparent ) {
                    transparent = true;
                    $('.navbar[color-on-scroll]').addClass('navbar-transparent');
                }
            }
    }, 17),

    initPopovers: function(){
        if($('[data-toggle="popover"]').length != 0){
            $('body').append('<div class="popover-filter"></div>');

            //    Activate Popovers
           $('[data-toggle="popover"]').popover().on('show.bs.popover', function () {
                $('.popover-filter').click(function(){
                    $(this).removeClass('in');
                    $('[data-toggle="popover"]').popover('hide');
                });
                $('.popover-filter').addClass('in');
            }).on('hide.bs.popover', function(){
                $('.popover-filter').removeClass('in');
            });

        }
    },
    initCollapseArea: function(){
        $('[data-toggle="pk-collapse"]').each(function () {
            var thisdiv = $(this).attr("data-target");
            $(thisdiv).addClass("pk-collapse");
        });

        $('[data-toggle="pk-collapse"]').hover(function(){
            var thisdiv = $(this).attr("data-target");
            if(!$(this).hasClass('state-open')){
                $(this).addClass('state-hover');
                $(thisdiv).css({
                    'height':'30px'
                });
            }

        },
        function(){
            var thisdiv = $(this).attr("data-target");
            $(this).removeClass('state-hover');

            if(!$(this).hasClass('state-open')){
                $(thisdiv).css({
                    'height':'0px'
                });
            }
        }).click(function(event){
                event.preventDefault();

                var thisdiv = $(this).attr("data-target");
                var height = $(thisdiv).children('.panel-body').height();

                if($(this).hasClass('state-open')){
                    $(thisdiv).css({
                        'height':'0px',
                    });
                    $(this).removeClass('state-open');
                } else {
                    $(thisdiv).css({
                        'height':height + 30,
                    });
                    $(this).addClass('state-open');
                }
            });
    },
    initSliders: function(){
        // Sliders for demo purpose in refine cards section
        if($('#sliderRegular').length != 0 ){
            var rangeSlider = document.getElementById('sliderRegular');
            noUiSlider.create(rangeSlider, {
            	start: [ 5000 ],
            	range: {
            		'min': [  2000 ],
            		'max': [ 10000 ]
            	}
            });
        }
        if($('#sliderDouble').length != 0){
            var slider = document.getElementById('sliderDouble');
            noUiSlider.create(slider, {
            	start: [20, 80],
            	connect: true,
            	range: {
            		'min': 0,
            		'max': 100
            	}
            });
        }

    },


}

examples = {
    initContactUsMap: function(){
        var myLatlng = new google.maps.LatLng(44.433530, 26.093928);
        var mapOptions = {
          zoom: 14,
          center: myLatlng,
          scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        }
        var map = new google.maps.Map(document.getElementById("contactUsMap"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
        }
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};

t1.to(".title1", {
    ease: "elastic.out(1, .8)",
    rotate: 0,
    duration: 1.5,
    opacity: 1,
    top:"12%",
}, 0.1);


t1.to(".select-one", {
    ease: "elastic.out(1, .8)",
    rotate: 0,
    top: "25%",
    duration: 1.5,
    opacity: 1,
}, 0.3);

t1.to(".step-1-btn", {
    ease: "elastic.out(1, .8)",
    rotate: 0,
    bottom: "10%",
    duration: 1.5,
    opacity: 1,
}, 0.6);

t1.to(".connect", {
    ease: "elastic.out(1, .8)",
    rotate: 0,
    right: "-20%",
    duration: 1.5,
    opacity: 1,
    borderColor: "#004BE9",
}, 0.2);
t1.to(".setting", {
    ease: "elastic.out(1, .8)",
    rotate: 0,
    right: "-20%",
    duration: 1.5,
    opacity: 1,
}, 0.4);
t1.to(".rocket", {
    ease: "elastic.out(1, .8)",
    rotate: 0,
    right: "-20%",
    duration: 1.5,
    opacity: 1,
}, 0.6);


t2.to(".setting", {
    ease: "elastic.out(1, .8)",
    rotate: 0,
    right: "-20%",
    duration: 1.5,
    opacity: 1,
    borderColor: "#004BE9",
}, 0.4);

t2.to(".title1", {
    ease: "power1.inOut",
    rotate: 0,
    duration: 1.5,
    opacity: 0,
}, 0.4);

t2.to(".select-one", {
    ease: "power1.inOut",
    rotate: 0,
    duration: .5,
    opacity: 0,
    top:"10%",
}, 0.6);

t2.to(".step-1-btn", {
    ease: "power1.inOut",
    rotate: 0,
    bottom: "20%",
    duration: .5,
    opacity: 0,
}, 0.6);

t2.to(".step-container", {
    ease: "elastic.out(1, .8)",
    transform: "perspective(700px) rotate3d(0, 45, 1, 30deg)",
    top: "25%",
    duration: 1.5,
    opacity: 1,
    background:  "#000000",
}, 0.8);

t2.from(".title2", {
    ease: "power1.inOut",
    rotate: 0,
    top: "50%",
    duration: .5,
    opacity: 0,
}, 1.5);


t2.from(".line1", {
    ease: "power1.inOut",
    rotate: 0,
    width: "0%",
    duration: .5,
    opacity: 0,
}, 1.2);


t2.from(".line2", {
    ease: "power1.inOut",
    rotate: 0,
    width: "0%",
    duration: .5,
    opacity: 0,
}, 1.4);


t2.from(".line3", {
    ease: "power1.inOut",
    rotate: 0,
    width: "0%",
    duration: .5,
    opacity: 0,
}, 1.6);


t2.from(".line4", {
    ease: "power1.inOut",
    rotate: 0,
    width: "0%",
    duration: .5,
    opacity: 0,
}, 1.8);

t2.to(".step-2-btn", {
    ease: "power1.inOut",
    rotate: 0,
    bottom: "10%",
    duration: .5,
    opacity: 1,
}, 1.8);


t3.to(".step3", {
    ease: "elastic.out(1, .8)",
    rotate: 0,
    duration: 1.5,
    visibility:"visib",
}, 0.4);


t3.to(".rocket", {
    ease: "elastic.out(1, .8)",
    rotate: 0,
    right: "-20%",
    duration: 1.5,
    opacity: 1,
    borderColor: "#004BE9",
}, 0.4);


t3.to(".title2", {
    ease: "power1.inOut",
    rotate: 0,
    top: "0%",
    duration: .5,
    opacity: 0,
}, 0.8);


t3.to(".line1", {
    ease: "power1.inOut",
    rotate: 0,
    width: "0%",
    duration: .5,
    opacity: 0,
}, 1.2);


t3.to(".line2", {
    ease: "power1.inOut",
    rotate: 0,
    width: "0%",
    duration: .5,
    opacity: 0,
}, 1.4);


t3.to(".line3", {
    ease: "power1.inOut",
    rotate: 0,
    width: "0%",
    duration: .5,
    opacity: 0,
}, 1.6);


t3.to(".line4", {
    ease: "power1.inOut",
    rotate: 0,
    width: "0%",
    duration: .5,
    opacity: 0,
}, 1.8);

t3.to(".step-2-btn", {
    ease: "power1.inOut",
    rotate: 0,
    bottom: "0",
    duration: .5,
    opacity: 0,
}, 1.8);

t3.to(".step-container", {
    ease: "elastic.out(1, .8)",
    transform: "perspective(700px) rotate3d(0, -45, 1, 30deg)",
    top: "25%",
    duration: 1.5,
    opacity: 1,
    background:  "#FFFFFF",
}, 2);

t3.from(".deploy-rocket", {
    ease: "elastic.out(1, .8)",
    top: "25%",
    duration: 1.5,
    opacity: 0,
}, 2.2);

t3.from(".title3", {
    ease: "elastic.out(1, .8)",
    bottom: "-10%",
    duration: 1.5,
    opacity: 0,
}, 2.4);

t3.to(".deploy-rocket", {
    ease: "elastic.out(1, .8)",
    top: "-25%",
    duration: 1.5,
    opacity: 0,
}, 5.2);

t3.to(".title3", {
    ease: "elastic.out(1, .8)",
    bottom: "50%",
    duration: 1.5,
    opacity: 0,
}, 5.4);

t3.from(".title4", {
    ease: "power1.inOut",
    top: "50%",
    duration: 1.5,
    opacity: 0,
}, 5.6);

t3.from(".step-3-btn", {
    ease: "power1.inOut",
    top: "60%",
    duration: 1.5,
    opacity: 0,
}, 5.4);

t1.to(".title4", {
    ease: "power1.inOut",
    top: "20%",
    duration: 1.5,
    opacity: 0,
}, 5.8);

t1.to(".step-3-btn", {
    ease: "power1.inOut",
    top: "30%",
    duration: 1.5,
    opacity: 0,
}, 6);