import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createUsageLog: RequestHandler=async(req,res)=>{
   try{
     const payload = req.body

    const log = await prisma.usageLog.create({
        data:{...payload}
    })
     res.send({message:"Usage log Added", data:log})
   }
   catch(error){
    console.log(error)
   }
}

const getUsageLog:RequestHandler=async(req,res)=>{
    try{
    const log = await prisma.usageLog.findMany({
        include:{user:true, equipment:true}
    })
    res.send({message:"Usage log Added", data:log})
    }
    catch(error){
        console.log(error)
    }
}

export const logController={
createUsageLog,
getUsageLog
}