window.app = angular.module('app', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider
			.when('/', {
			    controller: 'videoCtrl',
			    templateUrl: 'video.html'
			});
	})
	.controller('videoCtrl', function($scope) {
		$scope.pitches = [
			{
				row: [
					cols: [
						{
							title: 'Project 1',
							desc: 'A test project',
							thumbnailUri: ''
						},
						{
							title: 'Project 1',
							desc: 'A test project',
							thumbnailUri: ''
						},
						{
							title: 'Project 1',
							desc: 'A test project',
							thumbnailUri: ''
						}
					]
				]
			}
		];
	});