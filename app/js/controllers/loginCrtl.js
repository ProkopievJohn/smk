app.controller('loginCtrl', ['$scope', 'loginService', function($scope, loginService){
	'use strict';
	$scope.login = function(user){
		loginService.login(user);
	}
	$scope.register = function(user){
		loginService.register(user);
	}
}]);
