import User from '../models/User.js';

const postAdd = async (req, res) => {
    const { name, username, marks } = req.body;
    if (!name || !username) {
        return res.status(400).json({
            msg: "Please enter name, username and marks to add user"
        })
    }

    try {
        let user = await User.create({
            name,
            username,
            marks: marks || -1
        });

        res.status(200).json({
            msg: "User created successfully",
            user
        })

    } catch (error) {
        res.status(500).json({
            msg: "Internal server error, Unable to create user"
        })
    }
}


const postUpdate = async (req, res) => {
    const { name, username, marks } = req.body;

    if (!username) {
        return res.status(400).json({
            msg: "You didnot provide username to update"
        })
    }

    try {
        let user = await User.findOne({
            username
        })

        if (!user) {
            return res.status(400).json({
                msg: "Incorrect username, Try again!"
            })
        }

        user = await User.updateOne({
            username
        },
            {
                name: name || user.name,
                marks: +marks || user.marks
            })
        // console.log("Updated User", user);
        res.status(200).json({
            msg: "User updated successfully",
            user
        })

    } catch (error) {
        res.status(500).json({
            msg: "Internal server error, Unable to update user",
            error
        })
    }
}


const getDelete = async (req, res) => {
    const { username } = req.query;

    if (!username) {
        return res.status(400).json({
            msg: "You didnot provide username to delete"
        })
    }

    try {
        let user = await User.findOne({
            username
        })

        if (!user) {
            return res.status(400).json({
                msg: "Unable to delete incorrect username, Try again!"
            })
        }

        await User.deleteOne({
            username
        })

        res.status(200).json({
            msg: "User deleted successfully",
            user
        })

    } catch (error) {
        res.status(500).json({
            msg: "Internal server error, Unable to delete user",
            error
        })
    }
}

const getAllUser = async (req, res) => {
    try {
        let users = await User.find();

        res.status(200).json({
            msg: "User fetched successfully",
            users
        })

    } catch (error) {
        res.status(500).json({
            msg: "Internal server error, Unable to find users data",
            error
        })
    }
}

export { postAdd, postUpdate, getDelete, getAllUser };