describe("loginCtrlTest", function() {
beforeEach(module('common.services'));
beforeEach(module('productResourceMock'));
beforeEach(module('app'));
var $scope;
var controller;
var httpLocalBackend;

beforeEach(inject(function ($rootScope, $controller, $injector) {
    $scope = $rootScope.$new();
    controller = $controller("loginCtrl", {
        $scope: $scope
    });
}));

beforeEach(inject(function ($httpBackend) {
    httpLocalBackend = $httpBackend;
}));

it('should get stuff', function () {
    var url = 'api/products';
    var httpResponse = [{ "stuffId": 1 }, { "stuffId": 2 }];
    httpLocalBackend.expectGET(url).respond(200, httpResponse);
    $scope.getStuff();
    expect($scope.stuff.length).toBe(2);
    //httpLocalBackend.flush();
} );
});