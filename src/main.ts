import { app } from './app';
import * as http from 'http';
import * as mongoose from 'mongoose';

const port = 4000;
const MONGO_URI = 'mongodb://localhost:27017/todo';
const server = http.createServer(app);

server.listen(port);
server.on('listening', async () => {
   console.info(`Listening on port ${port}`);
   mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   });

   mongoose.connection.on('open', () => {
      console.info('Connected to MongoDB');
   });

   mongoose.connection.on('error', (err: any) => {
      console.error(err);
   });
});
