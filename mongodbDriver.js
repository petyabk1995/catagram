const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, {useUnifiedTopology: true}); 

//First example
// client.connect(err => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     let db = client.db('mongotest');
//     let cats = db.collection('cats');

//     cats.findOne({}, (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         };
//         console.log(result);
//     });
// });

//second example
client.connect()
    .then(res => {
        const db = client.db('mongotest');
        const cats = db.collection('cats');

        return cats.findOne({});

    })
    .then(res => {
        console.log(res);
    });

