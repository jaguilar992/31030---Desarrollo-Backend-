const { Router } = require('express');
const Contenedor = require('../utils/contenedor');
const c = new Contenedor("../db.json");
const router = Router();

router.get('/', (req, res) => {
    res.send(c.getAll());
});

// router.post('/', (req, res) => {
//     const body = req.body;
//     console.log(body);
//     if (body.name && body.age) {
//       const _person = {
//         name: body.name,
//         age: body.age
//       }  
//       c.save();
//       res.send(_person)
//     } else {
//       res.status(400).send('Debe contener nombre y edad');
//     }
// });

router.put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    if (body.name && body.age) {
      const _newPerson = {
        name: body.name,
        age: body.age
      }
      c.updateById(id, _newPerson);
      res.send(_newPerson);
    }
});



module.exports = router;
