const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const history = [];

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/calculator', (req, res) => {
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
    let result;
    switch (req.body.calculator) {
        case 'ADD':
            result = n1 + n2
            break;
        case 'SUB':
            result = n1 - n2
            break;
        case 'MULTIPLICATION':
            result = n1 * n2
            break;
        case 'DIVISION':
            result = n1 / n2
            break;
    }
    history.push({ result, type: req.body.calculator });
    res.send('result : ' + result + '___' + 'history : ' + history.map((item, index) => `${index + 1} . ${item.result} _ ${item.type} | `).join(' '))
})

app.listen(6969, (res) => {
    console.log('port 6969');
})