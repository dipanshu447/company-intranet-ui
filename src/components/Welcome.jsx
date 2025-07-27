export default function Welcome() {
    const currentDate = new Date();
    const time = currentDate.toLocaleTimeString('en-US', {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    const date = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="dark:bg-[#202a3b] shadow-md overflow-visible box-border flex flex-col items-center py-6 gap-2 rounded-2xl">
            <div className="text-white font-bold text-2xl mb-1">Welcome back, Sarah!</div>
            <span className="text-white font-semibold text-3xl">{time}</span>
            <span className="text-[#9da2af]">{date}</span>
        </div>
    )
}