import mongoose from 'mongoose';
import { boolean } from 'webidl-conversions';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required:true },
    isAdmin:{type:Boolean, default: false, required: true}
}, {
    timestamps: true
})