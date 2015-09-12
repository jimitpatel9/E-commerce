(function(){
    var app=angular.module("productResourceMock",["ngMockE2E"]);
    app.run(function($httpBackend){
    	var	userdata=[{
    			uid:'1',
				username:'jimit',
				password:'jimit',
				email:'jimit@jimit',
			},
			{	uid:'2',
				username:'demo',
				password:'demo',
				email:'demo@demo',
			}
		];
		var iteminfo=[{
				pid:'1',
				name:'Pen',
				orignalprice:5.00,
				ourprice:4.00,
				qty:1,
				rate:4,
				imageUrl:'images/item/pen.png'
			},
			{
				pid:'2',
				name:'Pencil',
				orignalprice:5.00,
				ourprice:3.00,
				qty:1,
				rate:3,
				imageUrl:'images/item/pencil.png'
			},
			{
				pid:'3',
				name:'Eraser',
				orignalprice:5.00,
				ourprice:3.00,
				qty:1,
				rate:4,
				imageUrl:'images/item/eraser.png'
			},
			{
				pid:'4',
				name:'Compass Box',
				orignalprice:15.00,
				ourprice:10.00,
				qty:1,
				rate:3,
				imageUrl:'images/item/compass.jpg'
			}];
		var productUrl='api/products';
		$httpBackend.expectGET(productUrl);
		$httpBackend.whenGET(productUrl).respond(iteminfo);
		var editingRegex= new RegExp(productUrl+"/[0-9][0-9]*",'');
		$httpBackend.whenGET(editingRegex).respond(function(method,url,data){
			var product={pid:0};
			var parameters=url.split('/');
			var length=parameters.length;
			var id=parameters[length-1];
			if(id>0){
				for(var i=0;i<iteminfo.length;i++){
					if(iteminfo[i].pid===id){
						product=iteminfo[i];
						break;
					}
				};
			}
			return[200,product,{}];
		});

		var userDetails='/user';
		$httpBackend.whenGET(userDetails).respond(userdata);
		$httpBackend.whenPOST(userDetails).respond(function(method,url,data){
			var user=angular.fromJson(data);
			userdata.push(user);
			/*if(!user.email){
				user.uid=userdata[userdata.length-1].uid+1;
				userdata.push(user);
			}*/
			return[200];
		})
		$httpBackend.whenGET(/^.+html/).passThrough();
    })
})();