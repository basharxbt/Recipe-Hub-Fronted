import DeleteReportedRecipeBtn from "@/components/dashboard/DeleteReportedRecipeBtn";
import { getReport, reportedRecipeCollection } from "@/lib/data";
import { AlertTriangle, Check, Eye, Trash2, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ReportsPage = async () => {
  const reports = await reportedRecipeCollection();
  console.log(reports);

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-8 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <AlertTriangle size={18} />
              </div>

              <span className="text-sm font-semibold text-red-600">
                Moderation
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Reported Recipes
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Review reported recipes, understand the reported issue, and take
              the appropriate action.
            </p>
          </div>

          <div className="flex w-fit items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
            <div>
              <p className="text-xs font-medium text-gray-500">
                Pending Reports
              </p>

              <p className="mt-1 text-xl font-bold text-gray-900">
                {reports.length}
              </p>
            </div>

            <div className="h-9 w-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
              <AlertTriangle size={17} />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {reports.map((report) => (
            <article
              key={report._id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="p-5 md:p-6">
                <div className="flex flex-col gap-6 lg:flex-row">
                  <div className="flex min-w-0 flex-1 gap-4">
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-28">
                      <Image
                        width={100}
                        height={100}
                        src={report?.recipe?.image}
                        alt={report?.recipe?.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold capitalize text-red-600">
                          {report?.status}
                        </span>

                        <span className="text-xs text-gray-400">
                          Reported {report?.createdAt}
                        </span>
                      </div>

                      <h2 className="mt-3 line-clamp-1 text-lg font-bold text-gray-900">
                        {report?.recipe?.title}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        Recipe ID:{" "}
                        <span className="font-medium text-gray-700">
                          {report?.recipeId}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 border-t border-gray-100 pt-5 lg:w-64 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                      <UserRound size={18} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Reported by
                      </p>

                      <p className="mt-1.5 truncate text-sm font-semibold text-gray-800">
                        {report?.reporter}
                      </p>

                      <p className="mt-0.5 break-all text-xs leading-5 text-gray-500">
                        {report?.reporterEmail}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-red-100 bg-red-50/50 p-4 md:p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
                      <AlertTriangle size={16} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-red-500">
                        Report Reason
                      </p>

                      <h3 className="mt-1 text-sm font-semibold text-gray-900">
                        {report?.reason}
                      </h3>

                      {report.description && (
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          {report.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
                <Link
                  href={`/recipe-details/${report._id}`}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  <Eye size={16} />
                  View Recipe
                </Link>

                <DeleteReportedRecipeBtn
                  report={report}
                ></DeleteReportedRecipeBtn>
              </div>
            </article>
          ))}
        </div>

        {reports.length === 0 && (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
              <Check size={24} />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              No reports to review
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              Everything looks good. There are currently no pending recipe
              reports.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReportsPage;
