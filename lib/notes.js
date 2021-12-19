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
    return data;
}

// function deleteNote(){}
function deleteNote(id, array) {
    const indexID = array.map( x => {return x.id}).indexOf(id);
    array.splice(indexID, 1);
    fs.writeFileSync(path.join( __dirname, '../db/db.json'), JSON.stringify(array), err => {
        err ? console.log(err) : console.log('Added Notes');
    });
    return id;
}
module.exports = {
    addNote,
    deleteNote
};
    
