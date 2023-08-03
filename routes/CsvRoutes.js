import express from "express";
const router = express.Router();
import controller from "../controllers/CsvController.js";

router.get("/", controller.getCsv);
router.post("/", controller.createCsv);

export default router;
