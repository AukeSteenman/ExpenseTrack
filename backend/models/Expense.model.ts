import { Request, Response } from 'express';
import { Collection } from 'mongodb';

/**
 * This class handles the expenses of a user
 */
class ExpenseModel {
	private collection!: Collection;

	/**
	 * Populates the Expense instace using dependency injection
	 *
	 * @param {Collection}userCollection
	 */
	constructor(userCollection: Collection) {
		this.collection = userCollection;
	}

	/**
	 * Adds an expense to a user
	 *
	 * @param {Request}req
	 * @param {Response}res
	 */
	public addExpense = async (req: Request, res: Response) => {
		try {
			await this.collection.findOneAndUpdate(
				{ email: req.body.email },
				{ $push: { transaction: req.body.transaction } },
				{
					upsert: false,
					returnDocument: 'after',
					projection: { _id: 0, password: 0 }
				},
				(err, docs) => {
					if (err) {
						res.status(400);
						res.send(
							'Something went wrong with updating a user : \nerr: "' + err + '"'
						);
					} else {
						res.json(docs);
					}
				}
			);
		} catch (e) {
			res.status(500);
			res.send('Server error');
		}
	};

	/**
	 * Adds an monthly expense to a user
	 *
	 * @param {Request}req
	 * @param {Response}res
	 */
	public addMonthlyExpense = async (req: Request, res: Response) => {
		await this.collection.find({}).toArray((err: any, docs: any) => {
			if (err) {
				res.status(400).send('Cannot get users. \n err: "' + err + '"');
			} else {
				res.json(docs);
			}
		});
	};

	/**
	 * Removes a expense from a user
	 *
	 * @param {Request}req
	 * @param {Response}res
	 */
	public removeExpense = async (req: Request, res: Response) => {
		await this.collection.find({}).toArray((err: any, docs: any) => {
			if (err) {
				res.status(400).send('Cannot get users. \n err: "' + err + '"');
			} else {
				res.json(docs);
			}
		});
	};

	/**
	 * Get expense from the user
	 *
	 * @param {Request}req
	 * @param {Response}res
	 */
	public getExpenses = async (req: Request, res: Response) => {
		await this.collection.find({}).toArray((err: any, docs: any) => {
			if (err) {
				res.status(400).send('Cannot get users. \n err: "' + err + '"');
			} else {
				res.json(docs);
			}
		});
	};
}
export default ExpenseModel;
