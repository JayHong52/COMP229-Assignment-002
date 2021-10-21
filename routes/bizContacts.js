"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const bizContacts_1 = __importDefault(require("../models/bizContacts"));
router.get('/', (req, res, next) => {
    bizContacts_1.default.find((err, bizContactsList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('contents/businesscontacts', { title: 'Business Contacts List', BizContactsList: bizContactsList });
        }
        ;
    });
});
exports.default = router;
//# sourceMappingURL=bizContacts.js.map