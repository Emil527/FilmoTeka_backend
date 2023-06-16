import express from 'express';

import cors from 'cors';
import 'dotenv/config';
import routes from './routes/index.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);

const port = process.env.PORT || 4444;

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log('Mongodb connected');
	})
	.catch(err => {
		console.log({ err });
		process.exit(1);
	});
