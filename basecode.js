const express = require('express');
const bodyParser = require('body-parser'); 
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 3000;

sgMail.setApiKey("YOUR_SENDGRID_API_KEY');

app.use(bodyParser.json());

app.post('/log-ip', (req, res) => {
const {ip, city, region, country } = req.body;

const msg = {
  to: 'your-email@example.com', 
  from: 'noreply@yourdomain.com',
  text: `IP: ${ip}\nLocation: ${city}, ${region}, ${country}'
};

sgMail.send(msg)
  .then(() => res.sendStatus(200))
  .catch(err => {
    console.error('Email error:', err);
    res.sendStatus(500);
  });
});

app.listen(PORT, () => console.log("Server running on port ${PORT}"));
