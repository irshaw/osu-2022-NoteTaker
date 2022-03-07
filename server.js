const express = require('express');
const apiRoute = require('./routes/api/apiRoute');
const htmlRoute = require('./routes/htmlRoute');
// port 
 const PORT = 3001;

// express server
 const app = express();

 // middle ware 
 app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// routes 
app.use('/', htmlRoute);
app.use('/api', apiRoute);

// port listen 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
