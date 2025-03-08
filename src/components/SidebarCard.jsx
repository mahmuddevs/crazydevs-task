import { Button } from "./ui/button"

const SidebarCard = () => {
    return (
        <div className="bg-[#363636] rounded-2xl h-32 p-4">
            <h3 className="text-base font-semibold text-white">Upgrade to Premium</h3>
            <p className="text-xs font-normal text-[#868686] mt-1 mb-3">Make the most of all features!</p>
            <Button variant={'sidebar-card'} className="cursor-pointer">Upgrade plan</Button>
        </div>
    )
}
export default SidebarCard