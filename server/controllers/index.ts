import express from 'express';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('contents/home', { title: 'Home' });
};

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('contents/about', { title: 'About Us' });
};

export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('contents/project', { title: 'Projects' });
};

export function DisplayServicePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('contents/service', { title: 'Services' });
};

export function DisplayContactUsPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('contents/contact', { title: 'Contact Us' });
};

export function DisplayLogInPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('contents/login', { title: 'Log In' });
};

