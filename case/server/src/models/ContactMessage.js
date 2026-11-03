import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true},email:{type:String,required:true},phone:String,subject:{type:String,required:true},message:{type:String,required:true,maxlength:2000}},{timestamps:true});
export const ContactMessage=mongoose.model('ContactMessage',schema);
