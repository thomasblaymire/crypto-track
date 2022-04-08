import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  // if (!process.env.JWT_KEY) {
  //   throw new Error('JWT_KEY must be defined');
  // }

  // if (!process.env.MONGO_URI) {
  //   throw new Error('MONGO_URI must be defined');
  // }

  const MONGO_URI =
    'mongodb+srv://admin2:jqbDIRA9R7ue0ndT@cluster0.hstst.mongodb.net/crypto?retryWrites=true&w=majority';

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!');
  });
};

start();
