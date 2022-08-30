const {Schema, model} = require("mongoose");


const UserSchema = new Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true}
}, {timestamps: true});


const User = model('user', UserSchema);

module.exports = {
  User,
  UserSchema
}