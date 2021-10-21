import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    remarks: String
},
{
    collection: 'business'
});

const Model = mongoose.model("business", BusinessSchema)

export default Model