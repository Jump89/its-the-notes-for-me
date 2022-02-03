const express = require("express");
const PORT = process.env.PORT || 3002;
const html = require('./routes/html');
const api = require('./routes/api');

const app = express();
// use throughout all files in public folder
app.use(express.static('public'));
// allows us to return the json format
app.use(express.json());
app.use('/api', api);
// when navigating to homepage, show index.html
app.use('/', html);

app.listen(PORT, () => {console.log('API Is Done');
});