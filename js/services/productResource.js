(function(){
	//Services...
	var module = angular.module("common.services");
	var productResource = function($resource){
		
		

		return $resource("api/products/:pid");
		
	};




module.factory("productResource",["$resource",productResource]);
}());