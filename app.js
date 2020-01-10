const express = require('express');
const app = express();
let port = process.env.PORT || 3000;
app.get('/', (req,res) => res.send('NOT TODAY'));
app.listen (port, () => console.log('Server running on port' + port));