/*=============================================
  FileName: /routes/users.js
  ProjectName: COMP229-005, Assignment #1
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-02
  ============================================*/

import express from 'express';
const router = express.Router();

// Get Users Listing
router.get('/', function(req, res, next) {
  res.send('Placeholder'); 
});

export default router;
