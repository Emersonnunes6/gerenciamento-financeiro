import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Resume from '../../components/General/Resume';
import Form from '../../components/General/Form';

interface TransactionType {
  amount: string;
}

interface AuthProps {
  setIsAuthenticated?: any;
}

function GeneralPage({ setIsAuthenticated }: AuthProps) {
  const data = localStorage.getItem("transactions");
  const[transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item: any) => item.expense)
      .map((transation: TransactionType) => Number(transation.amount));

    const amountIncome = transactionsList
      .filter((item: any) => !item.expense)
      .map((transation: TransactionType) => Number(transation.amount));

    const expenseValue = amountExpense.reduce((acc: any, cur: any) => acc + cur, 0).toFixed(2);
    const incomeValue = amountIncome.reduce((acc: any, cur: any) => acc + cur, 0).toFixed(2);

    const totalValue = Math.abs(incomeValue - expenseValue).toFixed(2);

    setIncome(`R$ ${incomeValue}`);
    setExpense(`R$ ${expenseValue}`);
    setTotal(`${Number(incomeValue) < Number(expenseValue) ? '-' : ''}R$ ${totalValue}`);

  }, [transactionsList])

  const handleAdd = (transaction: any) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  }

  return (
    <>
      <Header setIsAuthenticated={setIsAuthenticated} />
      <Resume income={income} expense={expense} total={total} />
      <Form transactionsList={transactionsList} setTransactionsList={setTransactionsList} handleAdd={handleAdd} />

    </>
  )
}

export default GeneralPage