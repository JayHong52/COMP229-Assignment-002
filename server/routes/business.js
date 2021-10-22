"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const business_1 = require("../controllers/business");
const router = express_1.default.Router();
router.get('/list', business_1.DisplayBusinessListPage);
router.get('/edit/:id', business_1.DisplayBusinessEditPage);
router.post('/edit/:id', business_1.ProcessBusinessEditPage);
router.get('/add', business_1.DisplayBusinessAddPage);
router.post('/add', business_1.ProcessBusinessAddPage);
router.get('/delete/:id', business_1.ProcessBusinessDeletePage);
exports.default = router;
//# sourceMappingURL=business.js.map