const admin = require('firebase-admin');
const path = require("path");
const serviceAccount = require(path.resolve(__dirname, './serviceAccountKey.json'));
const fs = require('fs');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://carbonfight-89af6.firebaseapp.com"
});

const db = admin.firestore();
const collectionNames = ['calculation'];

function exportCollectionToJSON(collectionName, data) {
  const jsonData = JSON.stringify(data, null, 2);
  const fileName = `data/${collectionName}.json`;
  fs.writeFile(fileName, jsonData, (err) => {
    if (err) {
      console.error(`Erreur lors de l'écriture du fichier JSON ${fileName} :`, err);
    } else {
      console.log(`Données de la collection ${collectionName} extraites avec succès dans ${fileName}`);
    }
  });
}

const dataPromises = collectionNames.map((collectionName) => {
  const collectionRef = db.collection(collectionName);
  return collectionRef.get()
    .then((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });
      return { collectionName, data };
    });
});

Promise.all(dataPromises)
  .then((dataArray) => {
    dataArray.forEach(({ collectionName, data }) => {
      exportCollectionToJSON(collectionName, data);
    });
  })
  .catch((error) => {
    console.error('Erreur lors de l\'extraction des données :', error);
  });