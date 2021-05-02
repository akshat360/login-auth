const mongoose = require('mongoose');

const mongoAtlasUri =
  process.env.DATABASE ||
  'mongodb+srv://navkaar:friends@@@789@cluster0.uilo9.mongodb.net/mernstack?retryWrites=true&w=majority';
const connectDB = async () => {
  try {
    // Connect to the MongoDB cluster
    const conn = await mongoose
      .connect(mongoAtlasUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then((res) => console.log('MongoDB Connected'));
    // .then((res) => console.log('connect', res));
  } catch (e) {
    console.log('could not connect', e);
  }
};
module.exports = connectDB;
