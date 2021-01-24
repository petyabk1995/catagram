const express = require('express');
const handlebars = require('express-handlebars');
const checkCatId = require('./middlewares/middleware');
const bodyParser = require('body-parser');
const logger = require('./middlewares/loggerMiddleware');
const cats = require('./cats.js');
const app = express();

app.use('/static', express.static('public'));
app.use(logger);
app.engine('hbs', handlebars({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    let name = 'Petya';
    res.render('home', { name });
});

app.get('/download', (req, res) => {
    res.download(__dirname + './public/index.html');
    // res.sendFile(__dirname + '/views/home.html');
});

app.get('/cats', (req, res) => {
    res.render('cats', {cats: cats.getAll()});
});

app.post('/cats', (req, res) => {
    let catName = req.body.cat;
    cats.add(catName);
    res.redirect('/cats');
});

// app.get('/cats/:catName?', checkCatId, (req, res) => {
//     res.send(`You are looking at ${req.params.catName}`)
// });




// app.get('/cats/:catName/', (req, res) => {
//     console.log(req.params);
//     if (/\d+/.test(req.params.catName)) {
//         res.status(404).send('You need a name');
//         return;
//     }

//     res.send(`This is ${req.params.catName}`);
// });


app.listen(5000, () => console.log(`Server is running`));