/*=============================================
  FileName: /routes/index.js
  ProjectName: COMP229-005, Assignment #1
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-02
  ============================================*/

var express = require('express');
var router = express.Router();

// Get Home Page  
router.get('/', function(req, res, next) {
  res.render('contents/home', {title: 'Home'});
});

// Get Home Page (/home)
router.get('/home', function(req, res, next) {
  res.render('contents/home', {title: 'Home'});
});

// Get About Us Page
router.get('/about', function(req, res, next) {
  res.render('contents/about', {title: 'About Us'});
});

// Get Projects Page
router.get('/projects', function(req, res, next) {
  res.render('contents/project', {title: 'Projects'}); 
});

// Get Service Page 
router.get('/services', function(req, res, next) {
  res.render('contents/service', {title: 'Services'});
}); 

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contents/contact', {title: 'Contact Us'});
});

module.exports = router;
