const Main = ({ openSidebar }) => {
    return (
        <div className={`${openSidebar ? 'col-span-8 lg:col-span-10' : 'col-span-9 lg:col-span-11'} main-bg w-full`}>Main</div>
    )
}
export default Main