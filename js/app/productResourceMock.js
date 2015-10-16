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
				imageUrl:['images/item/pen.png','images/item/pencil.png']
			},
			{
				pid:'2',
				name:'Pencil',
				orignalprice:5.00,
				ourprice:3.00,
				qty:1,
				rate:3,
				imageUrl:['images/item/pencil.png']
			},
			{
				pid:'3',
				name:'Belt',
				orignalprice:5.00,
				ourprice:3.00,
				qty:1,
				rate:4,
				imageUrl:['images/item/belt.png']
			},
			{
				pid:'4',
				name:'Guitar',
				orignalprice:15.00,
				ourprice:10.00,
				qty:1,
				rate:3,
				imageUrl:['images/item/guitar.png']
			},
			{
				pid:'5',
				name:'Ipad',
				orignalprice:150.00,
				ourprice:100.00,
				qty:1,
				rate:3,
				imageUrl:['images/item/ipad.png']
			},{
				pid:'6',
				name:'Iphone6',
				orignalprice:750.00,
				ourprice:699.00,
				qty:1,
				rate:3,
				imageUrl:['images/item/iphone6.png']
			},{
				pid:'7',
				name:'Keyboard',
				orignalprice:15.00,
				ourprice:10.00,
				qty:1,
				rate:3,
				imageUrl:['images/item/keyboard.png']
			},{
				pid:'8',
				name:'Laptop',
				orignalprice:799.00,
				ourprice:599.00,
				qty:1,
				rate:3,
				imageUrl:['images/item/laptop.png']
			},{
				pid:'9',
				name:'Teddy Bear',
				orignalprice:50.00,
				ourprice:40.00,
				qty:1,
				rate:3,
				imageUrl:['images/item/teddybeer.png']
			},{
				pid:'10',
				name:'Wrist Watch',
				orignalprice:400.00,
				ourprice:100.00,
				qty:1,
				rate:3,
				imageUrl:['images/item/watch.png']
			},{
				pid:'11',
				name:'Men Shoe',
				orignalprice:79.00,
				ourprice:69.00,
				qty:1,
				rate:3,
				imageUrl:['images/item/shoes.png']
			},{
				pid:'12',
				name:'Women Shoe',
				orignalprice:49.00,
				ourprice:39.00,
				qty:1,
				rate:3,
				imageUrl:['images/item/womenshoes.png']
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