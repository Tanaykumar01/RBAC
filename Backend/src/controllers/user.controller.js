import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser = async (req,res) => {
    try {
        const { username , password , role } = req.body;
        if(!username || !password || !role){
            throw new ApiError(400 , "please provide all the fields");
        }

        const existedUser = await User.findOne({
            username
        })
        if (existedUser) {
            throw new ApiError(401, "User already exists");
        }

        const user = await User.create({
            username : username.toLowerCase(),
            password,
            role
        })

        const UserResponse = await User.findById(user._id).select("-password");

        return res.status(201).json(
            new ApiResponse(201 , UserResponse , "User registered successfully")
        )

    }
    catch (error) {
        console.error("error :- ", error);
        res.status(500).json({message : "Internal Server Error"});
    }
}

export { registerUser };