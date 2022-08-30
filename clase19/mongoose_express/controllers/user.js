const {User} = require("../schemas/user");
const {Types} = require("mongoose");
const PAGE_SIZE = 2;


// page: 1  skip 0, PAGE_SIZE * (page - 1)
// page: 2, skip 2, PAGE_SIZE * (2 - 1)
// page: 3, skip 4, PAGE_SIZE * (3 - 1)

async function getAllUsers(req, res){
  const page = Number(req.query.page || 1) 
  try {
    const users = await User
      .find()
      .sort({age: "asc"})
      .skip(PAGE_SIZE * (page - 1))
      .limit(PAGE_SIZE)
      ;
    res.json(users);
  } catch (err) {
    res.status(400).send(err);
  }
};

async function getById(req, res){
  let id = req.params.id;
  id = Types.ObjectId(id) // Conversion Tipo ObjectId
  const user = await User.findOne({_id: id});
  res.json(user);
};
function saveUser(){};
function updateById(){};
function deleteById(){};

module.exports = {
  getAllUsers,
  getById,
  saveUser,
  updateById,
  deleteById
}