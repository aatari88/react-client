export default function LoadingScreen() {
    return (
        <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 bg-white shadow-lg rounded-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-500">
                <svg
                className="w-8 h-8 text-white animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
                </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
            <p className="text-gray-500">Please wait</p>
            </div>
        </div>
        </div>
    );
}