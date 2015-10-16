(function() {
	
var app=angular.module('app');
// body...
var userDetail=function($scope,userdata,$state){
	

	$scope.addUserData=function(){

//to store the data
	userdata.save(
		{	username:$scope.username,
			password:$scope.password,
			email:$scope.email
		},function(data){
			//data saved . do something
		}
	);
		if($scope.username && $scope.password && $scope.email){
			$scope.$parent.error=true;
			$state.go('home.login');
		};
		
	}
	
};



app.controller('userDetail',["$scope","userdata","$state",userDetail]);
	
})();