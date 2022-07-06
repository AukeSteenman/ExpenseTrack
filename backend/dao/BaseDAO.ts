import { Collection, MongoClient } from 'mongodb';

/**
 *
 * Base class for connection with the database
 *
 */
class BaseDAO {
	private client!: MongoClient;

	protected openDbConnection = async (): Promise<void> => {
		try {
			this.client = await MongoClient.connect('mongodb://mongodb:27017/');
		} catch (err) {
			console.log(err);
		}
	};

	protected closeDbConnection = async (): Promise<void> => {
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
	protected getCollection = async (collection: string): Promise<Collection> => {
		return await this.client.db('local').collection(collection);
	};

	// protected hash = (text: string): string => {
	// 	return crypto.createHash('sha256').update(text).digest('hex');
	// };

	// protected verifyJWT = (token: string, email: string): boolean => {
	// 	let result;
	// 	jwt.verify(token, 'my-key', function (err, data) {
	// 		if (err) {
	// 			result = false;
	// 		} else {
	// 			if (data['email'] === email) {
	// 				result = true;
	// 			} else {
	// 				result = false;
	// 			}
	// 		}
	// 	});
	// 	return result;
	// };
}
export default BaseDAO;
