import express from "express";
import {generateURLshortID} from "../controllers/urlController.js"
const router = express.Router();

console.log("entered routes module")
router.post("/",generateURLshortID);

export default router