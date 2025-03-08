import Main from "@/pages/dashboard/Main"
import Sidebar from "@/pages/dashboard/Sidebar"
import { useEffect, useState } from "react"

const Base = () => {
    const [openSidebar, setOpenSidebar] = useState(true)
    const [mobileScreen, setMobileScreen] = useState(false);
    useEffect(() => {
        if (window?.innerWidth < 1024) {
            setMobileScreen(true)
        }
    }, [])

    const handleToggleSidebar = () => {
        setOpenSidebar(!openSidebar)
    }
    return (
        <div className="bg-main min-h-screen p-2 lg:p-4 grid gap-6 grid-cols-12 w-full">
            <Sidebar mobileScreen={mobileScreen} openSidebar={openSidebar} toggleSidebar={handleToggleSidebar} />
            <Main mobileScreen={mobileScreen} openSidebar={openSidebar} />
        </div>
    )
}
export default Base