import ExpenseHandler from '../../models/Expense.model';

let expenseHandler: ExpenseHandler;

beforeEach(async () => {
	expenseHandler = new ExpenseHandler();
	await expenseHandler;
});

describe('Test database functionallity', () => {
	it('Should create a client object inside the database object', () => {
		expect(database.getClient()).toBeTruthy();
	});
});
