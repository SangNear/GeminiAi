const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },

    chats: [
        {
            _id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now()
            },

        }
    ]
},
    {
        timestamps: true
    }

)
module.exports = mongoose.model('User', UserSchema)