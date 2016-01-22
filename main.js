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

<<<<<<< Updated upstream
	})
=======
	});
>>>>>>> Stashed changes


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

		function getDaysWeek(){

			var year = 2016;
			var month = 1;
			var week = 3;

			var firstDateOfMonth = new Date(year, month - 1, 1); // Date: year-month-01

			var firstDayOfMonth = firstDateOfMonth.getDay();     // 0 (Sun) to 6 (Sat)

			var firstDateOfWeek = new Date(firstDateOfMonth);    // copy firstDateOfMonth

			firstDateOfWeek.setDate(                             // move the Date object
			    firstDateOfWeek.getDate() +                      // forward by the number of
			    (firstDayOfMonth ? 7 - firstDayOfMonth : 0)      // days needed to go to
			);                                                   // Sunday, if necessary

			firstDateOfWeek.setDate(                             // move the Date object
			    firstDateOfWeek.getDate() +                      // forward by the number of
			    7 * (week - 1)                                   // weeks required (week - 1)
			    );

			var dateNumbersOfMonthOnWeek = [];                   // output array of date #s
			var datesOfMonthOnWeek = [];                         // output array of Dates

			for (var i = 0; i < 7; i++) {                        // for seven days...

			    dateNumbersOfMonthOnWeek.push(                   // push the date number on
			        firstDateOfWeek.getDate());                  // the end of the array

			    datesOfMonthOnWeek.push(                         // push the date object on
			        new Date(+firstDateOfWeek));                 // the end of the array

			    firstDateOfWeek.setDate(
			        firstDateOfWeek.getDate() + 1);              // move to the next day

			}

			console.log(dateNumbersOfMonthOnWeek);
			console.log(datesOfMonthOnWeek);
		}

		console.log(getDaysWeek());

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