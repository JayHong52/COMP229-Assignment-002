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