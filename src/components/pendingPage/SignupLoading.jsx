const SignupLoading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-[#c93632]" />

        {/* Text */}
        <h2 className="mt-5 text-lg font-semibold text-gray-800">
          Creating your account
        </h2>

        <p className="mt-1 text-sm text-gray-500">Please wait a moment...</p>
      </div>
    </div>
  );
};

export default SignupLoading;
