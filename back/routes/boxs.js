const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/boxs');

router.post('/allboxs', productCtrl.getAllBoxs);
router.post('/box', productCtrl.getOneBox);



module.exports = router;