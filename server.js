const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/status', (req, res) => {
  console.log(req.params);
  return res.send(`Test Sandbox API is running on port ${PORT}`).status(200);
});

// localhost:3000/greeting?name=alex
app.get('/greeting', (req, res) => {
  if (req.query.name) {
    return res.send(`Hello ${req.query.name}`).status(200);
  } 
  return res.send('Why hello there, what is your name?').status(200);
})

// localhost:3000/greeting/alex
app.get('/greeting/:name', (req, res) => {
  if (req.params) {
    console.log('PARAM: ', req.params);
  }
  return res.send(`This is your param: ${req.params.name}`).status(200);
})


// localhost:3000/message -- 
app.post('/message', (req, res) => {
  console.log('Request Body: ', req.body);
  const { username, message } = req.body;

  if (username && message) {
    res.json({ status: 'posted', username, message }).status(200);
  } else {
    res.json({ status: 'Missing message data in request body' }).status(400);
  }
})

app.listen(PORT, () => console.log(`Example API listening on port ${PORT}!`))
