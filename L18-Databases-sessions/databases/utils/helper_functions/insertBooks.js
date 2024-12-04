import Book from "../../model/book.js";
import Person from "../../model/person.js";

export default function insertBooks(name, books) {
    return new Promise(async (resolve, reject) => {
        try {
            let author = await Person.findOne({
                name
            })

            if (!author) {
                return res.status(400).json({
                    msg: "Author doesnot exist, try with existing author"
                })
            }
            books = books.map((b) => {
                return {
                    ...b,
                    author_id: author.id
                }
            })

            let books_data = await Book.insertMany(books);

            // console.log(books_data);
            let newBook_ids = books_data.map(d => d._id);
            // console.log(newBook_ids);
            author.book_ids = [...newBook_ids, ...author.book_ids];
            await author.save();
            
            resolve({ author, books: books_data });
        } catch (error) {
            reject({
                msg: "Author couldnot be added",
                error: error.message,
                status: 500
            })
        }
    })
}