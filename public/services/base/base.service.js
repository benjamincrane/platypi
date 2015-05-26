var plat = require('platypus');
var BaseService = (function () {
    function BaseService() {
        this.host = 'http://platypisamples.azurewebsites.net/gettingstarted/api';
    }
    BaseService._inject = {
        _http: plat.async.Http,
        _Promise: plat.async.IPromise,
        _utils: plat.Utils
    };
    return BaseService;
})();
module.exports = BaseService;
//# sourceMappingURL=base.service.js.map