(function() {
	
var app=angular.module('app');
// body...
var orderCtrl=function($scope,orderdata,$rootScope,$stateParams){
	$scope.cartItemList=orderdata;
	$scope.username=$stateParams.username;
	$scope.totalQty=0;
	$scope.totalPrice=0;
	for(var i=0;i < $scope.cartItemList.cartItem.length; i++){
		$scope.totalQty +=$scope.cartItemList.cartItem[i].qty;
		$scope.totalPrice +=($scope.cartItemList.cartItem[i].qty * $scope.cartItemList.cartItem[i].ourprice);
	}
	$scope.clearCart=function(){
		$scope.cartItemList.cartItem=[];
		$scope.totalQty=0;
		$scope.totalPrice=0;
	}
	$scope.removeAnItem=function(index){
		console.log(index);
		$scope.cartItemList.cartItem.splice(index,1);
		$scope.totalQty=0;
		$scope.totalPrice=0;
		for(var i=0;i < $scope.cartItemList.cartItem.length; i++){
			$scope.totalQty +=$scope.cartItemList.cartItem[i].qty;
			$scope.totalPrice +=($scope.cartItemList.cartItem[i].qty 
				                  *	$scope.cartItemList.cartItem[i].ourprice);
		}
	}
};



app.controller('orderCtrl',orderCtrl);
	
})();