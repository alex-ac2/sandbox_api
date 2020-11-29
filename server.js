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
  return res.json({ greeting: 'Why hello there!' }).status(200);
})

// localhost:3000/greeting/alex
app.get('/greeting/:name', (req, res) => {
  if (req.params) {
    console.log('PARAM: ', req.params);
  }
  return res.send(`This is your param: ${req.params.name}`).status(200);
})

app.post('/test', (req, res) => {
  console.log('Request Body: ', req.body);
  return res.json({ test_response: 'Hello from test post route' }).status(200);
})

app.listen(PORT, () => console.log(`Example API listening on port ${PORT}!`))
