(function(){
	//Services...
	var module = angular.module("app");
	var orderdata = function(){
		var cartItem=[];
		return{
			cartItem:cartItem
		};
	};




module.factory("orderdata",orderdata);
}());