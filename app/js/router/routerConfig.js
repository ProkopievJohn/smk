app.config(['$routeProvider', function($routeProvider){
	'use strict';
	$routeProvider
	// route for home
		.when('/', {
			templateUrl: './views/home.html',
			controller: 'homeCtrl'
		})
	// route for the login
		.when('/login', {
			templateUrl: './views/login.html',
			controller: 'loginCtrl'
		})
	// route for the otherwise
		.otherwise({
			redirectTo: '/login'
		});
}]);

// app.run(['$rootScope', '$location', 'loginService', function ($rootScope, $location, loginService) {
// 	$rootScope.$on('$routeChangeStart', function($routeChangeStart) {
// 		if (['/home'].indexOf($location.path()) != -1 && !loginService.isLogged()) {
			// $location.path('/login')
// 		}
// 	});
// }]);
