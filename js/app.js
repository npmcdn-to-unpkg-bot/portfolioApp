'use strict';

var portfolioApp = angular.module('portfolioApp', [
	'ui.router',
	'ngAnimate',
]);

portfolioApp.run(['$window', '$rootScope', '$state', '$location', function($window, $rootScope, $state, $location) {

	// initialise google analytics
    $window.ga('create', 'UA-67776020-2', 'auto');

    // record page view on each state change
    $rootScope.$on('$stateChangeSuccess', function (event) {
        $window.ga('send', 'pageview', $location.path());
    });

	// window scroll to top on page reload
    $rootScope.$on('$stateChangeSuccess', function() {
   		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});

}]);

portfolioApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

		.state('work', {
			url: '/',
			views: {
				'master': {
					templateUrl: 'partials/_work.html',
					controller: 'postController'
				},
				'navbar': {
					templateUrl: 'partials/_main-navbar.html'
				},
				'footer': {
					templateUrl: 'partials/_footer.html'
				}
			}
		})

		.state('work-post', {
			url: '/work/:workId',
			views: {
				'master': {
					templateUrl: 'partials/_work-post.html',
					controller: 'singlePostController'
				},
				'navbar': {
					templateUrl: 'partials/_main-navbar.html'
				},
				'footer': {
					templateUrl: 'partials/_footer.html'
				}
			}
		})

		.state('about', {
			url: '/profile',
			views: {
				'master': {
					templateUrl: 'partials/_about.html',
				},
				'navbar': {
					templateUrl: 'partials/_main-navbar.html'
				},
				'footer': {
					templateUrl: 'partials/_footer.html'
				}
			}
		})

		.state('infographics', {
			url: '/infographics',
			views: {
				'master': {
					templateUrl: 'partials/_infographics.html',
				},
				'navbar': {
					templateUrl: 'partials/_main-navbar.html'
				},
				'footer': {
					templateUrl: 'partials/_footer.html'
				}
			}
		});

		// use the HTML5 History API
        $locationProvider.html5Mode(true);

}]);

portfolioApp.controller('postController', ['$scope', '$http', function($scope, $http) {

	$http.get('data/work-page.json').success(function(data) {
		$scope.posts = data;
	});

}]); 

portfolioApp.controller('singlePostController', ['$scope', '$stateParams', '$http', '$location', function($scope, $stateParams, $http, $location) {

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

jQuery(document).ready(function($){

/************************
BACK TO TOP BUTTON
*************************/

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		el = $('.sticky-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){

		var windowTop = $(window).scrollTop();
		
		if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
      		$('.sticky-btn').css({
      			bottom: 90
      		});
   		} else {
   			$('.sticky-btn').css({
      			bottom: 30
      		});
   		}

		( windowTop > offset ) ? el.addClass('cd-is-visible') : el.removeClass('cd-is-visible');
		( windowTop > offset ) ? $('.sticky-home').addClass('home-visible') : $('.sticky-home').removeClass('home-visible');

	});

	//smooth scroll to top
	el.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});






