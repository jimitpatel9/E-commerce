(function  () {
	// body...
	var app = angular.module('app');
	app.config(['$stateProvider','$urlRouterProvider',configRoutes]);
		function configRoutes($stateProvider,$urlRouterProvider){

		$stateProvider
		.state('home',{
				url:'/home',
				abstract:true,
				template:'<ui-view/>',
				controller:'homeCtrl'
			})
			.state('home.login',{
				url:'/login',
				templateUrl:'login.html',
				controller:'loginCtrl'
			})
			.state("displayProducts",{
				url:"/products/:username",
				templateUrl:"productsDisplay.html",
				controller:"productDisplayCtrl"
				/*resolve:{
					productResource : "productResource",
					prod:function(productResource){
						
						return console.log(productResource.query().$promise);
					}

				}*/
			})
			.state("productDetails",{
				url:"/product/:pid/:username",
				templateUrl:"productDetails.html",
				controller:"productDetailsCtrl",
				resolve:{
					productResource : "productResource",
					product:function(productResource,$stateParams){
						var pid=$stateParams.pid;
						return productResource.get({pid:pid}).$promise;
					}

				}
			})
			.state("home.userdetail",{
				url:'/userdetail',
				templateUrl:"userdetail.html",
				controller:"userDetail"
			})
			.state("orderPage",{
				url:'/:username/order',
				templateUrl:"order.html",
				controller:"orderCtrl"
			})
			.state("checkout",{
				url:'/:username/checkout',
				templateUrl:"checkout.html",
				controller:"checkoutCtrl"
			});
			$urlRouterProvider.otherwise('/home/login');
	}
	app.run(['$state',function($state){

	}]);
}());
/*(function  () {
	// body...
	var app = angular.module("app");
	app.config(function($routeProvider){

		$routeProvider
			.when("/login",{
				templateUrl:"login.html",
				controller:"loginCtrl"
			}).when("/user/:username",{
				templateUrl:"user.html",
				controller:"userCtrl"
			}).when("/userdetail",{
				templateUrl:"userdetail.html",
				controller:"userDetail"
			})
			.otherwise({redirectTo:"/login"});
	});
}());*/