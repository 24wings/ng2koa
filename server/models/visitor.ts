import mongoose = require('mongoose');

var visitorSchema =new mongoose.Schema({
    name:String,
    gender:String,
    age:Number,
    phone:String,
    fromMsgPlace:String,
    job:String,
    comment:String,
    createDt:{type:Date,default:Date.now}
});

export interface Visitor{
    name:string;
    age:number;
    phone:string;
    fromMsgPlace:string;
    job:string;
    comment:String;
    createDt:Date;

}

export var visitorModel = mongoose.model('visitor',visitorSchema);
