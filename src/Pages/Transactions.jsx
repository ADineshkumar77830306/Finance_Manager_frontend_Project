import { useContext, useState } from "react";
import { TransactionContext } from "../Context/TransactionContext";

export default function Transactions() {
  const { transactions } = useContext(TransactionContext);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  //  Filtering Logic
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      typeFilter === "all" || t.type === typeFilter;

    const matchesCategory =
      categoryFilter === "all" || t.category === categoryFilter;

    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition">
      
      {/*  Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Transactions
        </h2>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-3">
          
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Type Filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm dark:bg-gray-700 dark:text-white"
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm dark:bg-gray-700 dark:text-white"
          >
            <option value="all">All Categories</option>

            {/* Dynamic categories */}
            {[...new Set(transactions.map((t) => t.category))].map(
              (cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-2 text-sm">
          
          <thead>
            <tr className="text-gray-600 dark:text-gray-300 text-left">
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2 text-right">Amount</th>
              <th className="px-4 py-2">Txn Date</th>
              <th className="px-4 py-2">Payment</th>
              <th className="px-4 py-2">Frequency</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500 dark:text-white"
                >
                  No matching transactions
                </td>
              </tr>
            ) : (
              filteredTransactions.map((t) => (
                <tr
                  key={t.id}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <td className="px-4 dark:text-blue-500 py-3">{t.createdAt}</td>

                  <td className="px-4 py-3 font-medium text-gray-800 dark:text-purple-500">
                    {t.title}
                  </td>

                  <td className="px-4 py-3 text-gray-600 dark:text-yellow-200">
                    {t.category}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        t.type === "income"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {t.type.toUpperCase()}
                    </span>
                  </td>

                  <td
                    className={`px-4 py-3 text-right font-semibold ${
                      t.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    ₹{t.amount}
                  </td>

                  <td className="px-4 py-3 dark:text-white">{t.date}</td>
                  <td className="px-4 py-3 dark:text-white">{t.paymentMethod}</td>
                  <td className="px-4 py-3 capitalize dark:text-purple-200">
                    {t.frequency}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}