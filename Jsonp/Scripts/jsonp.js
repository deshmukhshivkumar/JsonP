$(document).ready(function() {
    var url = 'api/city/';

    $.ajax({
        type: 'GET',
        url: url,
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function() {
            alert('some error');
        }
    });
});