import mongoose from 'mongoose';

let bizContactsModel = new mongoose.Schema({
    name: String,
    contactNumber: String,
    contactEmail: String,
    remarks: String
},
{
    collection: 'bizContacts'
});

export default mongoose.model('bizContacts', bizContactsModel);