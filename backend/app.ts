import express, { Application, Request, Response, NextFunction } from 'express';
import Database from './database';
import bodyParser from 'body-parser';

const PORT = 3001;
const database = new Database();

const app: Application = express();

app.use(async (req, res, next) => {
	database.getClient() ?? (await database.openDbConnection());
	next();
});

app.use(bodyParser.json());

app.get(
	'/api/users',
	async (req: Request, res: Response, next: NextFunction) => {
		const collection = await database.getCollection('users');
		await collection.find({}).toArray((err: any, docs: any) => {
			if (err) {
				res.status(400).send('Cannot get users. \n err: "' + err + '"');
			} else {
				res.json(docs);
			}
		});
	}
);

app.listen(PORT, () => console.log('Express server started'));
