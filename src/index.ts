import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import api from '@api/index';
import 'utils/db/mongodb';

dotenv.config();

const main = express();
const port = process.env.PORT || 8080;

main.use(express.json());
main.use(express.urlencoded({ extended: true }));
main.use(cors());
main.use('/api', api);

main.get('/', (_, res) => {
    res.send('GraphQL is Amazing!');
});

main.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
