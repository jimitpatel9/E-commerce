(function(){
	//Services...
	var module = angular.module("common.services");
	var userdata = function($resource){
		return $resource("/user");
	};




module.factory("userdata",["$resource",userdata]);
}());