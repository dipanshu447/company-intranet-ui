import { useState } from "react"

export default function App() {
  const [darkmode, setdarkMode] = useState(false);

  const toggleDarkMode = () => {
    setdarkMode(prev => !prev);
  }

  return (
    <div className="w-screen h-screen overflow-hidden">
      <header className="w-full bg-[#2e3b4c]">
        <nav className="flex px-5 py-3 items-center w-full justify-between">
          <h1 className="text-lg text-white font-medium">DevHive</h1>
          <div className="flex gap-6 items-center">
            <div className="flex text-[#f0f0f0] text-sm gap-2">
              <a href="#" className="hover:bg-[#37465a] px-4 py-2 rounded-xl hover:font-semibold transition-all duration-[0.5s] ease-in-out">Home</a>
              <a href="#" className="hover:bg-[#37465a] px-4 py-2 rounded-xl hover:font-semibold transition-all duration-[0.5s] ease-in-out">Resources</a>
              <a href="#" className="hover:bg-[#37465a] px-4 py-2 rounded-xl hover:font-semibold transition-all duration-[0.5s] ease-in-out">Events</a>
              <a href="#" className="hover:bg-[#37465a] px-4 py-2 rounded-xl hover:font-semibold transition-all duration-[0.5s] ease-in-out">Annoucement</a>
              <a href="#" className="hover:bg-[#37465a] px-4 py-2 rounded-xl hover:font-semibold transition-all duration-[0.5s] ease-in-out">Team</a>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="hover:bg-[#354457] p-1 rounded-4xl" onClick={toggleDarkMode}>
              {darkmode ? (
                <img src="https://img.icons8.com/?size=100&id=FwypVM1CXDbT&format=png&color=000000" alt="dark-mode" className="object-cover size-6 cursor-pointer" />
              ) : (
                <img src="https://img.icons8.com/?size=100&id=SyBDr18WdUcD&format=png&color=ffffff" alt="light-mode" className="object-cover size-6 cursor-pointer" />
              )}
            </div>
            <img src="https://i.pinimg.com/1200x/ef/a3/1f/efa31f21b681c3ed3f29c147de99d6aa.jpg" alt="user-profile" className="object-cover w-8 rounded-4xl outline-2 outline-offset-3 outline-blue-700 cursor-pointer" />
          </div>
        </nav>
      </header>
      <main className="bg-[#1f293a] w-full h-full">
      </main>
    </div>
  )
}