(function() {
	
var app=angular.module('app');
// body...
var productFilter=function(){
	return function(input,searchText){
		var output=input;
		
		
		//do the filter work here
		if(searchText){
			output=[];
			searchText=searchText.toLowerCase();
			angular.forEach(input,function(item){
				
				if(item.name.toLowerCase().indexOf(searchText) !== -1){
					output.push(item);
				}
			});
		}
		
		return output;
	}
};



app.filter('productFilter',productFilter);
	
})();