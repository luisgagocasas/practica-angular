	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		}).
		otherwise({redirectTo:'/'})

		// route for the about page
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})

		.when('/blog', {
			templateUrl : 'pages/blog.html',
			controller  : 'directoryController'
		})

		.when('/blog/:id', {
			templateUrl : 'pages/blog_view.html',
			controller  : 'viewController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.saludar = 'Hola bienvenido a mi sitio';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	scotchApp.controller('directoryController',['$scope','$http',function($scope,$http){
		$http.get('/data.js').success(function(data){
			$scope.people=data
		})
	}]);

	scotchApp.controller('viewController',['$scope','$routeParams',function($scope,$routeParams){
		$scope.person=$scope.people[$routeParams.id]
	}]);