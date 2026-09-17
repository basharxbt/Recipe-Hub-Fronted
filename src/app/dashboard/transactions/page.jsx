import {
  ArrowDownToLine,
  CreditCard,
  DollarSign,
  Eye,
  MoreHorizontal,
  ShoppingBag,
  TrendingUp,
  Wallet,
} from "lucide-react";

const transactions = [
  {
    id: "TXN-8F42K91",
    user: "James Wilson",
    email: "james@example.com",
    recipe: "Chicken Biryani",
    type: "Premium",
    amount: "$9.99",
    method: "Visa •••• 4242",
    date: "17 Sep 2026",
    status: "Paid",
  },
  {
    id: "TXN-7D31M84",
    user: "Sarah Miller",
    email: "sarah@example.com",
    recipe: "Creamy Garlic Pasta",
    type: "Premium",
    amount: "$7.99",
    method: "Mastercard •••• 8210",
    date: "17 Sep 2026",
    status: "Paid",
  },
  {
    id: "TXN-5A92P73",
    user: "David Brown",
    email: "david@example.com",
    recipe: "Classic Margherita Pizza",
    type: "Premium",
    amount: "$8.49",
    method: "PayPal",
    date: "16 Sep 2026",
    status: "Paid",
  },
  {
    id: "TXN-4C18Q62",
    user: "Emily Davis",
    email: "emily@example.com",
    recipe: "Chocolate Lava Cake",
    type: "Premium",
    amount: "$6.99",
    method: "Visa •••• 1132",
    date: "16 Sep 2026",
    status: "Paid",
  },
  {
    id: "TXN-3B76R45",
    user: "Michael Smith",
    email: "michael@example.com",
    recipe: "Beef Burger",
    type: "Premium",
    amount: "$5.99",
    method: "Mastercard •••• 4421",
    date: "15 Sep 2026",
    status: "Paid",
  },
  {
    id: "TXN-2E54L38",
    user: "Olivia Taylor",
    email: "olivia@example.com",
    recipe: "Spicy Chicken Curry",
    type: "Premium",
    amount: "$8.99",
    method: "Visa •••• 7291",
    date: "15 Sep 2026",
    status: "Paid",
  },
  {
    id: "TXN-1K73N26",
    user: "Daniel Anderson",
    email: "daniel@example.com",
    recipe: "Creamy Mushroom Pasta",
    type: "Premium",
    amount: "$7.49",
    method: "Visa •••• 6382",
    date: "14 Sep 2026",
    status: "Paid",
  },
  {
    id: "TXN-9P51B47",
    user: "Sophia Martin",
    email: "sophia@example.com",
    recipe: "Butter Chicken",
    type: "Premium",
    amount: "$9.49",
    method: "PayPal",
    date: "14 Sep 2026",
    status: "Paid",
  },
];

const Transactions = () => {
  return (
    <section className="min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-[#c93632]">
              Payment Management
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Transactions
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Monitor premium recipe purchases and payment activity.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            <ArrowDownToLine size={18} />
            Export Report
          </button>
        </div>

        {/* Stats */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Revenue */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                <DollarSign size={21} className="text-green-600" />
              </div>

              <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                <TrendingUp size={13} />
                +14.8%
              </span>
            </div>

            <p className="text-sm text-gray-500">Total Revenue</p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">$24,680</h3>
          </div>

          {/* Total Transactions */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
              <CreditCard size={21} className="text-[#c93632]" />
            </div>

            <p className="text-sm text-gray-500">Total Transactions</p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">2,486</h3>
          </div>

          {/* Premium Sales */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">
              <ShoppingBag size={21} className="text-purple-600" />
            </div>

            <p className="text-sm text-gray-500">Premium Sales</p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">2,361</h3>
          </div>

          {/* Paid */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <Wallet size={21} className="text-blue-600" />
            </div>

            <p className="text-sm text-gray-500">Paid Transactions</p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">2,361</h3>
          </div>
        </div>

        {/* Main Table Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          {/* Toolbar */}
          <div className="flex flex-col gap-4 border-b border-gray-100 p-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-semibold text-gray-900">
                Recent Transactions
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Premium recipe purchase history
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Search */}
              <div className="flex h-10 w-full items-center rounded-xl border border-gray-200 bg-gray-50 px-3 sm:w-64">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>

                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              {/* Type */}
              <button
                type="button"
                className="h-10 rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
              >
                Premium
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/70 text-left">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    TX ID
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    User
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Type
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Date
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="transition hover:bg-gray-50/70"
                  >
                    {/* TX ID */}
                    <td className="px-6 py-4">
                      <p className="font-mono text-xs font-semibold text-gray-700">
                        {transaction.id}
                      </p>
                    </td>

                    {/* User */}
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {transaction.user}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {transaction.email}
                        </p>
                      </div>
                    </td>

                    {/* Recipe */}

                    {/* Type */}
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-600">
                        {transaction.type}
                      </span>
                    </td>

                    {/* Amount */}
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-gray-900">
                        {transaction.amount}
                      </p>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {transaction.date}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        {transaction.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                        >
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium text-gray-700">1–8</span> of{" "}
              <span className="font-medium text-gray-700">2,486</span>{" "}
              transactions
            </p>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-400"
              >
                Previous
              </button>

              <button
                type="button"
                className="rounded-lg bg-[#c93632] px-3 py-2 text-sm font-medium text-white"
              >
                1
              </button>

              <button
                type="button"
                className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
              >
                2
              </button>

              <button
                type="button"
                className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
              >
                3
              </button>

              <button
                type="button"
                className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transactions;
