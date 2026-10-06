import { transactions } from "@/lib/data";
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

const Transactions = async () => {
  const allTransactions = await transactions();
  const premiumTransactions = allTransactions.filter(
    (transaction) => transaction.product === "premium_access",
  );
  const transactionsRevenue = allTransactions.reduce(
    (total, tx) => total + Number(tx.amount),
    0,
  );

  console.log(transactionsRevenue, "this is transaction");

  return (
    <section className="min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
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
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                <DollarSign size={21} className="text-green-600" />
              </div>
            </div>

            <p className="text-sm text-gray-500">Total Revenue</p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              {(transactionsRevenue / 100).toFixed(2)}$
            </h3>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
              <CreditCard size={21} className="text-[#c93632]" />
            </div>

            <p className="text-sm text-gray-500">Total Transactions</p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              {allTransactions.length}
            </h3>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">
              <ShoppingBag size={21} className="text-purple-600" />
            </div>

            <p className="text-sm text-gray-500">Premium Sales</p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              {premiumTransactions.length}
            </h3>
          </div>

          {/* Paid */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <Wallet size={21} className="text-blue-600" />
            </div>

            <p className="text-sm text-gray-500">Paid Transactions</p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              {" "}
              {allTransactions.length}
            </h3>
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
              {/* Type */}
              <button
                type="button"
                className="h-10 rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
              >
                Premium
              </button>
            </div>
          </div>
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
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {allTransactions.map((transaction) => (
                  <tr
                    key={transaction._id}
                    className="transition hover:bg-gray-50/70"
                  >
                    {/* TX ID */}
                    <td className="px-6 py-4">
                      <p className="font-mono text-xs font-semibold text-gray-700">
                        {transaction.transactionId}
                      </p>
                    </td>

                    {/* User */}
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {transaction.userName}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {transaction.userEmail}
                        </p>
                      </div>
                    </td>

                    {/* Type */}
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-600">
                        {transaction.product}
                      </span>
                    </td>

                    {/* Amount */}
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-gray-900">
                        ${(transaction.amount / 100).toFixed(2)}
                      </p>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(transaction.paidAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        },
                      )}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transactions;
