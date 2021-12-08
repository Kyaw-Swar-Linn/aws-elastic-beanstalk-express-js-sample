const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Change line no-5 according to Module 5'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
 
