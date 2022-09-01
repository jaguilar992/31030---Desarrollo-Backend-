const firebase = require("firebase-admin");
const serviceAccount = require("./ejemplo_herencia.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://plataforma-ad487.firebaseio.com"
});

// Initializamos firestore
const db = firebase.firestore();
// Referencia a la collection colors
const color = db.collection("colores");

// CREATE A NEW color
const createColor = async (color) => {
  const doc = color.doc();
  const result = await doc.create({color: color});
  console.log(result);
};

// READ
const readAll = async () => {
  const querySnapshot = await color.get();
  const docs = querySnapshot.docs;
  const result = docs.map(doc => {
    return {
      color: doc.data().color
    }
  });
  console.log(result);
}

// READ BY ID
const readById = async () => {
  let id = "EfBGbUUGOmVVPB2DEggP";
  const doc = color.doc(`${id}`);
  const _color = await doc.get();
  const _data = _color.data();
  console.log({id,..._data});
}

const updateById = async (id, colorName) => {
  const doc = color.doc(`${id}`);
  const _color = await doc.update({color: colorName});
  console.log(_color);
}

const deleteById = async (id) => {
  const doc = color.doc(`${id}`);
  const result = await doc.delete();
  console.log(result);
}



// createColor("red");
// createColor("green");
// createColor("blue");
// readAll();
// updateById("NEKFgfzYmhwmvF17Cjtw", "nay")

deleteById("V9HzpN1bBDoa70pGlZfR");