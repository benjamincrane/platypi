var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var BaseService = require('../base/base.service');
var UserRepository = require('../../repositories/user/user.repository');
var ProductsService = (function (_super) {
    __extends(ProductsService, _super);
    function ProductsService(userRepository) {
        _super.call(this);
        this.userRepository = userRepository;
    }
    ProductsService.prototype.getProducts = function () {
        return this._http.json({
            method: 'GET',
            url: this.host + '/products/all'
        }).then(function (success) {
            return success.response.data;
        });
    };
    ProductsService.prototype.placeOrder = function (order) {
        order.userid = this.userRepository.userid;
        return this._http.json({
            method: 'POST',
            url: this.host + '/orders/create',
            data: order
        }).then(function (success) {
            return true;
        }, function (error) {
            throw error.response.message;
        });
    };
    return ProductsService;
})(BaseService);
plat.register.injectable('products-service', ProductsService, [UserRepository]);
module.exports = ProductsService;
//# sourceMappingURL=products.service.js.map