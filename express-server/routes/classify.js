/**
 * Created by Administrator on 2017/10/18.
 */
var express = require('express');
var router = express.Router();

var dataCtrl = require('../controller/classify.controller');

router.post('/data',dataCtrl.create);
router.post('/data',dataCtrl.create);
router.get('/list',dataCtrl.list);

module.exports = router;