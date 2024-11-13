import express from 'express';
import {
    postAdd,
    postUpdate
} from '../controller/userController.js';

const router = express.Router();

router.post('/add', postAdd);
router.post('/update', postUpdate);
router.get('/delete', getDelete);
router.get('/all', getAll);

export default router;