import Rating from './enums/Rating.enum';

type Transaction = {
	email: string;
	dateTime: string;
	expense: Expense | Expense[];
};
type Expense = {
	category: string;
	amount: number;
	rating?: Rating;
};
export default Transaction;
