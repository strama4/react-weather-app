const express = require('express');
const app = express();
const axios = require('axios');

const PORT = 5000;


app.get('/api/call', (req, res) => {
    axios.get('https://api.darksky.net/forecast/e0017440a49800f3c8f96ffa65ad54ec/53.5444,-113.4909?units=auto')
    .then((result) => {
        res.send(result.data);
    })
    .catch((err) => {
        res.send(err);
    })
    
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
})