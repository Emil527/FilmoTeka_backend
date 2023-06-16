import express from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import mongoose from 'mongoose';


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);

const port = process.env.PORT || 4444;

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log('Mongodb connected');
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}`);
		});
	})
	.catch(err => {
		console.log({ err });
		process.exit(1);
	});
