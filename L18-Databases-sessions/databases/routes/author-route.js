import path from 'path';
import express from 'express';
import Person from '../model/person.js';
import Book from '../model/book.js';
import addAuthorAndBooks from '../utils/helper_functions/insertAuthor.js';
import { getAuthor, postAdd } from '../controller/authorController.js';

const router = express.Router();

router.post('/add', postAdd);
router.get('/get-author', getAuthor);


export default router;