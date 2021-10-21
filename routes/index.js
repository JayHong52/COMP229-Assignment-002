"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', function (req, res, next) {
    res.render('contents/home', { title: 'Home' });
});
router.get('/home', function (req, res, next) {
    res.render('contents/home', { title: 'Home' });
});
router.get('/about', function (req, res, next) {
    res.render('contents/about', { title: 'About Us' });
});
router.get('/projects', function (req, res, next) {
    res.render('contents/project', { title: 'Projects' });
});
router.get('/services', function (req, res, next) {
    res.render('contents/service', { title: 'Services' });
});
router.get('/contact', function (req, res, next) {
    res.render('contents/contact', { title: 'Contact Us' });
});
router.get('/login', function (req, res, next) {
    res.render('contents/login', { title: 'Log In' });
});
router.get('/businesscontacts', function (req, res, next) {
    res.render('contents/businesscontacts', { title: 'Business Contacts' });
});
exports.default = router;
//# sourceMappingURL=index.js.map