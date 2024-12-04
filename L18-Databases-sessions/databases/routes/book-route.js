import path from 'path';
import express from 'express';
import insertBooks from '../utils/helper_functions/insertBooks.js';
import Book from '../model/book.js';
const router = express.Router();

router.post('/add-books', async (req, res, next) => {
    const { name, books } = req.body;
    if (!name || !books) {
        return res.status(400).json({
            msg: "Please provide both author name and books to add"
        });
    }

    try {
        let data = await insertBooks(name, books);
        res.status(200).json({
            msg: "Books addedd successfully",
            data
        })
    } catch (error) {
        reject({
            msg: "Books couldnot be added",
            error: error.message,
            status: 500
        })
    }

});

router.get('/book-detail', async (req, res, next) => {
    const { name } = req.query;
    if(!name) return res.status(400).json({
        msg:"Please provide name to search"
    })

    try {
        let book = await Book.find({
            name
        }).populate('author_id').exec();
        res.status(200).json({
            msg:"Book fetched successfully",
            data: book
        })
    } catch (error) {
        res.status(500).json({
            msg:"Book fetching failed",
            error:error.message
        })
    }

});

export default router;