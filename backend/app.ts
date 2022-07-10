import Database from './Database';
import ExpressServer from './Express.server';

const setup = async () => {
	const db = new Database();
	await db.setup('users');
	new ExpressServer(db);
};
setup();
