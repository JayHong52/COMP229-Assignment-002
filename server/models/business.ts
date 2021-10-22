/*=============================================
  FileName: models/business.ts
  ProjectName: COMP229-005, Assignment #2
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-22
  ============================================*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    remarks: String
},
{
    collection: "businessContacts"
});

const Model = mongoose.model("businessContacts", BusinessSchema)

export default Model