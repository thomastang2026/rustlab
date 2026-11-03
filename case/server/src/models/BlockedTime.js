import mongoose from 'mongoose';
const schema=new mongoose.Schema({startAt:{type:Date,required:true,index:true},endAt:{type:Date,required:true,index:true},reason:String,active:{type:Boolean,default:true}},{timestamps:true});
export const BlockedTime=mongoose.model('BlockedTime',schema);
