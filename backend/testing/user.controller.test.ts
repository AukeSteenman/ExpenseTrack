import Database from '../Database';

let database: Database;

beforeEach(async () => {
	database = new Database();
	await database.openDbConnection();
});

describe('Test database functionallity', () => {
	it('Should create a client object inside the database object', () => {
		expect(database.getClient()).toBeTruthy();
	});
});
