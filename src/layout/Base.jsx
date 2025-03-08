import Main from "@/pages/dashboard/Main"
import Sidebar from "@/pages/dashboard/Sidebar"

const Base = () => {
    return (
        <div className="bg-main min-h-screen p-4 grid gap-6 grid-cols-12 w-full">
            <Sidebar />
            <Main />
        </div>
    )
}
export default Base