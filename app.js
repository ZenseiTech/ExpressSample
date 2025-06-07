const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to pug
app.set('view engine', 'pug');

// Set your views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS for your footer)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // do processing, call database, etc ...
  res.render('index', { title: 'Home Page !!' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us', company: 'Zensei Tech Inc.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});