import { NextFunction, Request, Response } from "express";
import passport from "passport";
import { UserDisplayName } from "../utils";


// =======================
//   DISPLAY: Login Page
// =======================
export async function DisplayLogInPage(req: Request, res: Response) {
    if (!req.user) {
        return res.render('index', { title: 'Login', page: 'auth/login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) })
    }
    return res.redirect('/business/list');
}
export function ProcessLogInPage(req: Request, res: Response, next: NextFunction) {
    return res.redirect('/business/list')
}

// ==========================
//   DISPLAY: Register Page
// ==========================
export async function DisplayRegisterPage(req: Request, res: Response, next: NextFunction) {
    if (!req.user) {
        return res.render('index', { title: 'Register', page: 'auth/register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req) })
    }
    return res.redirect('/business/list');
}

// ==========================
//   PROCESS: Register Page
// ==========================
export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('signup', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.render('index', { title: 'Register', page: 'auth/register', messages: req.flash('registerMessage', 'User Already Exists'), displayName: UserDisplayName(req) })
        }

        return res.redirect('/auth/login');
    })
        (req, res, next);
}

// ==========================
//   PROCESS: Logout Page
// ==========================
export function ProcessLogout(req: Request, res: Response) {
    req.session.destroy((err) => {
        if (err) {
            return err;
        }
        res.redirect('/auth/login');
    })
}