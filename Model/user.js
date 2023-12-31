const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type:  mongoose.SchemaTypes.String, required: true },
    email: { type:  mongoose.SchemaTypes.String, required: true, unique: true },
    password: { type:  mongoose.SchemaTypes.String, required: true,}
})

const user = mongoose.model('users', userSchema)

module.exports = user