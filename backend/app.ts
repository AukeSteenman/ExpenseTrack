import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import Database from './Database';
import ExpenseModel from './models/Expense.model';
import UserModel from './models/User.model';

const PORT = 3001;

const app: Application = express();
const router = express.Router();

// sets a prefix on the router '/api'
app.use(express.json());
app.use('/api', router);

const expressSetup = async () => {
	//setup db
	const db = new Database();
	await db.setup('users');

	//Expense routes
	let expenseModel = new ExpenseModel(db.getCollection('users'));
	router.post('/expense', expenseModel.addExpense);
	router.get('/expense', expenseModel.getExpenses);

	//User routes
	let userModel = new UserModel(db.getCollection('users'));
	router.post('/user', userModel.addUser);
	router.get('/user', userModel.getUser);
};

// Initializes all models on startup following the builder pattern
app.listen(PORT, async () => {
	await expressSetup();
	console.log('express server started on port: ' + PORT);
});
