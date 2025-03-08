const Grid = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex h-[120px] items-center p-4 md:p-6 rounded-3xl bg-[#242424] gap-2.5">
                <img src="/icons/dnd.png" alt="dnd" className="w-9 h-[35.5px]" />
                <p className="font-semibold text-lg text-white">
                    Drag & drop local files here,
                    or click to select
                </p>
            </div>
            <div className="flex h-[120px] items-center p-4 md:p-6 rounded-3xl bg-[#242424] gap-2.5">
                <img src="/icons/url.png" alt="url" className="w-9 h-[35.5px]" />
                <div className="w-full">
                    <p className="font-semibold text-lg text-white">
                        Enter in a public URL:
                    </p>
                    <div className="w-full flex items-center rounded-full bg-[#353535] ps-3 pe-1 py-1">
                        <input
                            type="text"
                            placeholder="https://example.com/file.pdf"
                            className="w-full bg-transparent text-gray-400 text-sm outline-none placeholder:text-[#7E7C78]"
                        />
                        <button className="cursor-pointer bg-white/15 text-white text-sm px-5 py-2 rounded-full">
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex h-[120px] items-center p-4 md:p-6 rounded-3xl bg-[#242424] gap-2.5">
                <img src="/icons/dropbox.png" alt="dropbox" className="w-9 h-[35.5px]" />
                <p className="font-semibold text-lg text-white">
                    Add files from Dropbox
                </p>
            </div>
            <div className="flex h-[120px] items-center p-4 md:p-6 rounded-3xl bg-[#242424] gap-2.5">
                <img src="/icons/drive.png" alt="drive" className="w-9 h-[35.5px]" />
                <p className="font-semibold text-lg text-white">
                    Add files from Google Drive
                </p>
            </div>
        </section>
    );
};

export default Grid;
