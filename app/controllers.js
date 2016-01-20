'use strict';

var portfolioControllers = angular.module('app.controllers', []);

portfolioControllers.controller('postController', ['$scope', '$http', function($scope, $http) {

	$http.get('data/work-page.json').success(function(data) {
		$scope.posts = data;
	});

}]); 

portfolioControllers.controller('singlePostController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http) {

	$http.get('data/work-post.json').success(function(data) {
		$scope.post = data[$stateParams.workId];
	});

}]); 