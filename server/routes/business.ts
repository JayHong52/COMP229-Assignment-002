/*=============================================
  FileName: routes/business.ts
  ProjectName: COMP229-005, Assignment #2
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-22
  ============================================*/

import express from 'express';
import { DisplayBusinessAddPage, DisplayBusinessEditPage, DisplayBusinessListPage, ProcessBusinessAddPage, ProcessBusinessDeletePage, ProcessBusinessEditPage } from '../controllers/business';
const router = express.Router();

// Business-list : DISPLAY 
router.get('/list', DisplayBusinessListPage);

// Business-edit : DISPLAY
router.get('/edit/:id', DisplayBusinessEditPage);

// Business-edit : PROCESS
router.post('/edit/:id', ProcessBusinessEditPage);
  
// Business-edit : Create - DISPLAY
router.get('/add', DisplayBusinessAddPage);

// Business-edit : Create - PROCESS 
router.post('/add', ProcessBusinessAddPage);

// Business-edit : Delete - PROCESS 
router.get('/delete/:id', ProcessBusinessDeletePage);

export default router;

