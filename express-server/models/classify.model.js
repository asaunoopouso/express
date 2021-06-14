/**
 * Created by Administrator on 2017/10/18.
 */
var mongoose = require('mongoose');
var materializedPlugin = require('mongoose-materialized');

var Schema = mongoose.Schema;

var schema = new Schema({
    text:String
})

schema.plugin(materializedPlugin);
var Classify=mongoose.model('Classify',schema,'classify')
module.exports=Classify;
