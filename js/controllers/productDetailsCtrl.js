(function() {
	
var app=angular.module('app');
// body...
var productDetailsCtrl=function($scope,$stateParams,product){
	$scope.user=$stateParams.username;
	$scope.product=product;
	//Navbar
	$scope.navbarCollapsed=true;
	//Ratings
	$scope.max=5;
    $scope.isReadonly=true;
};



app.controller('productDetailsCtrl',
	["$scope","$stateParams","product",productDetailsCtrl]);
	
})();