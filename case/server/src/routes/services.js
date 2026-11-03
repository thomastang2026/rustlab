import {Router} from 'express';import {Service} from '../models/Service.js';
export const servicesRouter=Router().get('/',async(req,res,next)=>{try{res.json({data:await Service.find({active:true}).sort({displayOrder:1}).lean()})}catch(e){next(e)}});
