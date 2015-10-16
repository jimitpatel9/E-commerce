(function() {
	
var app=angular.module('app');
// body...
var usercheck=function($q,$timeout,userdata){
	return{
		require:'ngModel',
		link: function(scope,elm,attr,ctrl){
			userdata.query(function(data){
				scope.users=data;
			})
			ctrl.$asyncValidators.uname=function(modelValue,viewValue){
				if(ctrl.$isEmpty(modelValue)){
					return $q.when();
				}
				var def = $q.defer();
				$timeout(function(){
					for(var i=0;i<scope.users.length;i++){
						if(scope.users[i].username !== modelValue){
							def.resolve();
						}else{
							def.reject();
							break;
						}
					}

				},2000);
				return def.promise;
			};
		}
	}
};



app.directive('usercheck',["$q","$timeout","userdata",usercheck]);
	
})();