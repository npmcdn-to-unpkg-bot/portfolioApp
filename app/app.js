'use strict';

var portfolioApp = angular.module('portfolioApp', [
	'ui.router',
	'ngAnimate',
	'app.controllers',
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

portfolioApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

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
        // $locationProvider.html5Mode(true);

});












