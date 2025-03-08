import { Button } from "@/components/ui/button"
import { Plus, Search, SidebarClose, SidebarOpen } from "lucide-react"

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
                <Button variant={"sidebar"}><Plus /> Add folder</Button>
                <Button variant={"sidebar-fill"}><Plus /> Create chat</Button>
            </div>
        </aside>
    )
}
export default Sidebar