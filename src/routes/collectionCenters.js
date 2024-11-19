const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const centerController = require('../controllers/collectionCenterController');

router.post('/', auth, centerController.createCenter);
router.get('/nearest', centerController.getNearestCenters);
router.get('/', centerController.getAllCenters);

module.exports = router; 