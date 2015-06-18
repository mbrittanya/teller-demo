var app = angluar.module('app',[]);

app.controller('myCtrl', ['$scope',function($scope){
	$scope.message = "howdy";
	$scope.filterBy = '';
	$scope.setFilter(){
		//set teh scope filter by what is clicked
	}
	$scope.stuff = [
	{ title: 'Sloppy Joe',
		cost: 4.49,
		notes: 'Extra Sloppy'}
	];

}]);