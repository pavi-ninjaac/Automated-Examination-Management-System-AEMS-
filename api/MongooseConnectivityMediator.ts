import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Logger from 'js-logger';

dotenv.config();

const connect = (): Promise<typeof mongoose> => {
  return mongoose.connect((process.env.DB_URL as string), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
}

const connectionStatus = (): void => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', (): void => {
    Logger.info('Connection established to mongo db.');
  });
}

const disconnect = (): Promise<void> => {
  return mongoose.disconnect();
}

export { connect, connectionStatus, disconnect }
