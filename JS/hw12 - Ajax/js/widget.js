;(function ($) {

    var employees,
        list = $('<ul class="bulleted"></ul>');

    $.ajax('./data/employees.json').done(function (json) {
        employees = json;

        $.each(employees, function (key, value) {
            if (value.inoffice) {
                list.append($('<li class="in">' + value.name + '</li>'));
            } else {
                list.append($('<li class="out">' + value.name + '</li>'));
            }
        });

        list.appendTo('#employeeList');
    });

})(jQuery);