import express from 'express';
import { 
    getRead, 
    getReadRange, 
    getUpdate, 
    postAdd 
} from '../controller/studentController.js';

const router = express.Router();

router.post('/add', postAdd);
router.get('/read', getRead);
router.get('/read-range', getReadRange);
router.get('/update', getUpdate);

export default router;