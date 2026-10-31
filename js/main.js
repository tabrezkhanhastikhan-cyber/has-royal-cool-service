(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    if (typeof WOW !== 'undefined') { new WOW().init(); }


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('sticky-top shadow');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Services link: on desktop a click goes to the Services page (hover opens the menu)
    $('.nav-item.dropdown > .dropdown-toggle[href]').on('click', function () {
        var href = $(this).attr('href');
        if (window.matchMedia('(min-width: 992px)').matches && href && href !== '#') {
            window.location.href = href;
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    if ($.fn.counterUp && $('[data-toggle="counter-up"]').length) {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
    }


    // Date and time picker
    if ($.fn.datetimepicker) {
        $('.date').datetimepicker({
            format: 'L'
        });
        $('.time').datetimepicker({
            format: 'LT'
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Header carousel
    if ($.fn.owlCarousel) $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Service carousel
    if ($.fn.owlCarousel) $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Testimonials carousel
    if ($.fn.owlCarousel) $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


/* Booking forms: send in background, then open the thank-you page of THIS site */
(function () {
    function init() {
        document.querySelectorAll('form[action*="web3forms.com"]').forEach(function (f) {
            f.addEventListener('submit', function (e) {
                if (f.getAttribute('data-sending') || !window.fetch || !window.FormData) return;
                e.preventDefault();
                var btn = f.querySelector('button[type=submit]'), old = btn ? btn.innerHTML : '';
                if (btn) { btn.disabled = true; btn.innerHTML = 'Sending...'; }
                f.setAttribute('data-sending', '1');
                fetch(f.action, { method: 'POST', body: new FormData(f), headers: { 'Accept': 'application/json' } })
                    .then(function (r) { return r.json(); })
                    .then(function (d) {
                        if (d && d.success) { window.location.href = 'thankyou.html'; }
                        else { throw new Error('send failed'); }
                    })
                    .catch(function () {
                        f.removeAttribute('data-sending');
                        if (btn) { btn.disabled = false; btn.innerHTML = old; }
                        f.submit();
                    });
            });
        });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
