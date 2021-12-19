const router = require('express').Router();
// deconstruct notes json and require it in the app
const notes = require('../../db/db.json');
const {addNote, deleteNote} = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    console.log('In Note API')
    res.json(results);
})
// when you visit the notes, get the current list and send 
router.post('/notes', (req, res) => {
    const noteAdded = addNote(req.body, notes);
    res.json(noteAdded);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(req.body);
})


module.exports = router;

