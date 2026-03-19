const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('CI/CD Pipeline Working new push 🚀');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App running on port ${port}`);
});
