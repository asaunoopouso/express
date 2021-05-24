/**
 * Created by Administrator on 2017/10/17.
 */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:String,
    password:String,
    date: { type: Date, default: Date.now }
})

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User',UserSchema,'user');