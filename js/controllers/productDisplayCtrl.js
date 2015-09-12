(function() {
	
var app=angular.module('app');
// body...
var productDisplayCtrl=function($scope,$stateParams,$state,productResource,orderdata){
	$scope.cartItemList=orderdata;
	
    productResource.query(function(data){
    	$scope.itemList=data;	
    });

    $scope.max=5;
    $scope.isReadonly=true;
    $scope.navbarCollapsed=true;
    $scope.productDetails=function(pid){
    	$state.go('productDetails',{pid:pid,username:$stateParams.username});
    }
	$scope.add=function(index,qty,pid,$event){
		var itemPushed=true;
		$event.stopPropagation();
		for (var i = 0;i<$scope.cartItemList.cartItem.length;i++) {
			if(pid===$scope.cartItemList.cartItem[i].pid){
				$scope.cartItemList.cartItem[i].qty +=qty;
				itemPushed=false;
				break;
			}
		};
		if (itemPushed) {
			$scope.itemList[index].qty=qty;
			$scope.cartItemList.cartItem.push($scope.itemList[index]);
		};
		
		$state.go('orderPage',{username:$stateParams.username});
		
	}
	
};



app.controller('productDisplayCtrl',
	["$scope","$stateParams","$state","productResource","orderdata",productDisplayCtrl]);
	
})();