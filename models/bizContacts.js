"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let bizContactsModel = new mongoose_1.default.Schema({
    name: String,
    contactNumber: String,
    contactEmail: String,
    remarks: String
}, {
    collection: 'bizContacts'
});
exports.default = mongoose_1.default.model('bizContacts', bizContactsModel);
//# sourceMappingURL=bizContacts.js.map