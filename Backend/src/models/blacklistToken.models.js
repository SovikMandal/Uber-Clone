import mongoose from "mongoose";

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },

    createdAt: {
        type: String,
        default: Date.now,
        expires: 86400
    }
})

const blacklistToken = mongoose.model('blacklistToken', blacklistTokenSchema);

export default blacklistToken;