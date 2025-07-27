export default function Welcome() {
    const currentDate = new Date();
    console.log(currentDate)
    return (
        <div className="dark:bg-[#202a3b] shadow-md overflow-visible box-border flex flex-col items-center py-6 gap-2 rounded-2xl">
            <div className="text-white font-bold text-2xl mb-1">Welcome back, Sarah!</div>
            <span className="text-white font-semibold text-4xl">10:42 <small>AM</small></span>
            <span className="text-[#9da2af]">Tuesday, July 26, 2025</span>
        </div>
    )
}