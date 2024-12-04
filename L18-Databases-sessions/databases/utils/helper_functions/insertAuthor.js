import Book from "../../model/book.js";
import Person from "../../model/person.js";

export default function addAuthorAndBooks(name, age, books) {
    return new Promise(async (resolve, reject) => {
        try {
            let author = await Person.findOne({
                name
            })

            if (!author) {
                // 1. Create an author first
                author = await Person.create({
                    name,
                    age: +age
                })
                // console.log(author)
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
            resolve(author)
        } catch (error) {
            reject({
                msg: "Author couldnot be added",
                error: error.message,
                status: 500
            })
        }
    })
}