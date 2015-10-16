(function() {
	
var app = angular.module('app');
// body...
var productDetailsCtrl=function($scope,$stateParams,product){
	$scope.user=$stateParams.username;
	$scope.product=product;
	//Navbar
	$scope.navbarCollapsed=true;
	//Ratings
	$scope.max=5;
    $scope.isReadonly=true;
	//carousel info
	$scope.myInterval=2000;
	$scope.noWrapSlides=false;

};



app.controller('productDetailsCtrl',
	["$scope","$stateParams","product",productDetailsCtrl]);
	
})();