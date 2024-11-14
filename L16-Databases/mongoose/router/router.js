import express from 'express';
import {
    getAllUser,
    getDelete,
    postAdd,
    postUpdate
} from '../controller/userController.js';

const router = express.Router();

router.post('/add', postAdd);
router.post('/update', postUpdate);
router.get('/delete', getDelete);
router.get('/all-user', getAllUser);

export default router;