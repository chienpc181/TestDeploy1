app.controller('MainController',['$scope', function($scope){
	$scope.list = ["Clean my room", "Go to the store", "Study cracking the coding interview"];
	$scope.addItem = function(){
		$scope.list.push($scope.addToDo);
	}
}])