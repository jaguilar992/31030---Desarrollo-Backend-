// use plataforma;

db.users.insertOne({nombre: "Probando", edad: 20});


db.createUser({
  user: "lector2",
  pwd: "p12345",
  roles: [
    {role: "read", db: "plataforma"}
  ]
});

db.getUsers();