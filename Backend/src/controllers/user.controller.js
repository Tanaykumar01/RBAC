import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefereshTokens = async (userId) =>{
    try{
        const user = await User.findById(userId)
        const accessToken = await user.generateAccessToken()
        const refreshToken = await user.generateRefreshToken()

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave : false});

        return {accessToken , refreshToken};
    } catch(error){
        throw new ApiError(500,"Error while generating tokens");
    }
}


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
        res.status(400).json({message : error.message});
    }
}

const loginUser = async (req,res) => {
    try {
        const { username , password } = req.body;
        if(!username){
            throw new ApiError(400 , "please provide all the fields");
        }

        const user = await User.findOne({
            username
        })
        
        if(!user){
            throw new ApiError(401 , "Invalid credentials");
        }

        const isPasswordCorrect = await user.isPasswordCorrect(password);

        if(!isPasswordCorrect){
            throw new ApiError(401 , "Invalid credentials");
        }
        // generate access and refresh tokens
        const {accessToken , refreshToken} = await generateAccessAndRefereshTokens(user._id);

        const options = {
            httpOnly : true,
            secure : true
        }

        const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

        return res.status(200).cookie("refreshToken" , refreshToken , options).cookie("accessToken" , accessToken , options).json(
            new ApiResponse(200 , {
                user : loggedInUser,
                accessToken,
                refreshToken
            } , "User logged in successfully")
        )
        
    } catch (error) {
        console.error("error :- ", error);
        res.status(400).json({message : error.message});
    }
}

export { registerUser , loginUser};