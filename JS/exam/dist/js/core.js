;(function ($) {

    // Menu header
    $('.menu').on('click', function (e) {
        $(e.target)
            .parent()
            .addClass('menu-item--active')
            .siblings()
            .removeClass('menu-item--active');
    });

    // Isotop
    var $grid = $('.grid').isotope({
        // options...
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 280
        }
    });
    $('#portfolio .filters').on('click', function (e) {
        var target = e.target.outerText;

        $(e.target)
            .addClass('filter__item--active')
            .siblings()
            .removeClass('filter__item--active');
        if (target === 'All Works') {
            $grid.isotope({filter: '*'});

        } else if (target === 'Print') {
            $grid.isotope({filter: '.print'});
        } else if (target === 'Branding') {
            $grid.isotope({filter: '.brand'});
        } else if (target === 'Web') {
            $grid.isotope({filter: '.web'});
        } else {
            $grid.isotope({filter: '.html'});
        }

    });

    // Slider
    $(".slider-team").slick({
        dots: true,
        centerMode: true,
        // appendDots: $('#team .dots'),
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".slider-testimonials").slick({
        dots: true,
        centerMode: true,
        // appendDots: $('#team .dots'),
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // GoogleMap
    $(window).on("load", function () {
        var map,
            mapContainer = $('#map')[0],
            mapCenter = {lat: 49.5687001, lng: 34.5835126}, /*Краматорск*/
            infoWindowText = '<div><h3>Beetroot Academy</h3><p>Полтава</p></div>',
            marker,
            infowindow,
            iconMarker = './img/Marker.png';

        //объект карты
        map = new google.maps.Map(mapContainer, {
            center: mapCenter,
            zoom: 15,
            mapTypeId: 'roadmap',
            disableDefaultUI: true
        });

        marker = new google.maps.Marker({
            position: mapCenter,
            map: map,
            icon: iconMarker,
            animation: google.maps.Animation.DROP
        });

        infowindow = new google.maps.InfoWindow({
            content: infoWindowText,
            maxWidth: 600
        });

        //При загрузке сразу появляется окно с информацией
        // infowindow.open(map, marker);

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        //Центрируем карту по маркеру
        map.setCenter(marker.getPosition());

        //Center Map on resize
        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    })

    //Contact Message
    $('#contact .contact__btn').on('click', function () {
        swal({
                title: "Вам понравилось?",
                text: "Напишите отзыв:",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "Write something"
            },
            function (inputValue) {
                if (inputValue === false) return false;

                if (inputValue === "") {
                    swal.showInputError("Пустой отзыв не приветствуется!");
                    return false
                }

                swal("Отлично!", "Спасибо за ваш отзыв: " + inputValue, "success");
            });
    });

    //ArrowUp
    var arrow = $('#header .arrow').clone().removeClass().addClass('arrowUp');

    $('body').on('click', '.arrowUp', function () {
        scrollTop();

        $('#header .menu .menu-item')
            .removeClass('menu-item--active')
            .first()
            .addClass('menu-item--active');
    });

    $(window).on('scroll', function () {
        addArrowUp();
        setActiveMenu();
    });

    function addArrowUp() {
        var scrolled = $(window).scrollTop();
        var menuItem = $('#header .menu .menu-item');

        if (scrolled >= 800) {
            if ($('body .arrowUp').length === 0) {
                arrow.appendTo('body');
            }
        } else {
            arrow.remove();
        }
    };

    function setActiveMenu() {
        var scrolled = $(window).scrollTop();
        var menuItem = $('#header .menu .menu-item');

        if (scrolled > 803 && scrolled <= 1921) {
            menuItem
                .removeClass('menu-item--active')
                .first().next()
                .addClass('menu-item--active');
        }
        if (scrolled > 1921 && scrolled <= 2511) {
            menuItem
                .removeClass('menu-item--active')
                .first().next().next()
                .addClass('menu-item--active');
        }
        if (scrolled > 2511 && scrolled <= 4366) {
            menuItem
                .removeClass('menu-item--active')
                .first().next().next().next()
                .addClass('menu-item--active');
        }

        if (scrolled <= 800) {
            menuItem
                .removeClass('menu-item--active')
                .first()
                .addClass('menu-item--active');
        }
    }

    function scrollTop() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    };


})(jQuery);