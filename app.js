var app = angular.module('app', []);

app.controller('myCtrl', ['$scope', function($scope){
	$scope.filterBy = '';

	$scope.setFilter = function(item){
		switch(item){
			case "title":
				if($scope.filterBy === "title"){
					$scope.filterBy =  "-title";
				}else if($scope.filterBy === "-title"){
					$scope.filterBy = '';
				}else{
    			$scope.filterBy = item;
    			}
    			break;
			case "cost":
    			if($scope.filterBy === "cost"){
					$scope.filterBy =  "-cost";
				}else if($scope.filterBy === "-cost"){
					$scope.filterBy = '';
				}else{
    			$scope.filterBy = item;
    			}
    			break;
			case "notes":
    			if($scope.filterBy === "notes"){
					$scope.filterBy =  "-notes";
				}else if($scope.filterBy === "-notes"){
					$scope.filterBy = '';
				}else{
    			$scope.filterBy = item;
    			}
    			break;
		}
	};

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