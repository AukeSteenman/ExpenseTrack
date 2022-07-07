import { Request, Response } from 'express';
import { Collection } from 'mongodb';
import Database from '../Database';

/**
 * TODO
 * - Add expense(s)
 * - Add monthly expense(s)
 * - Remove expense(s)
 * - Get expense(s)
 * - Database object
 */

/**
 * This class handles the expenses of a user
 */
class Expense {
	private db!: Database;
	private collection!: Collection;

	/**
	 * Populates the Expense instace following the builder pattern
	 *
	 * @param {Database}database
	 * @param {Collection}userCollection
	 */
	constructor(database: Database, userCollection: Collection) {
		this.db = database;
		this.collection = userCollection;
	}

	/**
	 * Adds an expense to a user
	 *
	 * @param {Request}req
	 * @param {Response}res
	 */
	public addExpense = async (req: Request, res: Response) => {
		await this.collection.find({}).toArray((err: any, docs: any) => {
			if (err) {
				res.status(400).send('Cannot get users. \n err: "' + err + '"');
			} else {
				res.json(docs);
			}
		});
	};
	// public addExpense = (email: User['email'], transaction: Transaction) => {};

	// public addMonthlyExpense() {}

	// public removeExpense() {}

	// public getExpense() {}
}
export default Expense;
