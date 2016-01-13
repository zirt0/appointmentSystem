	var app = angular.module('APP',['ngRoute']);

	app.config(function($routeProvider){

		$routeProvider
			.when('/',{
				templateUrl:'partials/index.html',
				controller:'customers'
			})

			.otherwise({
				redirectTo:'/dashboard'
			});
	});

	app.controller('loginCtrl', function($scope){

	});
