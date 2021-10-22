/*=============================================
  FileName: routes/user.ts
  ProjectName: COMP229-005, Assignment #2
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-22
  ============================================*/

import { Router } from "express";
import { DisplayLogInPage, DisplayRegisterPage, ProcessLogInPage, ProcessLogout, ProcessRegisterPage } from "../controllers/user";
import passport from "../middlewares/auth";

const router = Router();

router.get('/login', DisplayLogInPage);
router.post('/login', passport.authenticate('login'), ProcessLogInPage);
router.get('/register', DisplayRegisterPage);
router.post('/register', ProcessRegisterPage);
router.get('/logout', ProcessLogout);

export default router;