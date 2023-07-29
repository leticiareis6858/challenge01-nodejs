import express from 'express';
const app = express();
import { clientsRoutes } from './routes/main';
import 'dotenv/config';
import 'express-async-errors';

//middleware
app.use(express.json());

//route
app.use('/api/vetclinic', clientsRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
require('./db/connect');
