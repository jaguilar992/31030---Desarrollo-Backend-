const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  getById,
  saveUser,
  updateById,
  deleteById,
} = require("../controllers/user");

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

module.exports = router;
