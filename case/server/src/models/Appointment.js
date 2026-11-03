import mongoose from 'mongoose';
const schema=new mongoose.Schema({referenceCode:{type:String,required:true,unique:true,index:true},serviceId:{type:mongoose.Schema.Types.ObjectId,ref:'Service',required:true},customer:{fullName:{type:String,required:true},email:{type:String,required:true,index:true},phone:String},startAt:{type:Date,required:true,index:true},endAt:{type:Date,required:true,index:true},status:{type:String,enum:['Pending','Confirmed','Cancelled','Completed','NoShow'],default:'Pending',index:true},notes:{type:String,maxlength:500},idempotencyKey:{type:String,required:true,unique:true,index:true}},{timestamps:true});
schema.index({startAt:1,endAt:1,status:1});
export const Appointment=mongoose.model('Appointment',schema);
