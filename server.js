const express = require('express');
const handlebars = require('express-handlebars');
const checkCatId = require('./middlewares/middleware');
const logger = require('./middlewares/loggerMiddleware');
const app = express();

app.use('/static', express.static('public'));
app.use(logger);

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/download', (req, res) => {
    res.download('./views/home.html');
});

app.post('/cats', (req, res) => {
    console.log('creating cat');
    res.status(201).send('Cat created');
});

app.get('/cats/:catName?', checkCatId, (req, res) => {
    res.send(`You are looking at ${req.params.catName}`)
});


// app.get('/cats/:catName/', (req, res) => {
//     console.log(req.params);
//     if (/\d+/.test(req.params.catName)) {
//         res.status(404).send('You need a name');
//         return;
//     }

//     res.send(`This is ${req.params.catName}`);
// });


app.listen(5000, () => console.log(`Server is running`));