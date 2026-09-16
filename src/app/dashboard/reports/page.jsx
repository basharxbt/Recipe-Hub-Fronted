import { getReport } from "@/lib/data";
import {
  AlertTriangle,
  Check,
  Eye,
  MoreHorizontal,
  Trash2,
  Utensils,
} from "lucide-react";

const ReportsPage = async () => {
  const reports = await getReport();
  const reportsId = reports.map((report, ind) => report.recipeId);
  console.log(reportsId, "this is all reports id from report dashboard");
  console.log(reports);
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-8 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <AlertTriangle size={19} />
              </div>

              <span className="text-sm font-medium text-red-600">
                Moderation
              </span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Reported Recipes
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Review reported recipes and take appropriate action.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
            <p className="text-xs font-medium text-gray-500">Pending Reports</p>
            <p className="mt-1 text-xl font-bold text-gray-900">
              {reports.length}
            </p>
          </div>
        </div>

        {/* Reports */}
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="p-5 md:p-6">
                <div className="flex flex-col gap-5 lg:flex-row">
                  {/* Recipe */}
                  <div className="flex min-w-0 flex-1 gap-4">
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={report.image}
                        alt={report.recipe}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
                          {report.status}
                        </span>

                        <span className="text-xs text-gray-400">
                          Reported {report.date}
                        </span>
                      </div>

                      <h2 className="truncate text-lg font-semibold text-gray-900">
                        {report.recipe}
                      </h2>

                      <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
                        <Utensils size={14} />
                        Recipe reported by a community member
                      </div>
                    </div>
                  </div>

                  {/* Reporter */}
                  <div className="border-t border-gray-100 pt-4 lg:w-56 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      Reported by
                    </p>

                    <p className="mt-2 text-sm font-semibold text-gray-800">
                      {report.reporter}
                    </p>

                    <p className="mt-0.5 break-all text-xs text-gray-500">
                      {report.email}
                    </p>
                  </div>
                </div>

                {/* Report Reason */}
                <div className="mt-6 rounded-xl bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Reason
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {report.reason}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {report.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-5 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    <Eye size={16} />
                    View Recipe
                  </button>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
                    >
                      <Check size={16} />
                      Dismiss Report
                    </button>

                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
                    >
                      <Trash2 size={16} />
                      Delete Recipe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {reports.length === 0 && (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
              <Check size={22} />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              No reports to review
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Everything looks good. There are no pending recipe reports.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReportsPage;
