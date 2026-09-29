import Link from 'next/link';


const NotFoundPage = () => {
    return (
        <div>
             <div className="min-h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-7xl font-bold">404</h1>

            <h2 className="text-3xl font-semibold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-2">
                Sorry, the page you are looking for doesn&apos;t exist.
            </p>

            <Link
                href="/"
                className="btn bg-[#C6F602] text-black rounded-full mt-6"
            >
                Back to Home
            </Link>
        </div>
        </div>
    );
};

export default NotFoundPage;