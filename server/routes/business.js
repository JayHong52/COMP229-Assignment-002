"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const business_1 = __importDefault(require("../models/business"));
router.get('/', (req, res, next) => {
    business_1.default.find((err, businessList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('contents/business', { title: 'Business Contacts List', businessList: businessList });
        }
        ;
    });
});
exports.default = router;
//# sourceMappingURL=business.js.map