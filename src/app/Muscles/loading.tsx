const Loading = () => {
    return (
        <div className="min-h-[70vh] flex flex-col justify-center items-center gap-4">
            <span className="loading loading-spinner loading-lg text-[#C6F602]"></span>

            <p className="text-gray-400">
                Loading workouts data...
            </p>
        </div>
    );
};

export default Loading;