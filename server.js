const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const connectDB = require('./db/conn');

const app = express();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const port = process.env.PORT || 5000;

// Connect to database
connectDB();
// console.log('hello'.cyan, process.env.SECRET);

//Middlewares
// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// const publicPath = path.join(__dirname, '..', 'public');
// app.use(express.static(publicPath));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });

app.get('/', (req, res) => {
  res.send('Hello World!');
  res.end();
});
//My Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(` App listening at ${port}`);
});
