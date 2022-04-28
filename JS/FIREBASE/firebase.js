var config = {
    //... PASTE CONFIG FILE HERE ...
};
firebase.initializeApp(config);
const db = firebase.firestore();
const settings = {timestampsInSnapshots: true, merge: true};
db.settings(settings)

console.log(db)
export { db }