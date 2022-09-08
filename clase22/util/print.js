const util = require("util");
module.exports = function (data) {
  console.log(util.inspect(data, false, true));
}