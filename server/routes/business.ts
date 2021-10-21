import express from 'express';
import { DisplayBusinessListPage } from '../controllers/business';
const router = express.Router();


/*

http://server-url/contact/list
http://server-url/contact/create
http://server-url/contact/edit:id
http://server-url/contact/delete:id

*/


// Get Display Business Contact List View

router.get('/list', DisplayBusinessListPage);

// Get Display Business Contact List Edit

export default router;
