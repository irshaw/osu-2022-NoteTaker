const router = require('express').Router();
const path = require('path');

// route Html for notes 
router.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// route Html for index 
router.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;