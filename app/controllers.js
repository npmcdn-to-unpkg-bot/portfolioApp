'use strict';

var portfolioControllers = angular.module('app.controllers', []);

portfolioControllers.controller('postController', ['$scope', '$http', function($scope, $http) {

	$http.get('data/work-page.json').success(function(data) {
		$scope.posts = data;
	});

}]); 

portfolioControllers.controller('singlePostController', ['$scope', '$stateParams', '$http', '$location', function($scope, $stateParams, $http, $location) {

	$http.get('data/work-post.json').success(function(data) {
		var l = data.length;
		var currentWorkIndex;
		for(var i=0 ; i<l ; i++) {
			if( data[i].id === $stateParams.workId) {
              currentWorkIndex = i;
              break;
            } 
		}
		$scope.post = data[i];

		var prevWorkIndex = (currentWorkIndex !== 0) ? (currentWorkIndex - 1) : (l - 1); 
		var nextWorkIndex = (currentWorkIndex !== l - 1) ? (currentWorkIndex + 1) : (0); 
		$scope.prevWork = data[prevWorkIndex].id; 
		$scope.nextWork = data[nextWorkIndex].id;

	});

}]); 