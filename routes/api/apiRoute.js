const router = require('express').Router();
const save = require("./../db/save");

module.exports = app => {
//Get

router.get('/note',  (req, res) => {
    console.info(`${req.method} request received for notes`);
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

//Post 

router.post('/note', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const { username, topic, note } = req.body;
  
    if (req.body) {
      const newNote = {
        username,
        note,
        topic,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, './db/notes.json');
      res.json(`Note added !`);
    } else {
      res.error('Error in adding note');
    }
  });

//Delete

router.delete('/note/:id', (req, res) => {
    console.info(`${req.method} request received to add a note`);

        deleteNote (req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = router;