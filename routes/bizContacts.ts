import express from 'express';
const router = express.Router();

// Contact to BizContacts Model
import mongoose from 'mongoose';
import bizContacts from '../models/bizContacts';

router.get('/', (req, res, next) => {
    bizContacts.find((err, bizContactsList) => {
        if (err)
        {
            return console.error(err);
        }
        else 
        {
            res.render('contents/businesscontacts', {title: 'Business Contacts List', BizContactsList: bizContactsList})            
        };
    });
});

export default router;
