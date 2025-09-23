// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var yearEl = document.querySelector("#displayYear");
    if (yearEl) {
        yearEl.innerHTML = currentYear;
    }
}

getYear();



// owl carousel slider js
if ($('.portfolio_carousel').length) {
    function fallbackToGrid() {
        var $wrap = $('.portfolio_carousel');
        $wrap.removeClass('owl-carousel').addClass('row portfolio_grid');
        // Wrap each .item into bootstrap columns for grid layout
        $wrap.find('.item').each(function(){
            var $item = $(this);
            if (!$item.parent().hasClass('col-md-4')) {
                $item.wrap('<div class="col-sm-6 col-md-4"></div>');
            }
            $item.css({ display: 'block', visibility: 'visible' });
        });

        // Simple filtering without owl plugin
        $('.owl-filter-bar').on('click', '.item', function (e) {
            var $items = $('.owl-filter-bar a');
            var $item = $(this);
            var filter = $item.data('owl-filter');
            $items.removeClass('active');
            $item.addClass('active');
            var $cards = $('.portfolio_grid .col-sm-6, .portfolio_grid .col-md-4');
            if (filter === '*' || filter === '*)') { // safety
                $cards.show();
            } else {
                $cards.show();
                $cards.each(function(){
                    var $c = $(this);
                    var match = $c.find('.item').first().is(filter);
                    $c.toggle(match);
                });
            }
            e.preventDefault();
        });
    }

    if (typeof $.fn.owlCarousel !== 'function') {
        fallbackToGrid();
    } else {
        var owl = $('.portfolio_carousel').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        center: true,
        autoplay: true,
        navText: [
            '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
            '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        ],
        autoplayHoverPause: true,
        responsive: {
            0: {
                center: false,
                items: 1,
                margin: 0
            },
            576: {
                items: 2
            },
            991: {
                center: true,
                items: 3
            }
        }
        });

        // owl.owlcarousel2_filter
        $('.owl-filter-bar').on('click', '.item', function (e) {
            var $items = $('.owl-filter-bar a');
            var $item = $(this);
            var filter = $item.data('owl-filter');
            $items.removeClass("active");
            $item.addClass("active");
            if (typeof owl.owlcarousel2_filter === 'function') {
                owl.owlcarousel2_filter(filter);
            } else {
                // Fallback to simple filtering if plugin missing
                fallbackToGrid();
            }
            e.preventDefault();
        });
    }
}
/** google_map js **/
function myMap() {
    var mapContainer = document.getElementById("googleMap");
    if (!mapContainer) {
        return; // No map on this page
    }
    var mapProp = {
        center: new google.maps.LatLng(48.9368, 2.4619),
        zoom: 16,
    };
    var map = new google.maps.Map(mapContainer, mapProp);
}

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});