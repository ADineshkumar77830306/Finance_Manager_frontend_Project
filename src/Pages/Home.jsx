import React, { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";
import CountUp from "../Components/Count";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Home = () => {
  const { transactions } = useContext(TransactionContext);

  // Calculations
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = income - expense;

  // Line Chart Data
  const map = {};

  transactions.forEach((t) => {
    if (!map[t.date]) {
      map[t.date] = { date: t.date, income: 0, expense: 0 };
    }

    if (t.type === "income") {
      map[t.date].income += Number(t.amount);
    } else {
      map[t.date].expense += Number(t.amount);
    }
  });

  const chartData = Object.values(map);

  // Pie Chart Data (Category-wise Expense)
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + Number(t.amount);
    }
  });

  const pieData = [
  {
    name: "Income",
    value: income,
  },
  {
    name: "Expense",
    value: expense,
  },
   {
    name: "Remaining",
    value: balance > 0 ? balance : 0, // avoid negative
  },
];

const COLORS = [
  "#22c55e", // Income - green
  "#ef4444", // Expense - red
  "#3b82f6", // Remaining - blue
]; 

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 dark:from-purple-300 h-[640px] md:h-[300px] to-blue-500 dark:to-green-300 text-white px-8 py-4 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-semibold">Welcome Back 👋</h1>
        <p className="text-blue-100 mt-1">
          This is your financial overview
        </p>
      </div>

      {/* Content */}
      <div className="px-8 -mt-118 md:-mt-38 space-y-6">
        
        {/* 💳 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <p className="text-gray-500 font-bold text-sm">
              Total Remaining
            </p>
            <h3 className="text-2xl font-bold mt-2">
              ₹<CountUp from={0} to={balance} duration={2} />
            </h3>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <p className="text-gray-500 font-bold text-sm">Income</p>
            <h3 className="text-2xl font-bold mt-2">
              ₹<CountUp from={0} to={income} duration={2} />
            </h3>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <p className="text-gray-500 font-bold text-sm">Expenses</p>
            <h3 className="text-2xl font-bold mt-2">
              ₹<CountUp from={0} to={expense} duration={2} />
            </h3>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-6">
          
          {/* Line Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-black p-6 border-2 dark:border-white  rounded-xl shadow-md">
            
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
              Income vs Expense
            </h3>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#22c55e"
                    strokeWidth={3}
                  />

                  <Line
                    type="monotone"
                    dataKey="expense"
                    stroke="#ef4444"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
         <div className="bg-white dark:bg-black border-2 dark:border-white p-6 rounded-xl shadow-md">
  
  <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
    Financial Distribution
  </h3>

  <div className="h-64 relative">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={90}
          label
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />

        {/* Center Text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-gray-800 dark:fill-white text-lg font-bold"
        >
          ₹{balance}
        </text>
      </PieChart>
    </ResponsiveContainer>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;