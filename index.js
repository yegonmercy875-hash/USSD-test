const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/ussd', (req, res) => {
  const { text } = req.body;
  let response = '';
  if (text == '') {
    response = `CON Welcome to Test USSD\n1. My Account\n2. Help`;
  } else if (text == '1') {
    response = `CON Choose account\n1. Balance\n2. Back`;
  } else if (text == '1*1') {
    response = `END Your balance is KES 1,000`;
  } else if (text == '2') {
    response = `END Call 0712345678 for help`;
  } else {
    response = `END Invalid choice`;
  }
  res.set('Content-Type: text/plain');
  res.send(response);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Running on', PORT));
