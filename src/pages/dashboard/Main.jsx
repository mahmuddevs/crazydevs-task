import Files from "@/components/Files"
import Grid from "@/components/Grid"
import Options from "@/components/Options"
import { Info } from "lucide-react"

const Main = ({ openSidebar }) => {
    return (
        <section className={`${openSidebar ? 'col-span-8 lg:col-span-10' : 'col-span-9 lg:col-span-11'} main-bg w-full relative pt-12 relative`}>
            <div className="w-11/12 mx-auto">
                <div className="w-full hidden lg:flex justify-center">
                    <p className="inline-flex text-white items-center gap-2 text-sm py-2 px-3 rounded-full bg-[#242424]">
                        <Info className="stroke-text" />
                        The web version does not display local chats. To access all features, please
                        <span className="text-text">
                            <a href="#">install the app.</a>
                        </span>
                    </p>
                </div>
                <div className="my-8 lg:w-11/12 mx-auto text-center">
                    <h1 className="flex gap-3 justify-center items-center text-white text-xl md:text-3xl lg:text-[54px] font-medium">Add Files to
                        <img src="/icons/appicon.png" alt="appicon" className="hidden md:block" />
                        <span>Cloud Chat</span>
                    </h1>
                    <div className="">
                        <p className="text-sm text-[#B7B7B7]">Your files will not be stored on our servers and no AI models will be trained.</p>
                        <p className="text-text text-sm font-semibold">Supported File Types: .docx, .pdf, .epub, and many text filetypes</p>
                    </div>
                </div>

                <div className="w-full xl:w-7/12 mx-auto">
                    <Grid />
                    <Files />
                    <Options />
                </div>

                <div className="md:absolute sm:bottom-7 md:right-25 w-full md:w-80 sm:transform">
                    <div className="bg-[#373737] p-4 rounded-lg mb-4 sm:mb-0 sm:bottom-full">
                        <p className="text-sm text-gray-300 text-center">
                            Deep Dive processes documents section by section for "unlimited" context, enabling complete answers. Run once per chat to unlock Table AI and Prompt Loops.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Main