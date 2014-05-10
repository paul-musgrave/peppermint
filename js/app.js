window.app = angular.module('app', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider
			.when('/', {
			    controller: 'homeCtrl',
			    templateUrl: 'home.html'
			});
	})
	.controller('homeCtrl', function($scope) {
		$scope.pitches = [
			{
				cols: [
					{
						title: 'Project 1',
						desc: 'A test project',
						thumbnailUri: ''
					},
					{
						title: 'Project 2',
						desc: 'A test project',
						thumbnailUri: ''
					},
					{
						title: 'Project 3',
						desc: 'A test project',
						thumbnailUri: ''
					}
				]
			},
			{
				cols: [
					{
						title: 'Project 4',
						desc: 'A test project',
						thumbnailUri: ''
					},
					{
						title: 'Project 5',
						desc: 'A test project',
						thumbnailUri: ''
					},
					{
						title: 'Project 6',
						desc: 'A test project',
						thumbnailUri: ''
					}
				]
			},
			{
				cols: [
					{
						title: 'Project 7',
						desc: 'A test project',
						thumbnailUri: ''
					},
					{
						title: 'Project 8',
						desc: 'A test project',
						thumbnailUri: ''
					},
					{
						title: 'Project 9',
						desc: 'A test project',
						thumbnailUri: ''
					}
				]
			}
		];
	});