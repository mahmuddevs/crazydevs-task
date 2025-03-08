import SidebarCard from "@/components/SidebarCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Folder, MessageCircle, Plus, Route, Search, Settings, SidebarClose, SidebarOpen } from "lucide-react"

const Sidebar = ({ mobileScreen, openSidebar, toggleSidebar }) => {

    return (
        <aside className={`${openSidebar ? 'col-span-4 lg:col-span-2' : 'col-span-3 lg:col-span-1'} p-3 flex flex-col`}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
                {
                    !openSidebar || mobileScreen ? (
                        <img src="/logo-icon.png" alt="logo-icon" className="min-w-5" />
                    ) : (
                        <img src="/Logo.png" alt="logo" className="w-full" />
                    )
                }
                <div className="flex flex-col lg:flex-row gap-3 justify-between lg:justify-normal items-center">
                    <Search className="stroke-[#7E7C78] order-2 lg:order-1" />
                    <div onClick={toggleSidebar} className="cursor-pointer order-1 lg:order-2">
                        {
                            openSidebar ? (
                                <SidebarClose className="stroke-[#7E7C78]" />
                            ) : (
                                <SidebarOpen className="stroke-[#7E7C78]" />
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="space-y-4 mt-8">
                <Button variant={"sidebar"} className="cursor-pointer"><Plus />
                    {
                        !openSidebar ? (<Folder />) : 'Add folder'
                    }
                </Button>
                <Button variant={"sidebar-fill"} className="cursor-pointer"><Plus />
                    {
                        !openSidebar ? (<MessageCircle />) : 'Create chat'
                    }
                </Button>
            </div>
            <div className="mt-auto space-y-3">
                <div>
                    <SidebarCard openSidebar={openSidebar} />
                </div>
                <div className={`flex gap-2 items-center ${openSidebar ? '' : 'justify-center'} cursor-pointer`}>
                    <div className="bg-[#2B2B2B] rounded-full size-9 flex justify-center items-center">
                        <Route className="stroke-white size-8 p-1" />
                    </div>
                    {
                        openSidebar && <p className="font-medium text-sm text-white">Flow AI Templates</p>
                    }
                </div>
                <div className={`flex ${openSidebar ? 'flex-col lg:flex-row' : 'flex-col'} justify-between items-center`}>
                    <div className="flex gap-2 justify-between items-center p-0 m-0 cursor-pointer">
                        <Avatar>
                            <AvatarImage src="/avatar.png" />
                            <AvatarFallback>JM</AvatarFallback>
                        </Avatar>
                        {
                            openSidebar && <p className="font-medium text-sm text-white">Jessica Mills</p>
                        }
                    </div>
                    <Settings className={`stroke-[#7E7C78]  ${openSidebar ? 'self-start lg:self-auto mt-4 lg:mt-0 ms-1 lg:ms-0' : 'mt-4'} cursor-pointer`} />
                </div>
            </div>
        </aside>
    )
}
export default Sidebar