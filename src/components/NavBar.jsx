import { useEffect, useState } from "react";

export default function NavBar() {
    const [darkmode, setdarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark' || document.documentElement.classList.contains('dark');
    });

    useEffect(() => {
        if (darkmode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkmode])

    const toggleDarkMode = () => setdarkMode(prev => !prev);

    return (
        <header className="top-3 w-[95%] rounded-2xl dark:bg-[#202a3b] shadow-md overflow-visible sticky z-20 backdrop-blur-md">
            <nav className="flex px-5 py-3 items-center w-full justify-between">
                <h1 className="text-lg text-[#323233] dark:text-white font-medium">DevHive</h1>
                <div className="flex gap-6 items-center">
                    <div className="flex text-[#323233] dark:text-[#f0f0f0] text-sm gap-2">
                        <a href="#" className=" hover:bg-[#ececec] dark:hover:bg-[#37465a] px-4 py-2 rounded-xl hover:font-semibold transition-all duration-[0.5s] ease-in-out">Home</a>
                        <a href="#" className=" hover:bg-[#ececec] dark:hover:bg-[#37465a] px-4 py-2 rounded-xl hover:font-semibold transition-all duration-[0.5s] ease-in-out">Resources</a>
                        <a href="#" className=" hover:bg-[#ececec] dark:hover:bg-[#37465a] px-4 py-2 rounded-xl hover:font-semibold transition-all duration-[0.5s] ease-in-out">Events</a>
                        <a href="#" className=" hover:bg-[#ececec] dark:hover:bg-[#37465a] px-4 py-2 rounded-xl hover:font-semibold transition-all duration-[0.5s] ease-in-out">Annoucement</a>
                        <a href="#" className=" hover:bg-[#ececec] dark:hover:bg-[#37465a] px-4 py-2 rounded-xl hover:font-semibold transition-all duration-[0.5s] ease-in-out">Team</a>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="hover:bg-[#e6e6e6] dark:hover:bg-[#354457] p-1 rounded-4xl" onClick={toggleDarkMode}>
                        {!darkmode ? (
                            <img src="https://img.icons8.com/?size=100&id=FwypVM1CXDbT&format=png&color=000000" alt="dark-mode" className="object-cover size-6 cursor-pointer" />
                        ) : (
                            <img src="https://img.icons8.com/?size=100&id=SyBDr18WdUcD&format=png&color=ffffff" alt="light-mode" className="object-cover size-6 cursor-pointer" />
                        )}
                    </div>
                    <div className="hover:bg-[#e6e6e6] dark:hover:bg-[#354457] p-1 rounded-4xl relative">
                        <span className="absolute bg-red-600 px-1 rounded-4xl text-[9px] text-white top-0 right-0">3</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-4.5 cursor-pointer text-black dark:text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 00-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </div>
                    <img src="https://i.pinimg.com/1200x/ef/a3/1f/efa31f21b681c3ed3f29c147de99d6aa.jpg" alt="user-profile" className="object-cover w-8 rounded-4xl cursor-pointer ml-3" />
                </div>
            </nav>
        </header>
    )
}