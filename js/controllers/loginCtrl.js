(function() {
	
var app=angular.module('app');
// body...
var loginCtrl=function($scope,userdata,$state,$rootScope){

	//user data from the mocke2e

	var userinfo=null;
	userdata.query(function(data){
    	userinfo=data;	
    });
	$scope.foo='foo';
    //alert if the user sign-up

	$scope.alerts = [{ 
    	type: 'success',
    	msg: 'You successfully Registered!' 
 	}];
 	$scope.closeAlert=function(index){
 		$scope.alerts.splice(index, 1);
 		$scope.$parent.error=false;
 	};

	//validate the login info

	$scope.validateLogin=function(){
		$scope.tracker=false;
		for(var i=0;i<userinfo.length;i++){
			if(userinfo[i].username===$scope.username && 
				userinfo[i].password===$scope.password){
				tracker=true;
			}
		}
		if(tracker===true){
			$scope.error=false;
			$state.go('displayProducts',{username:$scope.username});
		}
		else{
			$scope.error="Username and Password do not Match!!!";

		}
	};
	
};



app.controller('loginCtrl',
	["$scope","userdata","$state","$rootScope",loginCtrl]);
	
})();