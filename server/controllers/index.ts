import express from 'express';
import { UserDisplayName } from '../utils';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
};

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'About Us', page: 'about', displayName: UserDisplayName(req) });
};

export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Projects', page: 'project', displayName: UserDisplayName(req) });
};

export function DisplayServicePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Services', page: 'service', displayName: UserDisplayName(req) });
};

export function DisplayContactUsPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: UserDisplayName(req) });
};

export function DisplayLogInPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Log In', page: 'login', displayName: UserDisplayName(req) });
};

