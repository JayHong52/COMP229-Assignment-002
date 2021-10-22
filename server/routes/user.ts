import { Router } from "express";
import { DisplayLogInPage, DisplayRegisterPage, ProcessLogInPage, ProcessLogout, ProcessRegisterPage } from "../controllers/user";
import passport from '../middlewears/auth';
 
const router = Router();

router.get('/login', DisplayLogInPage);
router.post('/login', passport.authenticate('login'), ProcessLogInPage);
router.get('/register', DisplayRegisterPage);
router.post('/register', ProcessRegisterPage);
router.get('/logout', ProcessLogout);

export default router;