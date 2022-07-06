import { Collection, MongoClient } from 'mongodb';

/**
 *
 * Base class for connection with the database
 *
 */
class Database {
	private client!: MongoClient;

	/**
	 * Opens db connection when database object is created
	 */
	constructor() {
		this.openDbConnection();
	}

	public openDbConnection = async (): Promise<void> => {
		try {
			this.client = await MongoClient.connect('mongodb://0.0.0.0:27017/');
		} catch (err) {
			console.log(err);
		}
	};

	public closeDbConnection = async (): Promise<void> => {
		try {
			this.client.close();
		} catch (err) {
			console.log(err);
		}
	};

	/**
	 *
	 * @param {string} collection
	 * @return {Promise<Collection>}
	 */
	public getCollection = async (collection: string): Promise<Collection> => {
		return await this.client.db('local').collection(collection);
	};
}
export default Database;
