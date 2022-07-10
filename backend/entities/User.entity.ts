import Transaction from './Transaction.entity';

type User = {
	email: string;
	username: string;
	password?: string;
	transactions?: Transaction[];
};
export default User;
