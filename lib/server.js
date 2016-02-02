import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import testCtrl from '../server-assets/controllers/testCtrl';
import mongoose from 'mongoose';
import { Promise } from 'q';
import mainCtrl from '../server-assets/controllers/mainCtrl';

mongoose.Promise = Promise;

const app = express();
const port = process.env.EXPRESS_PORT || 9001;
const mongoUri = 'mongodb://localhost:27017/phokit';

app.use(bodyParser.json(), cors(), express.static(__dirname + '/../public'));

app.get('/api/test', testCtrl.firstGet);
app.post('/api/email', mainCtrl.register);

app.listen(port, function() {
  console.log(`listening on port: ${port}`);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', () => {
  console.log('db connnected');
});
