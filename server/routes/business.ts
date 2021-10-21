import express from 'express';
const router = express.Router();

// Contact to Business Contacts Model
import mongoose from 'mongoose';
import business from '../models/business';

router.get('/', (req, res, next) => {
    business.find((err, businessList) => {
        if (err)
        {
            return console.error(err);
        }
        else 
        {
            res.render('contents/business', {title: 'Business Contacts List', businessList: businessList})            
        };
    });
});

export default router;
