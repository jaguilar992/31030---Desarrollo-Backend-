const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  getById,
  saveUser,
  updateById,
  deleteById,
  // addSong
} = require("../controllers/user");
const {User} = require("../schemas/user")

const fakeUsers = require("../utils/fakeUser");

//GET ALL localhost/person
router.get("/", getAllUsers);
// GET localhost/person/:id
router.get("/:id", getById);
// POST localhost/person
router.post("/", saveUser);
// PUT localhost/person/:id
router.put("/:id", updateById);
// DELETE localhost/person/:id
router.delete("/:id", deleteById);
//ADD SONGS TO USER
// router.post("/:id/song", addSong);

// MOCKING API
router.post("/popular", (req, res) => {
  const cant = req.query.cant || 50;
  const usuarios = fakeUsers(cant);
  const _users = [];
  for (let usuario of usuarios) {
    const _user = new User(usuario);
    _user.save();
    _users.push(_user);
  }
  res.json(_users);
})

module.exports = router;
