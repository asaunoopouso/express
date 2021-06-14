/**
 * Created by Administrator on 2017/10/18.
 */
var mongoose = require('mongoose');
const DataModel = require('../models/classify.model');

exports.create = function(req,res,next){
    const dataModel = new DataModel(req.body);
    console.log(req.body);
    dataModel.save()
        .then(data=>{
        res.json(data);
    })
}
exports.get = function(req,res,next){
    var id = req.params.id;
    DateModle.findById(id, function (err, data) {
        res.json(data);
    })
}
function reverseTree(data, pid){
    var result = [],
        temp;
    var data = JSON.parse(JSON.stringify(data));  // 将一个DataModel的object转成了JS的Object
    for(var i in data){
        if(data[i].parentId == pid){
            result.push(data[i]);
            temp = reverseTree(data, data[i]._id);
            if(temp.length>0){
                data[i].children = temp;
            }
        }
    }
    return result;
}

exports.list = function(req,res,next){
    DataModel.find({},function(err,data){
        var rpTree = reverseTree(data, null);
        res.json(rpTree);
    })

}
