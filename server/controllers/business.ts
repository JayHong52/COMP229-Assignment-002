/*=============================================
  FileName: controllers/business.ts
  ProjectName: COMP229-005, Assignment #2
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-22
  ============================================*/

import express from 'express';
import BusinessModel from '../models/business';
import { UserDisplayName } from '../utils';

// ===========================
//   Business-list : DISPLAY 
// ===========================
export function DisplayBusinessListPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    BusinessModel.find(
        function (err, businessCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index-sub', {title: 'Business Contact List', page: 'business/business-list', business: businessCollection, displayName: UserDisplayName(req)})
        }
    ).sort('name'); 
};

// ===========================
//   Business-edit : DISPLAY
// ===========================
export function DisplayBusinessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    BusinessModel.findById(id, {}, {}, (err, businessListItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index-sub', { title: "Business Contact Update", page: "business/business-edit", item: businessListItemToEdit, displayName: UserDisplayName(req)})
    })
};

// ===========================
//   Business-edit : PROCESS
// ===========================
export function ProcessBusinessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    let updatedItem = new BusinessModel({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "remarks": req.body.remarks
    });
    BusinessModel.updateOne({ _id: id }, updatedItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business/list');
    })
}

// ====================================
//   Business-edit : Create - DISPLAY
// ====================================
export function DisplayBusinessAddPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index-sub', { title: 'Add Business Contact', page: 'business/business-edit', item: '', displayName: UserDisplayName(req) });
}

// ====================================
//   Business-edit : Create - PROCESS 
// ====================================
export function ProcessBusinessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {

    let newContact = new BusinessModel({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "remarks": req.body.remarks
    });

    BusinessModel.create(newContact, (err: any) => {
        if (err) {
            console.error(err);
            res.end(err);
        };
        res.redirect('/business/list');
    }) 
}

// ====================================
//   Business-edit : Delete - PROCESS 
// ====================================
export function ProcessBusinessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    BusinessModel.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business/list');
    })
}