const express = require('express');
const app = express;

app.get('/', (req, res) => {
    console.log('Hello from console');

    res.send('Hello world from express');
})
app.listen (5000, () => console.log('Server is running on port 5000...'));