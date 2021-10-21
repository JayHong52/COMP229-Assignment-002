"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayLogInPage = exports.DisplayContactUsPage = exports.DisplayServicePage = exports.DisplayProjectPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('contents/home', { title: 'Home' });
}
exports.DisplayHomePage = DisplayHomePage;
;
function DisplayAboutPage(req, res, next) {
    res.render('contents/about', { title: 'About Us' });
}
exports.DisplayAboutPage = DisplayAboutPage;
;
function DisplayProjectPage(req, res, next) {
    res.render('contents/project', { title: 'Projects' });
}
exports.DisplayProjectPage = DisplayProjectPage;
;
function DisplayServicePage(req, res, next) {
    res.render('contents/service', { title: 'Services' });
}
exports.DisplayServicePage = DisplayServicePage;
;
function DisplayContactUsPage(req, res, next) {
    res.render('contents/contact', { title: 'Contact Us' });
}
exports.DisplayContactUsPage = DisplayContactUsPage;
;
function DisplayLogInPage(req, res, next) {
    res.render('contents/login', { title: 'Log In' });
}
exports.DisplayLogInPage = DisplayLogInPage;
;
//# sourceMappingURL=index.js.map