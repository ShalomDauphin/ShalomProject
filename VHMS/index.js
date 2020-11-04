import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute';
import db from './models/index';
import bodyParser from 'body-parser';

dotenv.config();
// const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', userRoute);

app.get('/', (req, res) => res.send('server is On'));
app.use((req, res) => {
    res.status(400).send({
        status: 400,
        error: 'Bad Request',
    });
});

// if(!module.parent) {
//     app.listen(port, () => console.log(`listening to port ${port}`))
// }

db.sequelize.sync({ alter: false }).then(() => {
    console.log('Database Connected!');
    app.listen(port, () => {
      console.log(`Server listening on port: ${port}`);
    });
  });

export default app;