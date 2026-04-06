import { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  
  // Mock Data (Initial State)
  const initialTransactions = [
    {
      id: 1,
      createdAt: "01/04/2026",
      title: "Salary",
      category: "Income",
      type: "income",
      amount: 50000,
      date: "2026-04-01",
      paymentMethod: "Bank Transfer",
      frequency: "monthly",
    },
    {
      id: 2,
      createdAt: "02/04/2026",
      title: "Groceries",
      category: "Food",
      type: "expense",
      amount: 1500,
      date: "2026-04-02",
      paymentMethod: "UPI",
      frequency: "one-time",
    },
    {
      id: 3,
      createdAt: "03/04/2026",
      title: "Netflix",
      category: "Entertainment",
      type: "expense",
      amount: 499,
      date: "2026-04-03",
      paymentMethod: "Card",
      frequency: "monthly",
    },
    {
      id: 4,
      createdAt: "04/04/2026",
      title: "Freelance",
      category: "Income",
      type: "income",
      amount: 12000,
      date: "2026-04-04",
      paymentMethod: "Bank Transfer",
      frequency: "one-time",
    },
    {
      id: 5,
      createdAt: "05/04/2026",
      title: "Electricity Bill",
      category: "Bills",
      type: "expense",
      amount: 2200,
      date: "2026-04-05",
      paymentMethod: "UPI",
      frequency: "monthly",
    },
    {
      id: 6,
      createdAt: "06/04/2026",
      title: "Gym",
      category: "Health",
      type: "expense",
      amount: 1200,
      date: "2026-04-06",
      paymentMethod: "Card",
      frequency: "monthly",
    },
    {
      id: 7,
      createdAt: "07/04/2026",
      title: "Investment Return",
      category: "Income",
      type: "income",
      amount: 8000,
      date: "2026-04-07",
      paymentMethod: "Bank Transfer",
      frequency: "one-time",
    },
    {
      id: 8,
      createdAt: "08/04/2026",
      title: "Dining Out",
      category: "Food",
      type: "expense",
      amount: 900,
      date: "2026-04-08",
      paymentMethod: "UPI",
      frequency: "one-time",
    },
    {
      id: 9,
      createdAt: "09/04/2026",
      title: "Shopping",
      category: "Lifestyle",
      type: "expense",
      amount: 3000,
      date: "2026-04-09",
      paymentMethod: "Card",
      frequency: "one-time",
    },
    {
      id: 10,
      createdAt: "10/04/2026",
      title: "Bonus",
      category: "Income",
      type: "income",
      amount: 15000,
      date: "2026-04-10",
      paymentMethod: "Bank Transfer",
      frequency: "one-time",
    },
    {
      id: 11,
      createdAt: "11/04/2026",
      title: "Petrol",
      category: "Transport",
      type: "expense",
      amount: 2000,
      date: "2026-04-11",
      paymentMethod: "UPI",
      frequency: "one-time",
    },
    {
      id: 12,
      createdAt: "12/04/2026",
      title: "Internet",
      category: "Bills",
      type: "expense",
      amount: 999,
      date: "2026-04-12",
      paymentMethod: "Auto Debit",
      frequency: "monthly",
    },
    {
      id: 13,
      createdAt: "13/04/2026",
      title: "Stock Profit",
      category: "Income",
      type: "income",
      amount: 6000,
      date: "2026-04-13",
      paymentMethod: "Bank Transfer",
      frequency: "one-time",
    },
    {
      id: 14,
      createdAt: "14/04/2026",
      title: "Medicine",
      category: "Health",
      type: "expense",
      amount: 700,
      date: "2026-04-14",
      paymentMethod: "UPI",
      frequency: "one-time",
    },
    {
      id: 15,
      createdAt: "15/04/2026",
      title: "Travel",
      category: "Leisure",
      type: "expense",
      amount: 4500,
      date: "2026-04-15",
      paymentMethod: "Card",
      frequency: "one-time",
    },
  ];

  // Use mock data as initial state
  const [transactions, setTransactions] = useState(initialTransactions);

  const [role, setRole] = useState("user");

  // Add new transaction
  const addTransaction = (tx) => {
    setTransactions((prev) => [...prev, tx]);
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, role, setRole }}
    >
      {children}
    </TransactionContext.Provider>
  );
};