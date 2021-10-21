"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBusinessListPage = void 0;
const business_1 = __importDefault(require("../models/business"));
function DisplayBusinessListPage(req, res, next) {
    business_1.default.find(function (err, businessCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('contents/business/business-list', { title: 'Business Contact List', page: 'business/business-list', business: businessCollection });
    });
}
exports.DisplayBusinessListPage = DisplayBusinessListPage;
;
//# sourceMappingURL=business.js.map