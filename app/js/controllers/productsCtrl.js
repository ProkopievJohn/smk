app.controller('productsCtrl', ['$scope', 'productsService', function($scope, productsService){
	'use strict';
	productsService.products().success(function(res){
		$scope.products = res;
		$scope.comments = [];
		angular.forEach(res, function(res){
			productsService.comments(res.id).success(function(resp){
				$scope.comments.push(resp);
			});
		});
	});
	$scope.mycomment = function(id, comment) {
		productsService.mycomment(id, comment).success(function(res){
			res.success
			? productsService.comments(id).success(function(resp){$scope.comments[id - 1] = resp;})
			: console.log('error'); 
		});
	};
}]);
