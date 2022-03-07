import express from 'express';

import { users, login, products, orders } from './routes';
import {
  joiError,
  domainError,
  serverError,
} from './middlewares/error';

const app = express(); // initialize server

app.use(express.json()); // json

/* routes */
app.use('/users', users);
app.use('/login', login);
app.use('/products', products);
app.use('/orders', orders);

/* error handlers */
app.use(joiError);
app.use(domainError);
app.use(serverError);

export default app;
