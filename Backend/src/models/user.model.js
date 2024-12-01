import mongoose from "mongoose";
import bcrypt from "bcryptjs";
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

const User = mongoose.model("User" , UserSchema);



export default User;