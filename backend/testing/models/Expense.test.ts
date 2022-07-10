import Database from '../../Database';
import ExpenseHandler from '../../models/Expense.model';

let expenseHandler: ExpenseHandler;
let db: Database;
await db.setup('users');

beforeEach(async () => {
	expenseHandler = new ExpenseHandler();
	db = new Database();

	await expenseHandler;
});

describe('Test expense functionallity', () => {
	it('Should create a client object inside the database object', () => {
		expect(database.getClient()).toBeTruthy();
	});
});
