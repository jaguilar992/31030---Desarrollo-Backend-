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
  id = Types.ObjectId(id) // Conversion de string -> Tipo ObjectId
  const user = await User.findOne({_id: id});
  res.json(user);
};

async function saveUser(req, res){
  const { nombre, edad } = req.body;
  const _user = new User({
    name: nombre, 
    age: edad
  });
  const result = await _user.save();
  res.json(result);
};

async function updateById(req, res){
  let id = req.params.id;
  id = Types.ObjectId(id);
  const name = req.body.nombre; // nombre: undefined
  const age = req.body.edad;
  // TO-DO Agregar validaciones
  // Validacion:
  // Copia de los valores que llegan en la peticion
  const _user = await User.findOne({_id: id});
  // Update de los campos
  _user.name = name;
  _user.age = age;
  // Save the user
  const result = await _user.save();
  res.json(result);
};

async function deleteById(req, res){
  let id = req.params.id;
  id = Types.ObjectId(id);
  const result = await User.deleteOne({_id: id});
  res.json(result)
};

module.exports = {
  getAllUsers,
  getById,
  saveUser,
  updateById,
  deleteById
}