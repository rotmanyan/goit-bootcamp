webpackJsonp([1],{

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(558)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(472),
  /* template */
  __webpack_require__(536),
  /* scopeId */
  "data-v-b512f42a",
  /* cssModules */
  null
)
Component.options.__file = "/app/resources/assets/js/layouts/Default.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Default.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b512f42a", Component.options)
  } else {
    hotAPI.reload("data-v-b512f42a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_login__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__auth_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_register_form_modal__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_register_form_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__auth_register_form_modal__);
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "auth",

    components: {
        login: __WEBPACK_IMPORTED_MODULE_0__auth_login___default.a, registerFormModal: __WEBPACK_IMPORTED_MODULE_1__auth_register_form_modal___default.a
    },

    destroyed() {
        if (this.modal) {
            this.modal.hide();
        }
    },

    data() {
        return {
            modal: null
        };
    },

    methods: {
        show(name) {
            this.modal = new Modal({ el: document.getElementById(name) }).show();
        },

        hide(name) {
            this.modal.hide(name);
        }
    }
});

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "login",

    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            isProceed: false,
            errors: {}
        };
    },

    computed: {
        valid() {
            let valid = true;

            Object.values(this.form).forEach(v => {
                if (!v.length) {
                    valid = false;
                }
            });

            return valid;
        }
    },

    methods: {
        submit() {
            this.errors = {};
            this.isProceed = true;

            this.$store.dispatch('login', this.form).then(res => {
                if (res.data.error) {
                    this.errors.credentials = 'Wrong email or password';
                }
                this.$router.push('/');
                this.isProceed = false;
            }).catch(err => {
                if (err.response.status === 422) {
                    this.errors = err.response.data.errors;
                }
                this.isProceed = false;
            });
        },

        close() {
            this.$emit('hide', 'login');
        }
    }
});

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_BaseRegForm__ = __webpack_require__(484);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "register-form-modal",
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_BaseRegForm__["a" /* default */]],

    data() {
        return {
            form: {
                first_name: '',
                email: '',
                password: '',
                password_confirmation: '',
                role_id: ''
            },
            roles: {}
        };
    },

    created() {
        this.getRoles();
    },

    computed: {
        registerRole() {
            return this.$store.state.registerRole;
        }
    },

    methods: {
        close() {
            this.$emit('hide', 'register');
        },

        getRoles() {
            this.$http.get('/users/roles').then(res => {
                this.roles = res.data.roles;
            });
        }
    },

    watch: {
        registerRole: function () {
            this.form.role_id = this.$store.state.registerRole;
        }
    }
});

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'locale-changer',

    data() {
        return {
            langs: ['eng', 'rus', 'frn'],
            currentLocale: 'eng',
            name: '',
            isShowLocales: false
        };
    },

    created() {
        this.currentLocale = localStorage.getItem('locale') || 'eng';
    },

    methods: {
        setLocale(locale) {
            this.$i18n.locale = locale;
            this.currentLocale = locale;
            this.toggleLocales();
            localStorage.setItem('locale', this.currentLocale);
        },

        toggleLocales() {
            this.isShowLocales = !this.isShowLocales;
        },

        isActive(locale) {
            return this.currentLocale !== locale;
        },

        getLocaleName(lang) {

            return lang === 'eng' ? 'EN' : lang === 'rus' ? 'RU' : 'FR';
        }
    }
});

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Footer"
});

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__auth_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_menu__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__user_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locale_index__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locale_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__locale_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Navigation__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Header",

    components: {
        auth: __WEBPACK_IMPORTED_MODULE_1__auth_auth___default.a,
        userMenu: __WEBPACK_IMPORTED_MODULE_2__user_menu___default.a,
        locale: __WEBPACK_IMPORTED_MODULE_3__locale_index___default.a,
        navigation: __WEBPACK_IMPORTED_MODULE_4__Navigation___default.a
    },

    data() {
        return {
            blogs: [],
            blog: {
                title: '',
                description: ''
            },
            search: ''
        };
    },
    computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])(['isAuth'])),

    methods: {
        onChange() {
            this.$http.get('/projects/items/search?title=' + this.search).then(response => {
                this.blogs = response.data.data;
            }).catch(error => {
                console.log(error);
            });
        }
    }
});

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Navigation"
});

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            isOpen: false
        };
    },
    computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])('user', ['user', 'isBrand'])),
    methods: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapActions */])(['logout']), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapActions */])('user', ['loadUser']), {
        toggle() {
            this.isOpen = !this.isOpen;
        },
        close(e) {
            this.isOpen = false;
        },
        doLogout() {
            this.logout().then(() => this.$router.push('/'));
        }
    }),
    created() {
        this.loadUser();
    }
});

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sections_Header__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sections_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_sections_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sections_Footer__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sections_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_sections_Footer__);
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Default",

    components: {
        appHeader: __WEBPACK_IMPORTED_MODULE_0__components_sections_Header___default.a, appFooter: __WEBPACK_IMPORTED_MODULE_1__components_sections_Footer___default.a
    }
});

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//TODO удалить, оставлено для корректного отображения временной всплывашки регистрации

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            errors: {},
            isProceed: false,
            form: {}
        };
    },

    methods: {
        submit() {
            this.errors = {};
            this.isProceed = true;

            this.$store.dispatch('register', this.form).then(res => {
                this.isProceed = false;
                this.$router.push('/profile');
            }).catch(err => {
                if (err.response.status === 422) {
                    this.errors = err.response.data.errors;
                    console.log(this.errors);
                }
                this.isProceed = false;
            });
        }
    },

    computed: {
        valid() {
            let valid = true;

            if (Object.values(this.form).length === 0) {
                return false;
            }

            Object.values(this.form).forEach(v => {
                if (!v) {
                    valid = false;
                }
            });

            return valid;
        }
    }
});

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.danger-error[data-v-3eda382b] {\n    font-size: 12px;\n    display: block;\n    line-height: 16px;\n    color: red;\n    padding-left: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.danger-error[data-v-4cb09160] {\n    font-size: 12px;\n    display: block;\n    line-height: 16px;\n    color: red;\n    padding-left: 3px;\n}\n.modal-btn[disabled=\"disabled\"][data-v-4cb09160] {\n    color: #3b3f52;\n    background-color: #1f2331;\n}\n", ""]);

