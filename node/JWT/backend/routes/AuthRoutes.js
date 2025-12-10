import express from "express"
import {handleRegistration} from "../controllers/HandleRegistration.js"
import {handleLogin} from "../controllers/HandleLogin.js"
const router = express.Router();


router.post("/register",handleRegistration);
router.post("/login",handleLogin);