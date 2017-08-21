;(function ($) {

    var cities = {
        'Полтава': {
            lat: 49.5687001,
            lng: 34.5835126,
            info: '<div><h3>Beetroot Academy</h3><p>Полтава</p></div>',
            icon: 'letter-p.svg'
        },
        'Киев': {
            lat: 50.449189,
            lng: 30.5144833,
            info: '<div><h3>Beetroot Academy</h3><p>Киев</p></div>',
            icon: 'letter-k.svg'
        },
        'Одесса': {
            lat: 46.4782251,
            lng: 30.721044,
            info: '<div><h3>Beetroot Academy</h3><p>Одесса</p></div>',
            icon: 'letter-o.svg'
        }
    };

    $(window).on("load", function () {
        var map,
            mapContainer = $('#map-2')[0],
            mapCenter = {lat: 48.724648, lng: 37.534795}, /*Краматорск*/
            // infoWindowText = $('.map-window-info').html(),
            infoWindowText,
            selectCity,
            marker,
            infowindow,
            iconMarker;

        //объект карты
        map = new google.maps.Map(mapContainer, {
            center: mapCenter,
            zoom: 8,
            mapTypeId: 'roadmap',
            disableDefaultUI: true
        });

        $('.cities').on('change', function (e) {
            selectCity = e.target.value;

            $.each(cities, function (key, val) {
                if (key === selectCity) {
                    mapCenter.lat = val.lat;
                    mapCenter.lng = val.lng;
                    infoWindowText = val.info;
                    iconMarker = val.icon;
                }
            });

            //Очищаем маркеры на крате
            if (marker) {
                marker.setMap(null);
            }

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
            infowindow.open(map, marker);

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });

            //Центрируем карту по маркеру
            map.setCenter(marker.getPosition());
        });


        // var marker = new google.maps.Marker({
        //     position: mapCenter,
        //     map: map,
        //     icon: "visualization.svg",
        //     animation: google.maps.Animation.DROP
        //     // animation: google.maps.Animation.BOUNCE
        // });
        //
        // var infowindow = new google.maps.InfoWindow({
        //     content: infoWindowText,
        //     maxWidth: 600
        // });
        // infowindow.open(map, marker);
        // marker.addListener('click', function () {
        //     infowindow.open(map, marker);
        // });

        //Center Map on resize
        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });


        // Google Maps API. Установка и определение маршрутов
        //Автоматический маршрут
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var directionsService = new google.maps.DirectionsService();
        directionsDisplay.setMap(map);
        directionsDisplay.setOptions( { suppressMarkers: true, suppressInfoWindows: true } );
        var request = {
            origin: LatLng, // (Обязательный параметр) координаты или адрес точки начала маршрута
            destination: LatLng, //(Обязательный параметр) координаты или адрес точки конца маршрута
            travelMode: google.maps.TravelMode.DRIVING, // (Обязательный параметр) способ перемещения (DRIVING - на автомобиле, BICYCLING - на велосипеде, TRANSIT - на общественном транспорте, WALKING - пешком)
            unitSystem: google.maps.UnitSystem.METRIC, //система измерения (METRIC - метрическая, IMPERIAL - британская)
            waypoints: [ //массив с точками, через которые обязательно должен проходить маршрут
                {
                    location: LatLng, //координаты или адрес точки
                    stopover:false //разделять ли маршрут на части в этой точке (true или false)
                },
                {
                    location: LatLng,
                    stopover:true
                }
            ],
            optimizeWaypoints: true, //включает оптимизацию маршрута с помощью точек в waypoints (true или false)
            provideRouteAlternatives: true, // включает поиск нескольких альтернативных маршрутов (true или false)
            avoidHighways: true, // пытаться ли избегать автомагистралей (true или false)
            avoidTolls: true //пытаться ли избегать платных дорого (true или false)
        };

        directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
                var routes = result.routes; //массив с вариантами маршрутов
                var leg = routes[0].legs; //массив с отрезками маршрута
                var lenght = leg[0].distance.text; //дистанция первого отрезка (или всего маршрута, если отрезок всего один)
                var duration = leg[0].duration.text; //продолжительность первого отрезка (или всего маршрута, если отрезок всего один)
            }
        });










    })

})(jQuery);