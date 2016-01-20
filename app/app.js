'use strict';

var portfolioApp = angular.module('portfolioApp', [
	'ui.router',
	'ngAnimate',
	'app.controllers'
]);

portfolioApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

		// route for the home page
		.state('home', {
			url: '/',
			views: {
				'master': {
					templateUrl: 'partials/_home.html'
				}
			}
		})

		.state('work', {
			url: '/work',
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
		.state('work-content', {
			url: '/work/:workId',
			views: {
				'master': {
					templateUrl: 'partials/_workContent.html',
					controller: 'singlePostController'
				},
				'navbar@work-content': {
					templateUrl: 'partials/_secondary-navbar.html'
				},
				'footer@work-content': {
					templateUrl: 'partials/_footer.html'
				}
			}
		})

		.state('about', {
			url: '/about',
			templateUrl: 'partials/_about.html'
		})

		.state('contact', {
			url: '/contact',
			templateUrl: 'partials/_contact.html'
		});

});










