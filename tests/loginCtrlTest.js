describe('loginCtrlTest', function() {

  describe('loginCtrl',function ( ){

    beforeEach(module('app'));

    it('should have a LoginCtrl controller', function() {
      expect(app.loginCtrl).toBeDefined();
    });
  });
});