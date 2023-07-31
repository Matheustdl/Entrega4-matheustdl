import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import userRoutes from './routes/users.routes';
import sessionRoutes from './routes/login.routes';
import handleAppError from './middlewares/handleAppError.middleware';
import contactsRoutes from './routes/contacts.routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5173',
    })
);

app.use('/user', userRoutes);
app.use('/login', sessionRoutes);
app.use('/contacts', contactsRoutes);

app.use(handleAppError);

export default app;
