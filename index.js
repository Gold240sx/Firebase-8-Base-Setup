// imports
//import './JS/FIREBASE/firebase.js'
// import { data } from './JS/data.js';
import './JS/graph.js';

import { db } from "./JS/FIREBASE/firebase.js"

const modal = document.querySelector('.modal')
//materialize function for activating the modal-trigger
M.Modal.init(modal)

const form = document.querySelector('form')
const name = document.querySelector('#name')
const parent = document.querySelector('#parent')
const department = document.querySelector('#department')

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(db)
    db.collection('employees').add({
        name: name.value, 
        parent: parent.value, 
        department: department.value
    })
    var instance = M.Modal.getInstance(modal)
    instance.close();

    form.reset()
})