import { Collection, MongoClient } from 'mongodb';

/**
 * Base class for connection with the database
 */
class Database {
	private client!: MongoClient;
	private collectionLibrary: Record<string, Collection> = {};

	/**
	 * Setups database connection, Can't be in constructor since I have a possible other operation
	 * that needs the MongoClient
	 *
	 * @param {string}collectionName
	 */
	public setup = async (collectionName?: string) => {
		if (!this.client) {
			await this.openDbConnection();
			// If a collection name is provided, populate the collectionLibrary object with the first index
			if (collectionName) {
				await this.appendCollectionLibrary(collectionName);
			}
		}
	};

	/**
	 * Opens DB connection and sets the client to the opened DB conection
	 */
	public openDbConnection = async (): Promise<void> => {
		try {
			this.client = await MongoClient.connect('mongodb://0.0.0.0:27017/');
		} catch (err) {
			console.log(err);
		}
	};

	/**
	 * Gets current mongo client
	 *
	 * @return {MongoClient | null}
	 */
	public getClient = (): MongoClient | null => {
		return this.client ? this.client : null;
	};

	/**
	 * Closes DB connection
	 */
	public closeDbConnection = async (): Promise<void> => {
		try {
			this.client.close();
		} catch (err) {
			console.log(err);
		}
	};

	/**
	 * Adds collection to the collection library
	 *
	 * TODO can crash if collection is not present in database
	 *
	 * @param {string} collection
	 * @return {Promise<void>}
	 */
	public appendCollectionLibrary = async (
		collection: string
	): Promise<void> => {
		this.collectionLibrary[collection] = await this.client
			.db('local')
			.collection(collection);
	};

	/**
	 * gets a specific collection from the collectionLibrary. If collection
	 * does not exist in the library.
	 *
	 * TODO can crash if collection is not present in library
	 *
	 * @param {string} collectionName
	 * @return {Collection | false}
	 */
	public getCollection = (collectionName: string): Collection => {
		return this.collectionLibrary[collectionName];
	};
}
export default Database;
