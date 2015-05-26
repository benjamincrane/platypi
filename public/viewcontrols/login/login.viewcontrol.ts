/// <reference path="../../_references.d.ts" />

import plat = require('platypus');
import BaseViewControl = require('../base/base.viewcontrol');
import UserRepository = require('../../repositories/user/user.repository');
import HomeViewControl = require('../home/home.viewcontrol');
import RegisterViewControl = require('../register/register.viewcontrol');

class LoginViewControl extends BaseViewControl {
    templateString: string = require('./login.viewcontrol.html');
    context: any = {
        email: '',
        password: '',
        error: ''
    };
