"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const business_1 = require("../controllers/business");
const router = express_1.default.Router();
router.get('/list', business_1.DisplayBusinessListPage);
exports.default = router;
//# sourceMappingURL=business.js.map