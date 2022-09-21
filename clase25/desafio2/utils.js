const bcrypt = require('bcrypt');

module.exports = {
  hashPassword: (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
  },
  comparePassword: (password, hash) => {
    return bcrypt.compareSync(password, hash);
  }
}