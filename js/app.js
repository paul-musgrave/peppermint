var FBRef = new Firebase("https://blazing-fire-4190.firebaseio.com/");

window.app = angular.module('app', ['ngRoute', 'firebase'])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

		$routeProvider
			.when('/', {
			    controller: 'homeCtrl',
			    templateUrl: 'home.html'
			})
			.when('/rating', {
			    controller: 'ratingCtrl',
			    templateUrl: 'rating.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.controller('homeCtrl', function($scope) {
		$scope.thumbnailDir = 'images/video-thumbnails/';
		$scope.pitches = [
			{
				cols: [
					{
						title: 'Project 1',
						desc: 'A test project',
						thumbnailUri: '1.jpg'
					},
					{
						title: 'Project 2',
						desc: 'A test project',
						thumbnailUri: '2.jpg'
					},
					{
						title: 'Project 3',
						desc: 'A test project',
						thumbnailUri: '3.jpg'
					}
				]
			},
			{
				cols: [
					{
						title: 'Project 4',
						desc: 'A test project',
						thumbnailUri: '4.jpg'
					},
					{
						title: 'Project 5',
						desc: 'A test project',
						thumbnailUri: '5.jpg'
					},
					{
						title: 'Project 6',
						desc: 'A test project',
						thumbnailUri: '6.jpg'
					}
				]
			},
			{
				cols: [
					{
						title: 'Project 7',
						desc: 'A test project',
						thumbnailUri: '7.jpg'
					},
					{
						title: 'Project 8',
						desc: 'A test project',
						thumbnailUri: '8.jpg'
					},
					{
						title: 'Project 9',
						desc: 'A test project',
						thumbnailUri: '9.jpg'
					}
				]
			}
		];
	})
    .controller('ratingCtrl', function($scope, $firebase) {
        $scope.user_id = uuid(); //#

        var videoRef = FBRef.child('videos/v1'), //# v1->id
            questionsRef = videoRef.child('questions'),
            responseRef = videoRef.child('responses');

        $scope.questions = $firebase(questionsRef);
        $scope.comments = $firebase(videoRef.child('comments'));


        questionsRef.on('child_added', function(ss){
         $scope.$watch('questions.'+ss.name()+'.answer', function(){
             if($scope.questions[ss.name()].answer){
                 responseRef.child($scope.user_id+'/'+ss.name()).set($scope.questions[ss.name()].answer);
             }
         });
        });
    });

function uuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
