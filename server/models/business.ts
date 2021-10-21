import mongoose from 'mongoose';

let businessModel = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    remarks: String
},
{
    collection: 'business'
});

export default mongoose.model('business', businessModel);