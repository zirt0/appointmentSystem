	var app = angular.module('APP',['ngRoute']);

	app.config(function($routeProvider){

		$routeProvider
		.when('/',{
			templateUrl:'partials/index.html',
			controller:'dashboardCtrl'
		})
		.when('/customers',{
			templateUrl: 'partials/customers.html',
			controller: 'customersCtrl'
		})

		.when('/login',{
			templateUrl: 'partials/login.html',
			controller: 'loginCtrl'
		})

		.when('/test',{
			templateUrl: 'partials/test.html',
			controller: 'testCtrl'
		})

		.otherwise({
			redirectTo:'/dashboard'
		});
	});

	app.run (function($rootScope) {

		$rootScope.loggedIn = false;

	})


	app.controller('dashboardCtrl', function($scope){
		
		$scope.timeSelected = function(time){
			alert("je hebt me geklikt" + time);

			//hier moet de tijd in de database geschreven 
		}


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


	app.controller('customersCtrl', function($scope){
		$scope.sulo = "gekke gozer";
	});
	
	app.controller('loginCtrl', function($scope, $rootScope){
		var correctUsername = "sulo";
		var correctPassword = "karlik"
		console.log("je hebt me geklikt");

		$scope.submitLogin = function(){
			console.log("je hebt me geklikt" + $scope.username);

			//wanneer gebruikersnaam en wachtwoord true zijn, zeg dan hoera anders Alert!
			if(correctPassword == $scope.userpassword && correctUsername == $scope.username){
				
				console.log("Hoerraaa");
				$rootScope.loggedIn = true;

			}else{
				
				alert("Verkeerd wachtwoord of gebruikersnaam");
			}


			//allert

		}
	});