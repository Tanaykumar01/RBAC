import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : [true, "Password is required"]
    },
    role : {
        type : String,
        required : true,
        enum : ["admin" , "user" , "manager"]
    },
    refreshToken : {
        type : String
    }
} , {timestamps : true});

// hash the password before saving

UserSchema.pre("save" , async function(next){
    if(!this.isModified("password")){
        return next();
    }
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password , salt);
    next();
})

UserSchema.methods.isPasswordCorrect = async function(password){
    return bcrypt.compare(password , this.password);
}

UserSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id : this._id,
        email : this.email,
        username : this.username,
        fullName : this.fullName
    } , process.env.ACCESS_TOKEN_SECRET , {expiresIn : process.env.ACCESS_TOKEN_EXPIRY});
}

UserSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id : this._id
    } , process.env.REFRESH_TOKEN_SECRET , {expiresIn : process.env.REFRESH_TOKEN_EXPIRY});
}

const User = mongoose.model("User" , UserSchema);



export default User;