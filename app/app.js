'use strict';

var portfolioApp = angular.module('portfolioApp', [
	'ui.router',
	'ngAnimate',
	'app.controllers',
]);

portfolioApp.run(['$window', '$rootScope', '$state', function($window, $rootScope, $state) {
    
    $rootScope.$on('$viewContentLoaded', function () {

        var interval = setInterval(function () {
            if (document.readyState == "complete") {
                window.scrollTo(0, 0);
                clearInterval(interval);
            }
        });

    });

}]);

portfolioApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

		// route for the home page
		// .state('home', {
		// 	url: '/',
		// 	views: {
		// 		'master': {
		// 			templateUrl: 'partials/_home.html'
		// 		}
		// 	}
		// })

		.state('work', {
			url: '/',
			views: {
				'master': {
					templateUrl: 'partials/_work.html',
					controller: 'postController'
				},
				'navbar@work': {
					templateUrl: 'partials/_main-navbar.html'
				},
				'footer@work': {
					templateUrl: 'partials/_footer.html'
				}
			}
		})

		// child of work
		.state('work-post', {
			url: 'work/:workId',
			views: {
				'master': {
					templateUrl: 'partials/_work-post.html',
					controller: 'singlePostController'
				},
				'navbar@work-post': {
					templateUrl: 'partials/_main-navbar.html'
				},
				'footer@work-post': {
					templateUrl: 'partials/_footer.html'
				}
			}
		})

		.state('about', {
			url: '/about',
			views: {
				'master': {
					templateUrl: 'partials/_about.html',
				},
				'navbar@about': {
					templateUrl: 'partials/_main-navbar.html'
				},
				'footer@about': {
					templateUrl: 'partials/_footer.html'
				}
			}
		})

		.state('contact', {
			url: '/contact',
			templateUrl: 'partials/_contact.html'
		});

});










