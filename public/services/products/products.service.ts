/// <reference path="../../_references.d.ts" />

import plat = require('platypus');

import BaseService = require('../base/base.service');

class ProductsService extends BaseService {}

plat.register.injectable('products-service', ProductsService);

export = ProductsService;
