const mongoose = require("moongose");
const Schema = mongoose.Schema 


const userSchema = new Schema(
    {
        email:{
            type: String,
            trim: true,
            required: true,
        },

        password:{
            type: String,
            trim: true,
            required: true,

        },
    }
)

const User = mongoose.model("User", userSchema)
module.exports = User