import SidebarCard from "@/components/SidebarCard"
import { Button } from "@/components/ui/button"
import { Plus, Route, Search, Settings, SidebarClose, SidebarOpen } from "lucide-react"

const Sidebar = () => {
    return (
        <aside className="col-span-2 p-3">
            <div className="flex items-center justify-between">
                <img src="/Logo.png" alt="logo" />
                <div className="flex gap-3 items-center">
                    <Search className="stroke-[#7E7C78]" />
                    <SidebarClose className="stroke-[#7E7C78]" />
                </div>
            </div>
            <div className="space-y-4 mt-8">
                <Button variant={"sidebar"} className="cursor-pointer"><Plus /> Add folder</Button>
                <Button variant={"sidebar-fill"} className="cursor-pointer"><Plus /> Create chat</Button>
            </div>
            <div>
                <SidebarCard />
            </div>
            <div>
                <Route className="stroke-white" />
                Flow AI Templates
            </div>
            <div>
                <img src="" alt="" />
                Jessica Mills
                <Settings className="stroke-[#7E7C78]" />
            </div>
        </aside>
    )
}
export default Sidebar