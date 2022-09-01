const firebase = require("firebase-admin");
const serviceAccount = require("./ejemplo_herencia.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://plataforma-ad487.firebaseio.com"
});

// Initializamos firestore
const db = firebase.firestore();
// Referencia a la collection users
const user = db.collection("users");

// CREATE A NEW USER
const createUsuario = async () => {
  const doc = user.doc();
  const result = await doc.create({name: "Antonio", age: 30});
  console.log(result);
};

// READ
const readAll = async () => {
  const querySnapshot = await user.get();
  const docs = querySnapshot.docs;
  const result = docs.map(doc => {
    return {
      id: doc.id,
      name: doc.data().name,
      age: doc.data().age
    }
  });
  console.log(result);
}

// READ BY ID
const readById = async () => {
  let id = "EfBGbUUGOmVVPB2DEggP";
  const doc = user.doc(`${id}`);
  const _user = await doc.get();
  const _data = _user.data();
  console.log({id,..._data});
}

const updateById = async () => {
  let id = "EfBGbUUGOmVVPB2DEggP";
  const doc = user.doc(`${id}`);
  const _user = await doc.update({age: 35});
  console.log(_user);
}

const deleteById = async () => {
  let id = "EfBGbUUGOmVVPB2DEggP";
  const doc = user.doc(`${id}`);
  const result = await doc.delete();
  console.log(result);
}



// console.log(db);

// Llamados
// createUsuario()
// readAll();
// readById();
// updateById();
deleteById();