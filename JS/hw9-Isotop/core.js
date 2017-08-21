;(function ($) {

    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.grid-sizer'
        },
        percentPosition: true,
        getSortData: {
            category: function (itemElem) { // function
                var category = $(itemElem).data('category');

                if (category === 'short') {
                    return 1;
                } else if (category === 'longer') {
                    return 2;
                } else if (category === 'lengthy') {
                    return 3;
                }
                return 0;
            },
            color: function (itemElem) {
                var item = $(itemElem);
                if (item.hasClass('color')) {
                    return 1;
                } else if (item.hasClass('color1')) {
                    return 2;
                } else if (item.hasClass('color2')) {
                    return 3;
                } else if (item.hasClass('color3')) {
                    return 4;
                } else if (item.hasClass('color4')) {
                    return 5;
                } else if (item.hasClass('color5')) {
                    return 6;
                } else if (item.hasClass('color6')) {
                    return 7;
                }
                return 0;
            }
        }
    });

    //Sort
    $('#sort .category').on('click', function (e) {
        e.preventDefault();
        $grid.isotope({
            sortBy: 'category',
            sortAscending: true
        });
    });
    $('#sort .category2').on('click', function (e) {
        e.preventDefault();
        $grid.isotope({
            sortBy: 'category',
            sortAscending: false
        });
    });
    $('#sort .color-sort').on('click', function (e) {
        e.preventDefault();
        $grid.isotope({
            sortBy: 'color',
            sortAscending: true
        });
    });
    //Filter
    $('#filter .all').on('click', function (e) {
        e.preventDefault();
        $grid.isotope({
            filter: '*'
        });
    });
    $('#filter .category').on('click', function (e) {
        e.preventDefault();
        $grid.isotope({
            filter: function() {
                // _this_ is the item element. Get text of element's .number
                var category = $(this).data('category');
                // return true to show, false to hide
                return category === 'short';
            }
        });
    });
    $('#filter .color-sort').on('click', function (e) {
        e.preventDefault();
        $grid.isotope({
            filter: '.color4'
        });
    });


})(jQuery);