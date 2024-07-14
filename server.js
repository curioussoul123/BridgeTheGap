const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');





app.use(cors());
 
app.use(express.static(path.join(__dirname, 'frontend',)));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload()); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.get('/chatbot', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'chatbot', 'index.html'));
});

app.get('/journal', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'journal', 'journal.html'));
});

app.get('/test', (req, res) => {
    // Assuming your locally developed webpage is running on http://localhost:3000/test.html
    res.redirect('http://localhost:8080');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
