(function() {
	
var app=angular.module('app');
// body...
var homeCtrl=function($scope){
	$scope.error=false;
	
};



app.controller('homeCtrl',
	["$scope",homeCtrl]);
	
})();