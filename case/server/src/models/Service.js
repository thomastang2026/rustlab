import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true},slug:{type:String,required:true,unique:true},description:{type:String,required:true},durationMinutes:{type:Number,required:true,min:15},price:{type:Number,required:true,min:0},active:{type:Boolean,default:true},displayOrder:{type:Number,default:0}},{timestamps:true});
export const Service=mongoose.model('Service',schema);
