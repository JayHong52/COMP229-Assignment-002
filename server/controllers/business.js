"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessBusinessDeletePage = exports.ProcessBusinessAddPage = exports.DisplayBusinessAddPage = exports.ProcessBusinessEditPage = exports.DisplayBusinessEditPage = exports.DisplayBusinessListPage = void 0;
const business_1 = __importDefault(require("../models/business"));
const utils_1 = require("../utils");
function DisplayBusinessListPage(req, res, next) {
    business_1.default.find(function (err, businessCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact List', page: 'business/business-list', business: businessCollection, displayName: (0, utils_1.UserDisplayName)(req) });
    }).sort('name');
}
exports.DisplayBusinessListPage = DisplayBusinessListPage;
;
function DisplayBusinessEditPage(req, res, next) {
    let id = req.params.id;
    business_1.default.findById(id, {}, {}, (err, businessListItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log(businessListItemToEdit);
        res.render('index', { title: "Business Contact Update", page: "business/business-edit", item: businessListItemToEdit, displayName: (0, utils_1.UserDisplayName)(req) });
    });
}
exports.DisplayBusinessEditPage = DisplayBusinessEditPage;
;
function ProcessBusinessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedItem = new business_1.default({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "remarks": req.body.remarks
    });
    business_1.default.updateOne({ _id: id }, updatedItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business/list');
    });
}
exports.ProcessBusinessEditPage = ProcessBusinessEditPage;
function DisplayBusinessAddPage(req, res, next) {
    res.render('index', { title: 'Add Business Contact', page: 'business/business-edit', item: '', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayBusinessAddPage = DisplayBusinessAddPage;
function ProcessBusinessAddPage(req, res, next) {
    let newContact = new business_1.default({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "remarks": req.body.remarks
    });
    business_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        res.redirect('/business/list');
    });
}
exports.ProcessBusinessAddPage = ProcessBusinessAddPage;
function ProcessBusinessDeletePage(req, res, next) {
    let id = req.params.id;
    business_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business/list');
    });
}
exports.ProcessBusinessDeletePage = ProcessBusinessDeletePage;
//# sourceMappingURL=business.js.map