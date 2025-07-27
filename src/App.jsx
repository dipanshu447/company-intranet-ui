import NavBar from "./components/NavBar.jsx";
import MyTask from "./components/MyTask.jsx";
import UpcomingEvent from './components/UpcomingEvent.jsx';
import TeamSpotlight from "./components/TeamSpotlight.jsx";
import Welcome from "./components/Welcome.jsx";
import { useState } from "react";

export default function App() {
  const [darkmode, setdarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark' || document.documentElement.classList.contains('dark');
    });
  return (
    <div className="flex flex-col items-center bg-[#f2f5f6] dark:bg-[#1a2531] transition-colors">
      <NavBar darkmode={darkmode} setdarkMode={setdarkMode} />
      <main className="w-full h-full overflow-visible relative z-10 box-border px-4 md:px-8 py-8 flex gap-8 flex-col-reverse md:flex-row-reverse">
        <div className="flex-7 box-border flex flex-col gap-5">
          <div className="rounded-2xl bg-[#fff] dark:bg-[#202a3b] shadow-md overflow-visible p-6">
            <span className="text-xl text-[#323233] dark:text-white font-medium">Announcements</span>
            <div className="flex flex-col gap-4 mt-4 mb-3">
              <div className=" bg-[#f8fafa] dark:bg-[#1e2736] flex items-center gap-5 py-4 px-5 rounded-xl">
                <img src="https://img.icons8.com/?size=100&id=QhVagV60u2sO&format=png&color=000000" alt="icon" className="object-cover size-6" />
                <div className="flex flex-col gap-0.5">
                  <div className="dark:text-[#e4e7ea] font-semibold">New Project Kick-off: Project Titan</div>
                  <small className="dark:text-[#99a0ac] text-sm">Join us for the official kick-off meeting this Friday at 10 AM. All hands on deck!</small>
                </div>
              </div>
              <div className=" bg-[#f8fafa] dark:bg-[#1e2736] flex items-center gap-5 py-4 px-5 rounded-xl">
                <img src="https://img.icons8.com/?size=100&id=OfjTGv1SlHbW&format=png&color=000000" alt="icon" className="object-cover size-6" />
                <div className="flex flex-col gap-0.5">
                  <div className="dark:text-[#e4e7ea] font-semibold">Q3 Performance Awards</div>
                  <small className="dark:text-[#99a0ac] text-sm">Nominations are now open for the Q3 performance awards. Recognize your peers!</small>
                </div>
              </div>
              <div className=" bg-[#f8fafa] dark:bg-[#1e2736] flex items-center gap-4 py-4 px-5 rounded-xl">
                <img src="https://img.icons8.com/?size=100&id=Tq2dxtbCYGt1&format=png&color=000000" alt="icon" className="object-cover size-7" />
                <div className="flex flex-col gap-0.5">
                  <div className="dark:text-[#e4e7ea] font-semibold">Scheduled Maintenance</div>
                  <small className="dark:text-[#99a0ac] text-sm">The staging server will be down for maintenance on Sunday from 2 AM to 4 AM.</small>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <UpcomingEvent />
            <TeamSpotlight />
          </div>
        </div>
        <div className="flex-3 flex flex-col gap-5">
          <Welcome />
          <div className="bg-[#fff] dark:bg-[#202a3b] shadow-md overflow-visible box-border flex flex-col p-6 gap-2 rounded-2xl flex-4">
            <span className="text-lg text-[#323233] dark:text-white font-medium">Quick Links</span>
            <div className="flex flex-col">
              <a href="#" className="flex gap-4 items-center hover:bg-[#ececec] dark:hover:bg-[rgb(28,36,51)] py-2 px-3 rounded-xl dark:text-[#d1d4da]">
                {darkmode ? (
                  <img src="https://img.icons8.com/?size=100&id=u8QSctfe0dem&format=png&color=d1d4da" alt="foldericon" className="object-cover size-5" />
                ) : (
                  <img src="https://img.icons8.com/?size=100&id=u8QSctfe0dem&format=png&color=4b5563" alt="foldericon" className="object-cover size-5" />
                )}
                HR Portal
              </a>
              <a href="#" className="flex gap-4 items-center hover:bg-[#ececec] dark:hover:bg-[rgb(28,36,51)] py-2 px-3 rounded-xl dark:text-[#d1d4da]">
                {darkmode ? (
                  <img src="https://img.icons8.com/?size=100&id=11260&format=png&color=d1d4da" alt="devenvicon" className="object-cover size-5" />
                ) : (
                  <img src="https://img.icons8.com/?size=100&id=11260&format=png&color=4b5563" alt="devenvicon" className="object-cover size-5" />
                )}
                Dev Environment
              </a>
              <a href="#" className="flex gap-4 items-center hover:bg-[#ececec] dark:hover:bg-[rgb(28,36,51)] py-2 px-3 rounded-xl dark:text-[#d1d4da]">
                {darkmode ? (
                  <img src="https://img.icons8.com/?size=100&id=59777&format=png&color=d1d4da" alt="devenvicon" className="object-cover size-5" />
                ) : (
                  <img src="https://img.icons8.com/?size=100&id=59777&format=png&color=4b5563" alt="devenvicon" className="object-cover size-5" />
                )}
                Document Center
              </a>
              <a href="#" className="flex gap-4 items-center hover:bg-[#ececec] dark:hover:bg-[rgb(28,36,51)] py-2 px-3 rounded-xl dark:text-[#d1d4da]">
                {darkmode ? (
                  <img src="https://img.icons8.com/?size=100&id=646&format=png&color=d1d4da" alt="devenvicon" className="object-cover size-5" />
                ) : (
                  <img src="https://img.icons8.com/?size=100&id=646&format=png&color=4b5563" alt="devenvicon" className="object-cover size-5" />
                )}
                IT Support
              </a>
            </div>
          </div>
          <MyTask />
        </div>
      </main>
      <footer className="bg-[#fff] dark:bg-[#1e293b] w-full border-t border-[#5a5a5a52] dark:border-[#334155] py-6 px-8 text-sm text-[#474747] dark:text-[#94a3b8]">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left">&copy; 2025 DevHive. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#000] dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#000] dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#000] dark:hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}