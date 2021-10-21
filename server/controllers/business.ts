import express from 'express';
import BusinessModel from '../models/business';

export function DisplayBusinessListPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    BusinessModel.find(
        
        function (err, businessCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        //console.log(businessCollection);

        res.render('contents/business/business-list', {title: 'Business Contact List', page: 'business/business-list', business: businessCollection})
        }
    )
};