app.factory('loginService', ['$http', '$location', 'sessionService', function($http, $location, sessionService){
	'use strict';
	return {
		login: function(user) {
			return $http
				.post('http://smktesting.herokuapp.com/api/login/', user) // send data to server
				.then(function(res) {
					if (res.data.success) {
						sessionService.set('user', res.data.token);
						sessionService.set('name', user.username);
						$location.path('/');
					}	else {
						console.log('error');
						$location.path('/login');
					}
				});
		},
		register: function(user) {
			return $http
				.post('http://smktesting.herokuapp.com/api/register/', user) // send data to server
				.then(function(res){
					if (res.data.success) {
						sessionService.set('user', res.data.token);
						sessionService.set('name', user.username);
						$location.path('/');
					}	else {
						$location.path('/login');
					}
				});
		},
		logout: function() {
			sessionService.destroy('user');
			sessionService.destroy('name');
			$location.path('/login');
		},
		isLogged: function(){
			return sessionService.get('user') ? true : false;
		}
	}
}]);
