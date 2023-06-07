const userModel = require('../models/userModel');

//  REGISTER
exports.postRegister = async (req, res, next) => {
    try {
        const { name, email, number, password } = req.body;
        const user = new userModel({ name, email, number, password });

        const userRegister = await user.save();
        if (userRegister) {
            res.status(200).json({
                success: true,
                message: "Register Successessfully",
            });
        }
        else {
            res.status(400).json({
                success: false,
                message: "Register Not Successessfully",
            });
        }
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: "Something went wrong",
            result: {
                error: "Failed with error : ", error
            }
        });
    }
}

//  LOGIN
exports.postLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });
        if (user) {
            res.status(200).json({
                success: true,
                message: "Login Successessfully",
            });
        }
        else {
            res.status(401).json({
                success: false,
                message: "Login Failed",
            });
        }
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: "Something went wrong",
            result: {
                error: "Failed with error : ", error,
            }
        });
    }
}

//  GET USER
exports.getUser = async (req, res, next) => {
    console.log("GET USER")
    try {
        const userGet = await userModel.find();
        if (userGet) {
            res.status(200).json({
                success: true,
                message: "User Found",
                data: userGet
            });
        }
        else {
            res.status(401).json({
                success: false,
                message: "User not found",
            });
        }
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: "Something went wrong",
            result: {
                error: "Failed with error : ", error,
            }
        });
    }
}

//  PATCH USER
exports.patchUser = async (req, res, next) => {
    try {
        const userEdit = await userModel.findByIdAndUpdate(req.params.id, req.body);
        if (userEdit) {
            res.status(200).json({
                success: true,
                message: "User Updated"
            });
        }
        else {
            res.status(401).json({
                success: false,
                message: "User not updated",
            });
        }
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: "Something went wrong",
            result: {
                error: "Failed with error : ", error,
            }
        });
    }
}

//  DELETE USER
exports.deleteUser = async (req, res, next) => {
    try {
        const userDelete = await userModel.findByIdAndDelete(req.params.id);
        if (userDelete) {
            res.status(200).json({
                success: true,
                message: "User Delete"
            });
        }
        else {
            res.status(401).json({
                success: false,
                message: "User not deleted",
            });
        }
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: "Something went wrong",
            result: {
                error: "Failed with error : ", error,
            }
        });
    }
}