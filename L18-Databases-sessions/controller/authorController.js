import Person from "../model/person.js";
import addAuthorAndBooks from "../utils/helper_functions/insertAuthor.js";

let postAdd = async (req, res, next) => {
    let { name, age, books } = req.body;
    books = JSON.parse(books);
    console.log(name, age, books)
    if (!name || !age) {
        return res.status(400).json({
            msg: "Please provide both name and age"
        })
    }

    try {
        // Check whether author already present hai ya nahi
        let author = await addAuthorAndBooks(name, age, books);

        res.status(200).json({
            msg: "Author added successfully",
            author
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error occurred while inserting an author",
            error: error.message
        });
    }
}

let getAuthor = async (req, res, next) => {
    const { name } = req.query;

    let author = await Person.findOne({
        name
    }).populate('book_ids')
        .exec();

    res.send(author)
}


export {
    postAdd,
    getAuthor
}