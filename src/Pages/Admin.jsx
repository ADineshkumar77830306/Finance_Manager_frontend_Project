import { useState, useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";

export default function Admin() {
  const { addTransaction } = useContext(TransactionContext);

  const [form, setForm] = useState({
    title: "",
    category: "",
    type: "expense",
    amount: "",
    date: "",
    paymentMethod: "",
    frequency: "one-time",
  });

  const handleAdd = (e) => {
    e.preventDefault();

    addTransaction({
      id: Date.now(),
      createdAt: new Date().toLocaleDateString(),
      ...form,
    });

    setForm({
      title: "",
      category: "",
      type: "expense",
      amount: "",
      date: "",
      paymentMethod: "",
      frequency: "one-time",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Add Transaction
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Manage your income and expenses
        </p>
      </div>

      {/* Card */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-8">
        
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Title */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Title
            </label>
            <input
              type="text"
              placeholder="Netflix Subscription"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Category
            </label>
            <input
              type="text"
              placeholder="Entertainment"
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Type */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Type
            </label>
            <select
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value })
              }
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Amount
            </label>
            <input
              type="number"
              placeholder="₹1000"
              value={form.amount}
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Transaction Date
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Payment */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Payment Method
            </label>
            <select
              value={form.paymentMethod}
              onChange={(e) =>
                setForm({ ...form, paymentMethod: e.target.value })
              }
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option value="">Select Payment</option>
              <option value="Card">Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="UPI">UPI</option>
              <option value="Cash">Cash</option>
            </select>
          </div>

          {/* Frequency */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Frequency
            </label>
            <select
              value={form.frequency}
              onChange={(e) =>
                setForm({ ...form, frequency: e.target.value })
              }
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option value="one-time">One-time</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="md:col-span-2 mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2.5 rounded-xl font-semibold shadow-lg transition"
          >
            + Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
}