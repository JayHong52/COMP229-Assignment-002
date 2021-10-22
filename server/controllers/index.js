"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayLogInPage = exports.DisplayContactUsPage = exports.DisplayServicePage = exports.DisplayProjectPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const utils_1 = require("../utils");
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayHomePage = DisplayHomePage;
;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayAboutPage = DisplayAboutPage;
;
function DisplayProjectPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'project', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayProjectPage = DisplayProjectPage;
;
function DisplayServicePage(req, res, next) {
    res.render('index', { title: 'Services', page: 'service', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayServicePage = DisplayServicePage;
;
function DisplayContactUsPage(req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayContactUsPage = DisplayContactUsPage;
;
function DisplayLogInPage(req, res, next) {
    res.render('index', { title: 'Log In', page: 'login', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayLogInPage = DisplayLogInPage;
;
//# sourceMappingURL=index.js.map