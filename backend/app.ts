import express, { Application } from 'express';
import Database from './Database';
import bodyParser from 'body-parser';
import Expense from './models/Expense.model';

const PORT = 3001;

// eslint-disable-next-line new-cap

const app: Application = express();
const router = express.Router();

app.use('/api', router);
app.use(bodyParser.json());

const expressSetup = async () => {
	//setup db
	const db = new Database();
	await db.setup('users');

	//Expenses
	const collection = db.getCollection('users');
	if (collection) {
		let expenseModel = new Expense(db, collection);
		router.get('/users', expenseModel.addExpense);
	}
};

// Initializes all models on startup following the facotory pattern
app.listen(PORT, async () => {
	await expressSetup();
	console.log('express server started on port: ' + PORT);
});
