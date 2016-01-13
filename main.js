	var app = angular.module('APP',['ngRoute']);

	app.config(function($routeProvider){

		$routeProvider
		.when('/',{
			templateUrl:'partials/index.html',
			controller:'dashboard'
		})

		.otherwise({
			redirectTo:'/dashboard'
		});
	});

	app.controller('dashboard', function($scope){
		function getNearestHalfHourTimeString() {
			var now = new Date();
			var hour = now.getHours();
			var minutes = now.getMinutes();
			var ampm = "AM";
			if (minutes < 15) {
				minutes = "00";
			} else if (minutes < 45){
				minutes = "30";
			} else {
				minutes = "00";
				++hour;
			}
			if (hour > 23) {
				hour = 12;
			} else if (hour > 12) {
				hour = hour - 12;
				ampm = "PM";
			} else if (hour == 12) {
				ampm = "PM";
			} else if (hour == 0) {
				hour = 12;
			}

			return(hour + ":" + minutes + " " + ampm);
		}

		console.log(getNearestHalfHourTimeString());


	});
