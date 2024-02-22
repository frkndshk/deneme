const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3002;

const connection = mysql.createConnection({
    host: 'brflrxzq5tg82kflfbmv-mysql.services.clever-cloud.com',
    user: 'uqcw9bdlanbwc4sn',
    password: 'CP8ER0OfZj4xD01po2xJ',
    database: 'brflrxzq5tg82kflfbmv'
});

app.get('/api/menuler', (req, res) => {
    connection.query('SELECT * FROM menuler', (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
