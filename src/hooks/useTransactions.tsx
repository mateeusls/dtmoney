import { createContext, ReactNode, useContext, useEffect, useState  } from "react";
import { api } from "../services/api";

interface Transaction {
	id: number,
	title: string,
	type: string,
	category: string,
	amount: number,
	createdAt: string
}

interface TransactionsProviderProps {
	children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextData {
	transactions: Transaction[],
	createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)


export function TransactionProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransaction] = useState<Transaction[]>([])

	useEffect(() => {
		api('transactions')
			.then(response => setTransaction(response.data.transactions))
	}, [])

	async function createTransaction(transactionInput: TransactionInput) {
		const response = await api.post('transactions', {
			...transactionInput, 
			createdAt: new Date()
		})
		const { transaction } = response.data

		setTransaction([...transactions, transaction])
	}

	return (
		<TransactionsContext.Provider value={{transactions, createTransaction}}>
			{children}
		</TransactionsContext.Provider>
	)
}

export function useTransactions()  {
	const context = useContext(TransactionsContext)

	return context
}