const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/mongotest';
mongoose.connect(uri,  {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Connected to database!');
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Person = mongoose.model('Person', personSchema);

let person = new Person({name: 'Ivo', age: 4});

// First example
// person.save((err, res) => {
//     if (err) return console.log(err);
//     console.log(res);
// });

// Second example
// person.save()
//     .then(res => {
//         console.log(res);
//     });


// Person.find({_id: '600e61056d07e45476da6fdb'})
//     .then(res => {
//         console.log(res);
//     });

// Person.findById('600e61056d07e45476da6fdb')
//     .then(res => {
//         console.log(res);
//     });

// Person.updateOne({_id: '600e61056d07e45476da6fdb'}, {$set: {name: 'IvoNew1'}})
//     .then(res => {
//         console.log(res);
//     });

// Person.findById('600e61056d07e45476da6fdb')
// .then(res => {
//     console.log(res);
// });

Person.findOne({name: 'IvoNew1'}).select('name')
    .then(res => {
        console.log(res);
    });
