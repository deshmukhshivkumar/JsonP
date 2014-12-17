var url = 'http://localhost:84/api/city/';
var murl = 'http://localhost:84/api/city/5?callback=?';
var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=pune,ind';

$(document).ready(function(){
		
	$('#btnGetData').on('click', function(){
		getJsonPData(url)
	});
	
	$("#btnGetMData").on('click', function(){
		getJsonPData(murl)
	});
	
	$("#btnTradAjax").on('click',function(){
		getJsonDataFromSameDomain()
	});
	
	$('#btnGetWeatherDetails').on('click', function(){
		getJsonPData(weatherUrl)
	});
	
	
});

function recieveDate(data){
	console.log('this is what i got from server : ' + data); 	
}

function getJsonPData(url){
    $.ajax({
        type: 'GET',		
        url: url,
        dataType: 'jsonp',    
		jsonpCallback: 'recieveDate',
        success: function (data) {
			console.log(data);
        },
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(xhr.status);			
		}			
    });	
}

function getJsonDataFromSameDomain(){

    $.ajax({
        type: 'GET',
        url: '/api/city/',
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
			console.log(thrownError);
		}
    });
}