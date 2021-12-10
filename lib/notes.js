const fs = require('fs');
const path = require('path');
const uuid = require('../helpers/uuid')

function addNote(data, array) {
    if(!data.id) {
        data.id = uuid();
    }
    array.push(data);
    //overwrite file with new array 
    fs.writeFileSync(path.join( __dirname, '../db/db.json'), JSON.stringify(array), err => {
        err ? console.log(err) : console.log('Added Notes');
    });
    // return;
}

// function deleteNote(){}
function deleteNote(note, body) {
    const indexID = note.forEach( (searchID, index) => {
        if (searchID.id === body.id) {
            return index;
        }
    })
    console.log()
}
module.exports = {
    addNote,
    deleteNote
};
    
