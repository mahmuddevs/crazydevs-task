const Files = () => {
    return (
        <div className="flex flex-wrap gap-4 bg-[#242424] p-1 md:p-4 rounded-xl md:rounded-[34px] mt-5">
            <div className="flex items-center gap-2 bg-[#242424] text-white px-3 py-1 rounded-full w-full sm:w-auto">
                <img src="/icons/Files.png" alt="PDF" className="w-4 h-4" />
                <span className="text-sm">Report_file.pdf</span>
                <input type="checkbox" className="appearance-none w-4 h-4 border border-gray-500 rounded-sm checked:bg-gray-400" />
                <span className="text-gray-400 text-xs">Force OCR</span>
                <img src="/icons/info-circle.png" alt="" />
                <button className="text-gray-400 hover:text-gray-200 text-xl">&times;</button>
            </div>
            <div className="flex items-center gap-2 bg-[#242424] text-white px-3 py-1 rounded-full w-full sm:w-auto">
                <img src="/icons/doc.png" alt="DOC" className="w-4 h-4" />
                <span className="text-sm">Article.docs</span>
                <input type="checkbox" className="appearance-none w-4 h-4 border border-gray-500 rounded-sm checked:bg-gray-400" />
                <span className="text-gray-400 text-xs">Force OCR</span>
                <img src="/icons/info-circle.png" alt="" />
                <button className="text-gray-400 hover:text-gray-200 text-xl">&times;</button>
            </div>
        </div>
    );
}
export default Files;
