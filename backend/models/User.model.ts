import { Request, Response } from 'express';
import { Collection } from 'mongodb';

/**
 * This class handles the expenses of a user
 */
class UserModel {
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
	 * Add a user to the database
	 *
	 * @param {Request}req
	 * @param {Response}res
	 */
	public addUser = async (req: Request, res: Response) => {
		console.log(req.body);
		try {
			await this.collection.insertOne(req.body);
			res.send('Inserted user');
		} catch (e) {
			res.status(400);
			res.json(e);
		}
	};

	/**
	 * Update user information
	 *
	 * @param {Request}req
	 * @param {Response}res
	 */
	public updateUser = async (req: Request, res: Response) => {
		console.log(req.body);
		try {
			await this.collection.insertOne(req.body);
			res.send('Inserted expense');
		} catch (e) {
			res.status(400);
			res.send('Wow daar ging wat mis');
		}
	};

	/**
	 * Remove a user from the database
	 *
	 * @param {Request}req
	 * @param {Response}res
	 */
	public removeUser = async (req: Request, res: Response) => {
		console.log(req.body);
		try {
			await this.collection.insertOne(req.body);
			res.send('Inserted expense');
		} catch (e) {
			res.status(400);
			res.send('Wow daar ging wat mis');
		}
	};

	/**
	 * Gets a user from the database
	 *
	 * @param {Request}req
	 * @param {Response}res
	 */
	public getUser = async (req: Request, res: Response) => {
		await this.collection.find({}).toArray((err: any, docs: any) => {
			if (err) {
				res.status(400).send('Cannot get users. \n err: "' + err + '"');
			} else {
				res.json(docs);
			}
		});
	};
}
export default UserModel;
