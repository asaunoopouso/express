/**
 * Created by Administrator on 2017/10/17.
 */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var schema = new Schema({
    name:String,
    password:String,
    date: { type: Date, default: Date.now }
})

schema.plugin(mongoosePaginate);
var News=mongoose.model('News',schema,'news')
module.exports=News;