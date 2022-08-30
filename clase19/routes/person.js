const { Router } = require('express');
const router = Router();

//GET ALL localhost/person
router.get("/", getAllPersons);
// GET localhost/person/:id
router.get('/:id', getById);
// POST localhost/person
router.post('/', savePerson);
// PUT localhost/person/:id
router.put('/:id', updateById);
// DELETE localhost/person/:id
router.delete('/:id', deleteById);

module.exports = router;
