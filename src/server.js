const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());


app.post('/api/signup', (req, res) => {
  // Implement signup logic
});

app.post('/api/login', (req, res) => {

});

app.get('/api/profile', (req, res) => {

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
