const Options = () => {
    return (
        <div className="text-white my-8 rounded-lg flex flex-col items-center justify-center">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                <button className="cursor-pointer border w-full sm:w-[240px] border-[#FB9937] text-white px-6 py-3 rounded-full">
                    Start
                </button>
                <span className="text-gray-400">or</span>
                <button className="cursor-pointer bg-gradient-to-r w-full sm:w-[240px] from-[#FFBF00] to-[#FB9937] text-white px-6 py-3 rounded-full flex items-center gap-3">
                    <img src="/icons/star.png" alt="" className="w-5 h-5" />
                    Start with Deep Dive
                </button>
            </div>
        </div>
    );
};
export default Options;
