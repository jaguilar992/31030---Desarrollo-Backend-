const { Router } = require('express');
const Contenedor = require('../utils/contenedor');
const router = Router();
const filename = "db.json";

router.get('/', (req, res) => {
    const c = new Contenedor(filename);
    res.send(c.getAll());
});

router.get('/:id', (req, res) => {
    const c = new Contenedor(filename);
    const id = req.params.id;
    res.send(c.getById(id));
});

router.post('/', (req, res) => {
    const body = req.body;
    const c = new Contenedor(filename);
    if (body.name && body.age) {
      const _person = {
        name: body.name,
        age: body.age
      }  
      c.save(_person);
      res.send(_person)
    } else {
      res.status(400).send('Debe contener nombre y edad');
    }
});

router.put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const c = new Contenedor(filename);
    if (!c.getById(id)) {
      res.status(404).send({error: 'No existe el id'});
    }
    if (body.name && body.age) {
      const _newPerson = {
        name: body.name,
        age: body.age
      }
      c.updateById(id, _newPerson);
      res.send(_newPerson);
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const c = new Contenedor(filename);
    c.deleteById(id);
    res.send('Persona eliminada');
});

module.exports = router;
