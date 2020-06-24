const express = require('express');

const app = express();

app.use(express.static('./dist/projet-lp74'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/projet-lp74/'}),
);

app.listen(process.env.PORT || 8080);