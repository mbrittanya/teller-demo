var app = angular.module('app', []);

app.controller('myCtrl', ['$scope', function($scope){
	$scope.filterBy = ''

	$scope.setFilter = function(){
		//set the $scope.filterBy according to what was clicked.
	}

	$scope.transactions = [
		{
			title: 'Sloppy Joe',
			cost: 4.49,
			notes: 'Extra sloppy'
		},
		{
			title: 'Crabby patty',
			cost: 3.49,
			notes: 'No pickles'
		},
		{
			title: 'Hot dog',
			cost: 2.49,
			notes: 'Vegan'
		},
		{
			title: 'Soda',
			cost: 1.49,
			notes: 'Large'
		},
		{
			title: 'Skittles',
			cost: 9.49,
			notes: 'Taste the rainbow'
		}
	];
}]);