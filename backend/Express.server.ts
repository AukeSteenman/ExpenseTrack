import express, { Application, Router } from 'express';
import Database from './Database';
import ExpenseModel from './models/Expense.model';
import UserModel from './models/User.model';

class ExpressServer {
	private app!: Application;
	private router!: Router;
	private db!: Database;
	private PORT: number = 3001;

	constructor(db: Database) {
		this.app = express();
		this.router = express.Router();
		this.db = db;
		this.setup();
	}

	private setup = () => {
		this.app.use(express.json());
		this.app.use('/api', this.router);
		this.app.listen(this.PORT, () => {
			this.expenseRoutes();
			this.userRoutes();
			console.log('server started on port: ' + this.PORT);
		});
	};

	private expenseRoutes = () => {
		let expenseModel = new ExpenseModel(this.db.getCollection('users'));
		this.router.post('/expense', expenseModel.addExpense);
		this.router.get('/expense', expenseModel.getExpenses);
	};

	private userRoutes = () => {
		let userModel = new UserModel(this.db.getCollection('users'));
		this.router.post('/user', userModel.addUser);
		this.router.get('/user', userModel.getUser);
	};
}
export default ExpressServer;
