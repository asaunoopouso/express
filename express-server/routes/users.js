var express = require('express');
var router = express.Router();

var dataCtrl = require('../controller/user.controller');

/* GET users listing. */
router.post('/data',dataCtrl.create);
router.get('/data/:id',dataCtrl.get);
router.post('/data/:id',dataCtrl.update);
router.delete('/data/:id',dataCtrl.remove);
router.post('/list',dataCtrl.list);

module.exports = router;
