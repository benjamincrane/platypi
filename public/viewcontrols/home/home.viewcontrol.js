var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var plat = require('platypus');
var BaseViewControl = require('../base/base.viewcontrol');
var HomeViewControl = (function (_super) {
    __extends(HomeViewControl, _super);
    function HomeViewControl() {
        _super.apply(this, arguments);
        this.templateString = require('./home.viewcontrol.html');
        this.context = {};
    }
    return HomeViewControl;
})(BaseViewControl);
plat.register.viewControl('home-vc', HomeViewControl);
module.exports = HomeViewControl;
//# sourceMappingURL=home.viewcontrol.js.map