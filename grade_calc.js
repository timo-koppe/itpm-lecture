const express = require('express');
const bodyParser = require('body-parser');
const gradeCalculator = require('./modules/grade_calculator.js');
const app = express();

const port = 3000;

var grade = null;
var itpmGrade = null;
var itpGrade = null;

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

app.post('/calculate', (req, res) => {
    itpGrade = req.body.itp_grade;
    itpmGrade = req.body.itpm_grade;
    grade = gradeCalculator.calc(itpmGrade, itpGrade);
    res.redirect('/');
})

app.listen(port, () => console.log(`Grade calculator app listening at http://localhost:${port}/`));