// exports


/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.auth[data-v-950be754] {\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n.btn-auth[data-v-950be754] {\n    padding: 3px;\n    margin: 3px;\n    min-width: 30px;\n    text-align: center;\n    font-size: 16px;\n    background-color: #c0a16b;\n    border: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.dropdown-list[data-v-bf208c6c] {\n    display: block;\n}\n.dropdown-item__link[data-v-bf208c6c]{\n    text-decoration: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(557)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(459),
  /* template */
  __webpack_require__(535),
  /* scopeId */
  "data-v-950be754",
  /* cssModules */
  null
)
Component.options.__file = "/app/resources/assets/js/components/auth/auth.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] auth.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-950be754", Component.options)
  } else {
    hotAPI.reload("data-v-950be754", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(545)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(460),
  /* template */
  __webpack_require__(521),
  /* scopeId */
  "data-v-3eda382b",
  /* cssModules */
  null
)
Component.options.__file = "/app/resources/assets/js/components/auth/login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3eda382b", Component.options)
  } else {
    hotAPI.reload("data-v-3eda382b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(547)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(461),
  /* template */
  __webpack_require__(524),
  /* scopeId */
  "data-v-4cb09160",
  /* cssModules */
  null
)
Component.options.__file = "/app/resources/assets/js/components/auth/register_form_modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] register_form_modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cb09160", Component.options)
  } else {
    hotAPI.reload("data-v-4cb09160", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(467),
  /* template */
  __webpack_require__(520),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/app/resources/assets/js/components/locale/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f7bbf06", Component.options)
  } else {
    hotAPI.reload("data-v-2f7bbf06", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(548)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(468),
  /* template */
  __webpack_require__(525),
  /* scopeId */
  "data-v-5e1971a3",
  /* cssModules */
  null
)
Component.options.__file = "/app/resources/assets/js/components/sections/Footer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Footer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e1971a3", Component.options)
  } else {
    hotAPI.reload("data-v-5e1971a3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(554)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(469),
  /* template */
  __webpack_require__(531),
  /* scopeId */
  "data-v-7f4bd595",
  /* cssModules */
  null
)
Component.options.__file = "/app/resources/assets/js/components/sections/Header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f4bd595", Component.options)
  } else {
    hotAPI.reload("data-v-7f4bd595", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(553)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(470),
  /* template */
  __webpack_require__(530),
  /* scopeId */
  "data-v-7cfee99c",
  /* cssModules */
  null
)
Component.options.__file = "/app/resources/assets/js/components/sections/Navigation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navigation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cfee99c", Component.options)
  } else {
    hotAPI.reload("data-v-7cfee99c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(559)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(471),
  /* template */
  __webpack_require__(537),
  /* scopeId */
  "data-v-bf208c6c",
  /* cssModules */
  null
)
Component.options.__file = "/app/resources/assets/js/components/user/menu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] menu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bf208c6c", Component.options)
  } else {
    hotAPI.reload("data-v-bf208c6c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dropdown drp-lang align-items-center"
  }, [_c('div', {
    staticClass: "dropdown-select",
    on: {
      "click": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "prev", undefined, $event.key, undefined)) { return null; }
        return _vm.toggleLocales($event)
      }
    }
  }, [_c('div', {
    staticClass: "dropdown-item"
  }, [_c('div', {
    staticClass: "dropdown-item-icon icon-lang",
    class: 'icon-' + _vm.currentLocale
  }, [_c('svg', [_c('use', {
    attrs: {
      "xlink:href": '#' + _vm.currentLocale,
      "x": "0",
      "y": "0"
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "dropdown-item-name",
    domProps: {
      "textContent": _vm._s(_vm.getLocaleName(_vm.currentLocale))
    }
  })])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowLocales),
      expression: "isShowLocales"
    }],
    staticClass: "dropdown-list",
    staticStyle: {
      "display": "block"
    }
  }, _vm._l((_vm.langs), function(lang) {
    return (_vm.isActive(lang)) ? _c('div', {
      staticClass: "dropdown-item",
      on: {
        "click": function($event) {
          _vm.setLocale(lang)
        }
      }
    }, [_c('div', {
      staticClass: "dropdown-item-icon icon-lang",
      class: 'icon-' + lang
    }, [_c('svg', [_c('use', {
      attrs: {
        "xlink:href": '#' + lang,
        "x": "0",
        "y": "0"
      }
    })])]), _vm._v(" "), _c('span', {
      staticClass: "dropdown-item-name",
      domProps: {
        "textContent": _vm._s(_vm.getLocaleName(lang))
      }
    })]) : _vm._e()
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f7bbf06", module.exports)
  }
}

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-new modal fade",
    attrs: {
      "id": "login",
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_vm._m(0), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.$t('auth.login')))])]), _vm._v(" "), (_vm.errors.credentials) ? _c('small', {
    staticClass: "danger-error"
  }, [_vm._v(_vm._s(_vm.errors.credentials))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('span', {
    staticClass: "form-input-heading"
  }, [_vm._v(_vm._s(_vm.$t('auth.email')))]), _vm._v(" "), _c('div', {
    staticClass: "form-input-block d-flex flex-column"
  }, [_c('label', {
    staticClass: "form-input-label"
  }, [_vm._v(_vm._s(_vm.$t('auth.email')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.email),
      expression: "form.email"
    }],
    attrs: {
      "name": "username"
    },
    domProps: {
      "value": (_vm.form.email)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.submit($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "email", $event.target.value)
      }
    }
  })]), _vm._v(" "), (_vm.errors.email) ? _c('small', {
    staticClass: "danger-error"
  }, [_vm._v(_vm._s(_vm.errors.email[0]))]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "form-input-heading"
  }, [_vm._v(_vm._s(_vm.$t('auth.login')))]), _vm._v(" "), _c('div', {
    staticClass: "form-input-block d-flex flex-column"
  }, [_c('label', {
    staticClass: "form-input-label"
  }, [_vm._v(_vm._s(_vm.$t('auth.password')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password),
      expression: "form.password"
    }],
    attrs: {
      "name": "password",
      "type": "password"
    },
    domProps: {
      "value": (_vm.form.password)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.submit($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "password", $event.target.value)
      }
    }
  })]), _vm._v(" "), (_vm.errors.password) ? _c('small', {
    staticClass: "danger-error"
  }, [_vm._v(_vm._s(_vm.errors.password[0]))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "modal-btns d-flex justify-content-between"
  }, [_c('button', {
    staticClass: "modal-btn modal-btn-free",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "prev", undefined, $event.key, undefined)) { return null; }
        return _vm.close($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('auth.cancel')))]), _vm._v(" "), _c('button', {
    staticClass: "modal-btn",
    attrs: {
      "disabled": !_vm.valid || _vm.isProceed
    },
    on: {
      "click": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "prev", undefined, $event.key, undefined)) { return null; }
        return _vm.submit($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('auth.login')))])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3eda382b", module.exports)
  }
}

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-new modal fade",
    attrs: {
      "id": "register",
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('span', {
    staticClass: "form-input-heading"
  }, [_vm._v("Name")]), _vm._v(" "), _c('div', {
    staticClass: "form-input-block d-flex flex-column"
  }, [_c('label', {
    staticClass: "form-input-label",
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.first_name),
      expression: "form.first_name"
    }],
    attrs: {
      "id": "name"
    },
    domProps: {
      "value": (_vm.form.first_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "first_name", $event.target.value)
      }
    }
  })]), _vm._v(" "), (_vm.errors.first_name) ? _c('small', {
    staticClass: "danger-error"
  }, [_vm._v(_vm._s(_vm.errors.name[0]))]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "form-input-heading"
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "form-input-block d-flex flex-column"
  }, [_c('label', {
    staticClass: "form-input-label"
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.email),
      expression: "form.email"
    }],
    domProps: {
      "value": (_vm.form.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "email", $event.target.value)
      }
    }
  })]), _vm._v(" "), (_vm.errors.email) ? _c('small', {
    staticClass: "danger-error"
  }, [_vm._v(_vm._s(_vm.errors.email[0]))]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "form-input-heading"
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "form-input-block d-flex flex-column"
  }, [_c('label', {
    staticClass: "form-input-label",
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password),
      expression: "form.password"
    }],
    attrs: {
      "id": "password",
      "type": "password"
    },
    domProps: {
      "value": (_vm.form.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "password", $event.target.value)
      }
    }
  })]), _vm._v(" "), (_vm.errors.password) ? _c('small', {
    staticClass: "danger-error"
  }, [_vm._v(_vm._s(_vm.errors.password[0]))]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "form-input-heading"
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "form-input-block d-flex flex-column"
  }, [_c('label', {
    staticClass: "form-input-label",
    attrs: {
      "for": "password_confirmation"
    }
  }, [_vm._v("Confirm Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password_confirmation),
      expression: "form.password_confirmation"
    }],
    attrs: {
      "id": "password_confirmation",
      "type": "password"
    },
    domProps: {
      "value": (_vm.form.password_confirmation)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "password_confirmation", $event.target.value)
      }
    }
  })]), _vm._v(" "), (_vm.errors.password_confirmation) ? _c('small', {
    staticClass: "danger-error"
  }, [_vm._v("\n                    " + _vm._s(_vm.errors.password_confirmation[0]) + "\n                ")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "form-input-heading"
  }, [_vm._v("Choose your plan")]), _vm._v(" "), _c('div', {
    staticClass: "select-block",
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.role_id),
      expression: "form.role_id"
    }],
    staticClass: "select select-role-on-register",
    attrs: {
      "name": "role_id"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.$set(_vm.form, "role_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
      }
    }
  }, _vm._l((_vm.roles), function(role) {
    return (role.name != 'admin') ? _c('option', {
      domProps: {
        "value": role.id
      }
    }, [_vm._v(_vm._s(role.name))]) : _vm._e()
  }))]), _vm._v(" "), _c('div', {
    staticClass: "modal-btns d-flex justify-content-between"
  }, [_c('button', {
    staticClass: "modal-btn modal-btn-free",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "prev", undefined, $event.key, undefined)) { return null; }
        return _vm.close($event)
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('button', {
    staticClass: "modal-btn",
    attrs: {
      "disabled": !_vm.valid || _vm.isProceed
    },
    on: {
      "click": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "prev", undefined, $event.key, undefined)) { return null; }
        return _vm.submit($event)
      }
    }
  }, [_vm._v("Register")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Registration")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4cb09160", module.exports)
  }
}

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "col-lg-10 col-md-10 footer-link-block"
  }, [_c('ul', {
    staticClass: "list-horizontal footer-link"
  }, [_c('li', [_c('router-link', {
    attrs: {
      "to": "/registration",
      "tag": "a"
    }
  }, [_vm._v(_vm._s(_vm.$t('footer.pricing')))])], 1), _vm._v(" "), _c('li', [_c('a', [_vm._v(_vm._s(_vm.$t('footer.privacyPolicy')))])]), _vm._v(" "), _c('li', [_c('a', [_vm._v(_vm._s(_vm.$t('footer.termsOfUse')))])]), _vm._v(" "), _c('li', [_c('a', [_vm._v(_vm._s(_vm.$t('footer.contactsUs')))])]), _vm._v(" "), _c('li', [_c('a', {
    staticClass: "link-mail"
  }, [_c('svg', [_c('use', {
    attrs: {
      "xlink:href": "#mail",
      "x": "0",
      "y": "0"
    }
  })]), _vm._v("mail@flameplace.com")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-lg-2 col-md-2"
  }, [_c('div', {
    staticClass: "copyright"
  }, [_c('span', [_vm._v("© Flameplace, 2018")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e1971a3", module.exports)
  }
}

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-4 header-navbar-block"
  }, [_c('nav', {
    staticClass: "navbar navbar-expand-lg navbar-light bg-light"
  }, [_c('div', {
    staticClass: "collapse navbar-collapse",
    attrs: {
      "id": "navbarSupportedContent"
    }
  }, [_c('ul', {
    staticClass: "list-horizontal navbar-nav"
  }, [_c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": {
        name: 'catalog'
      },
      "active-class": "active",
      "tag": "li"
    }
  }, [_c('a', {
    staticClass: "nav-link"
  }, [_vm._v(_vm._s(_vm.$t('header.catalog')))])]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": {
        name: 'showrooms'
      },
      "active-class": "active",
      "tag": "li"
    }
  }, [_c('a', {
    staticClass: "nav-link"
  }, [_vm._v(_vm._s(_vm.$t('header.showrooms')))])]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": {
        name: 'designers'
      },
      "active-class": "active",
      "tag": "li"
    }
  }, [_c('a', {
    staticClass: "nav-link"
  }, [_vm._v(_vm._s(_vm.$t('header.designers')))])]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": {
        name: 'brands'
      },
      "active-class": "active",
      "tag": "li"
    }
  }, [_c('a', {
    staticClass: "nav-link"
  }, [_vm._v(_vm._s(_vm.$t('header.brands')))])]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": {
        name: 'news'
      },
      "active-class": "active",
      "tag": "li"
    }
  }, [_c('a', {
    staticClass: "nav-link"
  }, [_vm._v(_vm._s(_vm.$t('header.news')))])])], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7cfee99c", module.exports)
  }
}

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_c('div', {
    staticClass: "col-lg-3 col-md-4 col-sm-4 col-xs-6"
  }, [_c('div', {
    staticClass: "h-logo logo"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "width": "31",
      "height": "40",
      "viewBox": "0 0 31 40"
    }
  }, [_c('g', [_c('g', {
    attrs: {
      "transform": "translate(-24 -12)"
    }
  }, [_c('image', {
    attrs: {
      "width": "31",
      "height": "40",
      "transform": "translate(24 12)",
      "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAoCAYAAAAG0SEsAAAI00lEQVRYR51YC1QU1xm+d3YhRqqnarQ5yUmrSWuOj5BQdlfDY8OyymN5L8JpSAFJqp6WiO/g25WoaNQYFRQNGlFTrMCCIvJQcHmJoIbIwRirIemx1dK0amliFZi5/e+dmd3ZZVHsnGX3zr3//b//+193BoyGeDXsifZGHB+LCNIjIkwiBL3gpVZ7aeaVP7h4yBytnW09SSwWrnXiF2OnJ53sHopa/CSh5jxTDE/QKoywlgAifJD4hVCPh9orioIfNl9GmFuiTS62wfg9glEE6heydGllXz5O/6DgLXtjx/eTvoMIIwMFBcbwkX5F8FtB86t+TgcA+BX8jCa86g1dWtHfLxbEb0aYfIARyX/Yxy8JeO/kf9wZ4Ra8Mc8Uhgj+E4COpJsGgjNDCoMzqpPADnzpiPnfIDYChqd0KSVRx48nqCY85Gth7i2QvM5zgnn6b09QA52uAeANeyN+AxuOgnaV7GLGU3Y5hWWu58OCF56tvlwQ7y1gckXWCqvxupRSa9vBmJewWnWVGgV/9yFsYZqUklYluhN4/d7wYExwFej3cHExYy+Fmv62N96v1lgsSGgrMK/BGGUplF7TdHlPxRYLrMUvwJh8Iq6RHoTVOm1y0XVZ1g5+Ltf0PIdJJwCPcY6vxNqJPTIaF9XU0ey+PKHja0iwXzkxwihSk2ytuHo8wfPBQ/4mrL0krV8bPkylm5JY9AO9t4PX54aVQJzN7l0ss4ZfAeXPWHJmDku0AvMs0FA0IJkwKtYmWxPovDN7Jrlbm2LNsIPX55j04JZ6h2sdJSUaIyUdQl29arWPKaOyR0yq/naw/7UB4ODib4epRycmFvHn8xNGe3jytO7VkhzPEfxr39SSDsbctiusEhiEKRNMznCW1yJ4vyBwAaHLaljStB2OmwNJtH8gsDjDITLZN6X0GvPQEXM9a07yRUihNrU0CTfmmCaCVkgCBVuJrtIYLJCVM5bVZtP9EpuvYTh2MHCIj0mbWlYphofVfaZCtg+S9BfYtit0o0DQSlZKzMXKrBabCnyda/6hdgbNbnp36XDcfqhpFvfBLkzQO5pU6x/pestncXPAE6KXAJVpRGgZrtsZUg14IYq4ujaVuyoV8TYurvsb3dR2ZJYfJkLz44BFDBynSS4po+PmA7Hx0O2K7dnNBuQUrt0RAslAxrmPN/NEWsgHdYeo+DlLkHr4+FHtsHeqXCcQd0XNOEwCsEBNSmkTnWnaH/kOWHNUFpSM+Cs++/FM5meXrJaaCmkKzTynB2G2fOFA7ELA2iF5TtLF4BUGwD21R903VpNU/k+61JgXuRh6wXalt0CKx2e2z5CamdOhIYILxBC+wmajm1oL4sbwffxNcOdPFaFjqHZj7Av45rTZVnvjse0xHQS5NAau6Km4Zpvxv8BrGCst5mXxi2DSEp5p85OtPb8/6mPYuIjtVnpaoq1kTxC34813SxfLe+tywr+B8ct25tRagu7imq3GrwB4kmvCQVrPiVhhy2ex3hf1nAci38EWLyVNh/tFOrIBAsf5+Etn+ZndptfAhR0upOntFVz9UfDnAJ7kAk4EzI+JXNF0j0o15EWshdJZ72DsoC4CSr6kPwRd8Z9b/obMsmpnaA4mJN0l2UAOF+DqbMO7AkYHXI7MaxGr6ifLChpyI25Ak/ilTE9KMYX7FcZg8rb/3IpjVPZUdsQolWfvLRiCx+xOF9UQkopPbwqELqW6DaaoHeVGCiNXNyZRIVtumBasbHOuUeckgySUNX9zZ8zwV2lPZ+DbjKLHBiCjXs9+NI7tqtj4FpxoxEzHogFoT+TaBnAVQnW7QlcC1EbXjHZnDMglBv6hgp1yJ7bMfAEj/s+UtQtpUM8VRmeeTWLzpzbo/WAGupb9ENkSva5pOQP/JKQYYhrPXOX85cg90evn9elVAWAkK5uybEMBjFIczcjhdoHD0+Iy6xzeLM/Snwba4bTo4WkmJ8rSOJ+K1+6Y2QaqtWKgZAOcs5tGEJ5edYb5py9RMeuH+mCwjD7DOS57TuITcatssXYejP2H+kkCL3wJ4J6AfzJmfXMMna/ZbvyWQ3i8TNPhfke9E4LzjYuq2UFTbvEd/ojz6oThBCdwajtGveCWqbPWNNxwAqc3J9b5Z0HZrQG1XTFZ519h4NuM1+F+orKzKMsLFN7j+L6JhqU21kqPrQvcDSfY+7KnRANkT+E1CZaGDbJRTrmwb66vx8/GPdME3U3HcdyLwP529dbgZvCEnyKjJTtE5sD69yFLz+RRhYVrA43QUM46sZIQgHHL85yH3mCx9bsFp5Olq/1eAfaX4G9Z/KYL+VWbDfTFIc319KLGgMKOlh9rfeg5f9QybSTuw+BuLD8sSpwZ+r8wUvu8vbGB1rz9cq0CtmBdOW0maF5qzm4NrdwUNA/A82jAXMuLwygUjtsauufI8umfgsDvlMqlcR/oCknefMHmuuYWnAoVZermw6N0xU+8noW3INxlj5tjRz2ceEFU9uByXTAnoFqHcQ4hOErnzd7c6vZZb1BwqrQ4Uztl1paLVys26FvgdrqdPd1FkMm0qr6S5onHSAxvLHiSm1jvTNt6caEbb0ghGWxFMV+xISCZEO6wvAOwb5hWN7xK8+3Txb4ZUOU7nQ91Jnl65K0J0YlFYqt1dz2WubzhuGWK57N4FBwumL2VQjKyDkjn7997BkKCXlRSgUTsfMR7+Gfsbu15HLchgVMFpev9klUSe9hkiLI02fZmvJ6MZY84UP7RLyDd+7ntf3mSU4cMDuXE+ZCARuDt59HLjTNlN36fm/56JSgIU4A8EhBnAGCaI0+8hgxONZVZAicjnv+iu/vRiFH3Lgvdz3nT93IvOdGgGpPS93QUPhFVEngqcLrHuvrNdJWKK+26c5dw7DkALqoFo/UL8jotQwWWtz2NPO1quMgS5HXn9vejBQGxuEK2H1tw4Co9n8Wn0CFeT81c1msJClKPeLn7R+h77T3CgyDLoe8eDhHTLvZ/g1MN29Im71OruLUL8zuH9K8vV+P+B53o6jf1vYDkAAAAAElFTkSuQmCC"
    }
  })])])]), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c('navigation'), _vm._v(" "), _c('div', {
    staticClass: "col-lg-5 col-md-8 col-sm-8 col-xs-6 d-flex align-items-center justify-content-end"
  }, [_c('div', {
    staticClass: "search-menu"
  }, [_c('a', {
    staticClass: "btn btn-free btn-search"
  }, [_c('svg', [_c('use', {
    attrs: {
      "xlink:href": "#search",
      "x": "0",
      "y": "0"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "search-block"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search),
      expression: "search"
    }],
    staticClass: "form-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.search)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.search = $event.target.value
      }, _vm.onChange]
    }
  }), _c('a', {
    staticClass: "clear-input"
  }, [_c('svg', [_c('use', {
    attrs: {
      "xlink:href": "#close",
      "x": "0",
      "y": "0"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "search-result"
  }, [_c('div', {
    staticClass: "result-list"
  }, _vm._l((_vm.blogs), function(blog) {
    return _c('div', {
      staticClass: "result-item d-flex flex-row"
    }, [_vm._m(1, true), _vm._v(" "), _c('div', {
      staticClass: "result-item__info d-flex flex-column justify-content-between"
    }, [_c('span', {
      staticClass: "result-item__name"
    }, [_vm._v(_vm._s(blog.title))]), _c('span', {
      staticClass: "result-item__desc"
    }, [_vm._v("Modern")])])])
  }))])]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-gold btn-wishlist js-modal-toggle",
    attrs: {
      "href": "#/favorites"
    }
  }, [_c('svg', [_c('use', {
    attrs: {
      "xlink:href": "#star",
      "x": "0",
      "y": "0"
    }
  })])]), _vm._v(" "), (_vm.isAuth) ? _c('user-menu') : _c('auth'), _vm._v(" "), _c('locale'), _vm._v(" "), _c('div', {
    attrs: {
      "id": "m-menu"
    }
  }, [_c('a', {
    staticClass: "btn btn-gold m-menu"
  }, [_c('div', {
    staticClass: "menu-icon"
  }, [_c('svg', [_c('use', {
    attrs: {
      "xlink:href": "#menu",
      "x": "0",
      "y": "0"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "menu-close"
  }, [_c('svg', [_c('use', {
    attrs: {
      "xlink:href": "#close",
      "x": "0",
      "y": "0"
    }
  })])])]), _vm._v(" "), _vm._m(2)])], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', [_vm._v("Flame"), _c('span', {
    staticClass: "header-sub"
  }, [_vm._v("place")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "result-item__img"
  }, [_c('div', {
    staticClass: "result-item__img_bg"
  }, [_c('img', {
    attrs: {
      "src": "img/items/3.jpg"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dropdown-list"
  }, [_c('div', {
    staticClass: "dropdown-item"
  }, [_c('a', {
    staticClass: "dropdown-item__link"
  }, [_c('span', [_vm._v("Catalog")])])]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-item"
  }, [_c('a', {
    staticClass: "dropdown-item__link"
  }, [_c('span', [_vm._v("Showrooms")])])]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-item"
  }, [_c('a', {
    staticClass: "dropdown-item__link"
  }, [_c('span', [_vm._v("Designers")])])]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-item"
  }, [_c('a', {
    staticClass: "dropdown-item__link"
  }, [_c('span', [_vm._v("Brands")])])]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-item"
  }, [_c('a', {
    staticClass: "dropdown-item__link"
  }, [_c('span', [_vm._v("News")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7f4bd595", module.exports)
  }
}

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "auth"
  }, [_c('button', {
    staticClass: "btn-auth",
    on: {
      "click": function($event) {
        _vm.show('login')
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('auth.login')))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn-auth",
    attrs: {
      "to": "/registration",
      "tag": "button"
    }
  }, [_vm._v(_vm._s(_vm.$t('auth.register')))]), _vm._v(" "), _c('login', {
    ref: "login",
    on: {
      "hide": _vm.hide
    }
  }), _vm._v(" "), _c('register-form-modal', {
    on: {
      "hide": _vm.hide
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-950be754", module.exports)
  }
}

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('app-header'), _vm._v(" "), _c('router-view'), _vm._v(" "), _c('app-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b512f42a", module.exports)
  }
}

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.user) ? _c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: (_vm.close),
      expression: "close"
    }],
    staticClass: "dropdown drp-acc d-flex align-items-center",
    on: {
      "click": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "prev", undefined, $event.key, undefined)) { return null; }
        return _vm.toggle($event)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatar ? _vm.user.avatar : '/storage/users/default_avatar.png',
      "alt": "avatar"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "user-avatar__badge"
  }, [_vm._v("7")]), _vm._v(" "), _c('span', {
    staticClass: "drp-acc__name"
  }, [_vm._v(_vm._s(_vm.user.first_name))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpen),
      expression: "isOpen"
    }],
    staticClass: "dropdown-list"
  }, [_c('div', {
    staticClass: "dropdown-item"
  }, [_c('a', {
    staticClass: "dropdown-item__link"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('menu.myProjects')))])])]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-item"
  }, [_c('router-link', {
    staticClass: "dropdown-item__link",
    attrs: {
      "to": "/pages/photos"
    }
  }, [_c('span', [_vm._v("\n                    " + _vm._s(_vm.$t('menu.myPage')) + "\n                ")])])], 1), _vm._v(" "), (_vm.isBrand) ? _c('div', {
    staticClass: "dropdown-item"
  }, [_c('router-link', {
    staticClass: "dropdown-item__link",
    attrs: {
      "to": _vm.route('catalog.tools')
    }
  }, [_c('span', [_vm._v("\n                    " + _vm._s(_vm.$t('menu.catalogTools')) + "\n                ")])])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dropdown-item"
  }, [_c('a', {
    staticClass: "dropdown-item__link"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('menu.messages')))]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-item__badge"
  }, [_vm._v("7")])])]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-item"
  }, [_c('a', {
    staticClass: "dropdown-item__link"
  }, [_c('router-link', {
    attrs: {
      "to": "/profile/",
      "tag": "span"
    }
  }, [_vm._v(_vm._s(_vm.$t('menu.account')))])], 1)]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "dropdown-item"
  }, [_c('a', {
    staticClass: "dropdown-item__link",
    on: {
      "click": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "prev", undefined, $event.key, undefined)) { return null; }
        return _vm.doLogout($event)
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('menu.logout')))])])])])]) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dropdown-item"
  }, [_c('div', {
    staticClass: "divider"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bf208c6c", module.exports)
  }
}

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(486);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("99e101e2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3eda382b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3eda382b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(488);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("93e3f916", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4cb09160\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register_form_modal.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4cb09160\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register_form_modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(489);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7a3b3281", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5e1971a3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5e1971a3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(494);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0414ad83", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7cfee99c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navigation.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7cfee99c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navigation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(495);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5bbb3b29", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7f4bd595\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Header.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7f4bd595\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(498);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4d7bce8e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-950be754\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auth.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-950be754\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auth.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(499);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a41cabca", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b512f42a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Default.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b512f42a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Default.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(500);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("07447387", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bf208c6c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./menu.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bf208c6c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./menu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});