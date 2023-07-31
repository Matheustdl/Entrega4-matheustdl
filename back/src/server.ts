import app from './app';
import 'dotenv/config';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
    .then(() => {
        const PORT = process.env.PORT || 3000;
        app.listen(3000, () => {
            console.log(`Server is running on ${PORT}`);
        });
    })
    .catch((error) => console.log(error));
