const { Router } = require('express');
const Contenedor = require('../utils/contenedor');
const router = Router();
const filename = "db.json";
const knex = require('knex');
const knexConfig = require('../knexfile');
const database = knex(knexConfig);
const tableName = 'personas';

//GET ALL localhost/person
router.get('/', async (req, res) => {
    // const c = new Contenedor(filename);
    // res.send(c.getAll());
    // database('provicias')
    
    // Utilizando knex con promesas
    // database(tableName).select().then(personas => {
    //   res.send(personas);        
    // }).catch( error => {
    //   res.send(error);
    // });

    try {
        const personas = await database(tableName).select();
        res.send(personas);
    } catch (err) {
        res.send(err);
    }
});

// GET localhost/person/:id
// GET -> SELECT
router.get('/:id', async(req, res) => {
    // const c = new Contenedor(filename);
    // const id = req.params.id;
    // res.send(c.getById(id));
    try {
      const id = req.params.id;
      const _persona = await database(tableName)
        .select()
        .where('id', id);
      res.send(_persona);
    } catch (err) {
      res.send(err)
    }
});

// POST localhost/person
// POST -> INSERT
router.post('/', async (req, res) => {
    const body = req.body;
    // const c = new Contenedor(filename);
    if (body.nombre && body.edad) {
      const _person = {
        nombre: body.nombre,
        edad: body.edad
      }
      try {
        const _result = await database(tableName).insert(_person);
        // c.save(_person);
        res.send({..._person, id: _result[0]})
      } catch (err) {
        res.send(err)
      }
    } else {
      res.status(400).send('Debe contener nombre y edad');
    }
});

// PUT localhost/person/:id
router.put('/:id', async(req, res) => {
    const body = req.body;
    const id = req.params.id;
    // const c = new Contenedor(filename);
    // if (!c.getById(id)) {
    //   res.status(404).send({error: 'No existe el id'});
    // }
    if (body.nombre && body.edad) {
      const _newPerson = {
        nombre: body.nombre,
        edad: body.edad
      }
      try {
        const _result = await database(tableName)
          .where({id: id})
          .update(_newPerson)
        res.send({_newPerson, id: _result});
      } catch (err) {
        res.send(err)
      }
    }
});

// DELETE localhost/person/:id
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    // const c = new Contenedor(filename);
    // c.deleteById(id);
    try {
      await database(tableName)
      .where({id: id})
      .del()
      res.send('Persona eliminada');
    } catch (err) {
      res.send(err);
    }
});

module.exports = router;
