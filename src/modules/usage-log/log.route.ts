

import { Router } from "express";
import { logController } from "./log.controller";


const logRoute = Router()

logRoute.post('/',logController.createUsageLog)
logRoute.get('/',logController.getUsageLog)

export default logRoute