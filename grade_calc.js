const express = require('express');
const bodyParser = require('body-parser');
const gradeCalculator = require('./modules/grade_calculator.js');
const app = express();

const port = 3000;

var grade = null;
var itpmGrade = null;
var itpGrade = null;

// When a user requests the base URL of the web server, the application is sent to the user
app.use(bodyParser.urlencoded({extended: true}));
app.engine('.html', require('ejs').__express);
app.use(express.static('public'));
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('calculator', {
        title: 'Grade calculator for ITPM/ITP',
        grade: grade,
        itpmGrade: itpmGrade,
        itpGrade: itpGrade
    });
})

// This method is called by a post request on the server. It loads the gradeCalculator module and calculates the grade, which is returned again
app.post('/calculate', (req, res) => {
    itpGrade = req.body.itp_grade;
    itpmGrade = req.body.itpm_grade;
    grade = gradeCalculator.calc(itpmGrade, itpGrade);
    res.redirect('/');
})

app.listen(port, () => console.log(`Grade calculator app listening at http://localhost:${port}/`));