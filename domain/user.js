const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    role: {type:Number, default:3}
});

const user = mongoose.model('user', userSchema);
module.exports= user;