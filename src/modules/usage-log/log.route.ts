
import { Router } from "express";
import { logController } from "./log.controller";
import auth from "../../middleware/auth";

const logRoute = Router()

logRoute.post('/',auth(),logController.createUsageLog)
logRoute.get('/',logController.getUsageLog)
logRoute.patch('/:id',auth(),logController.updateUsageLog)

export default logRoute