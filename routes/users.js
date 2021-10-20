/*=============================================
  FileName: /routes/users.js
  ProjectName: COMP229-005, Assignment #1
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-02
  ============================================*/

var express = require('express');
var router = express.Router();

// Get Users Listing
router.get('/', function(req, res, next) {
  res.send('Placeholder'); 
});

module.exports = router;
