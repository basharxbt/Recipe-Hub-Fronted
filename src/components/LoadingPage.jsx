import { UtensilsCrossed } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf9f7]">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative mb-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#c93632] shadow-lg shadow-red-200">
            <UtensilsCrossed
              size={34}
              strokeWidth={1.8}
              className="text-white"
            />
          </div>

          {/* Pulse ring */}
          <div className="absolute inset-0 animate-ping rounded-3xl border-2 border-[#c93632] opacity-20" />
        </div>

        {/* Brand */}
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          RecipeHub
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Preparing something delicious...
        </p>

        {/* LoadingPage dots */}
        <div className="mt-6 flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#c93632]" />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-[#c93632]"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-[#c93632]"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
