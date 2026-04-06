import React, { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";
 import { ToastContainer, toast } from 'react-toastify';

const Report = () => {
  const { transactions } = useContext(TransactionContext);

  if (transactions.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Insights
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          No data available
        </p>
      </div>
    );
  }

  const notify = () => toast("Will be Updated soon! ");

  // Highest Spending Category
  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + Number(t.amount);
    }
  });

  const highestCategory = Object.keys(categoryMap).reduce(
    (a, b) => (categoryMap[a] > categoryMap[b] ? a : b),
    Object.keys(categoryMap)[0]
  );

  // Monthly Comparison
  const monthMap = {};

  transactions.forEach((t) => {
    const month = new Date(t.date).toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    if (!monthMap[month]) {
      monthMap[month] = { income: 0, expense: 0 };
    }

    if (t.type === "income") {
      monthMap[month].income += Number(t.amount);
    } else {
      monthMap[month].expense += Number(t.amount);
    }
  });

  const months = Object.keys(monthMap);
  const latestMonth = months[months.length - 1];

  const { income: mIncome, expense: mExpense } =
    monthMap[latestMonth];

  // Smart Insight
  let insightMessage = "";

  if (mExpense > mIncome) {
    insightMessage =
      "⚠️ Your expenses are higher than income this month.";
  } else if (mIncome > mExpense) {
    insightMessage =
      "✅ Great! You are saving more than spending.";
  } else {
    insightMessage =
      "⚖️ Your income and expenses are balanced.";
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition">
      
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Insights
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Highest Spending */}
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Highest Spending Category
          </p>
          <h4 className="text-lg font-semibold mt-2">
            {highestCategory}
          </h4>
        </div>

        {/* Monthly Comparison */}
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {latestMonth} Summary
          </p>
          <h4 className="text-lg font-semibold mt-2">
            ₹{mIncome} / ₹{mExpense}
          </h4>
          <p className="text-xs text-gray-400 mt-1">
            Income vs Expense
          </p>
        </div>

        {/* Smart Insight */}
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Observation
          </p>
          <h4 className="text-sm font-medium mt-2">
            {insightMessage}
          </h4>
        </div>
      </div>
      <div className="flex justify-center bg-blue-500 p-2 rounded-xl cursor-pointer font-bold" onClick={notify}>
        <button onClick={notify}>More</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Report;