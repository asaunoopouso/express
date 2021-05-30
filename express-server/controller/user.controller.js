/**
 * Created by Administrator on 2017/10/17.
 */
var mongoose = require('mongoose');
const DateModle = require('../models/user.model');//User模型

exports.create = function(req,res,next){
    const dataModle = new DateModle(req.body);
    dataModle.save()
        .then(data=>{
            res.json(data);
        })
    // user.save(function (err) {
    //     if(err){
    //         console.log(err);
    //     }else {
    //         console.log('successful');
    //     }
    // })
};
exports.get = function(req,res,next){
    var id = req.params.id;
    DateModle.findById(id, function (err, data) {
        res.json(data);
    })
}
exports.update = function(req,res,next){
    //记住此处返回来的值是修改之前的值
    var id = req.params.id;
    DateModle.findByIdAndUpdate(id, {$set: req.body}, {new:false})
        .then(data=>{
            res.json(data);
    })
}
exports.remove =function (req,res,next) {
    const id = req.params.id;
    DateModle.findByIdAndRemove(id,function(err,data){
        res.json(data);
    })
}
exports.list = function(req,res,next){
    var page = (req.body.page) ? req.body.page : 1;
    var rows = (req.body.rows) ? req.body.rows : 5;

    var queryCondition = {};
    if(req.body.name && req.body.name.trim().length>0){
        name = req.body.name;
        queryCondition = {
            "name" : new RegExp(name, 'i')
        }
    }
    DateModle.paginate(queryCondition, { page: parseInt(page), limit: parseInt(rows) }, function(err, result) {
        result.rows = result.docs;
        delete result.docs;
        res.json(result)
    });

}


