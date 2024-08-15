const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001;
const path = require('path');
const fs = require("fs");
let PDF = "WHITE.PDF";
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shreya.1si21ad061@gmail.com',
    pass: '1si21ad061'
  }
});

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'htmlall')));
app.use(express.static(path.join(__dirname, 'jsons')));
app.use(express.static(path.join(__dirname, 'pdfs')));

// Serve index.html at the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlall/index.html'));
});

// Route to serve dashboard.html
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlall/dashboard.html'));
});

// Route for Chatbot
app.get('/chatbot', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlall/chatbot.html'));
});

// Route for Journal
app.get('/journal', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlall/journal.html'));
});

// Route to serve the Survey page
app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlall/survey.html'));
});

// Get questions from JSON for the survey
app.get('/getQuestions', (req, res) => {
    const Qfile = fs.readFileSync(path.join(__dirname, 'jsons/questions.json'));
    const questionList = JSON.parse(Qfile);
    res.json(questionList);
});

// Handle survey results and send email
app.get('/getResult', (req, res) => {
    const result = req.query.result;
    const email = req.query.email;
    const date = new Date();
    const uData = fs.readFileSync(path.join(__dirname, 'jsons/data.json'));
    const userData = JSON.parse(uData);
    const user = {
        userEmail: email,
        userResult: result,
        userDate: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }
    userData.users.push(user);
    fs.writeFile(path.join(__dirname, 'jsons/data.json'), JSON.stringify(userData), (err) => {
        if (err) {
            throw err;
        }
    });
    const total = parseInt(result);
    if (total > 16) {
        PDF = "RedPlan.pdf";
        res.json({"color": "Red"});
    } else if (total > 8) {
        PDF = "YellowPlan.pdf";
        res.json({"color": "Yellow"});
    } else {
        PDF = "GreenPlan.pdf";
        res.json({"color": "Green"});
    }
    sendMail(email);
});

function sendMail(email){
    transporter.sendMail({
        from: 'shreya.1si21ad061@gmail.com',
        to: email,
        subject: "Your Yoga and Food Plan",
        text: "Check attached pdf.\n\n\nThank You\nLunaticBytes",
        attachments: [
            {
                filename: PDF,
                path: path.join(__dirname, 'pdfs', PDF)
            }
        ],
    });
}

// Routes to serve the PDFs
app.get('/Red', (req, res) => {
    res.sendFile(path.join(__dirname, 'pdfs/RedPlan.pdf'));
});

app.get('/Yellow', (req, res) => {
    res.sendFile(path.join(__dirname, 'pdfs/YellowPlan.pdf'));
});

app.get('/Green', (req, res) => {
    res.sendFile(path.join(__dirname, 'pdfs/GreenPlan.pdf'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
