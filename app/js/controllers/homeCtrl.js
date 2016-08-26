app.controller('homeCtrl', ['$scope', 'loginService', 'sessionService', function($scope, loginService, sessionService){
	$scope.username = sessionService.get('name');
	$scope.tf = loginService.isLogged();
	$scope.logout = function(){
		loginService.logout();
	};
}]);