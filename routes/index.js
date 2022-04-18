var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.home);

/* GET Gallery page. */
router.get('/gallery', indexController.gallery);

/*Get design page */
router.get('/design', indexController.design);

/* GET About page. */
router.get('/about', indexController.about);

/* GET Contact page. */
router.get('/contact', indexController.contact);


module.exports = router;
