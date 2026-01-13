

import { Router } from "express";
import { logController } from "./log.controller";
import auth from "../../middleware/auth";
import { Role } from "../../generated/prisma/enums";


const logRoute = Router()

logRoute.post('/',auth(),logController.createUsageLog)
logRoute.get('/',logController.getUsageLog)

export default logRoute