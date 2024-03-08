import { CreateService } from "controllers/controllerService";
import express from "express";

const router = express.Router();

router.post("/service", CreateService);

module.exports = router;
