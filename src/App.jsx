import NavBar from "./components/NavBar.jsx";
import MyTask from "./components/MyTask.jsx";
import UpcomingEvent from './components/UpcomingEvent.jsx';

export default function App() {
  return (
    <div className="flex flex-col items-center dark:bg-[#1a2531] transition-colors">
      <NavBar />
      <main className="w-full h-full overflow-visible relative z-10 box-border p-8 flex gap-8">
        <div className="flex-7 box-border flex flex-col gap-5">
          <div className="rounded-2xl dark:bg-[#202a3b] shadow-md overflow-visible p-6">
            <span className="text-xl text-[#323233] dark:text-white font-medium">Announcements</span>
            <div className="flex flex-col gap-4 mt-4 mb-3">
              <div className="bg-[#1e2736] flex items-center gap-5 py-4 px-5 rounded-xl">
                <img src="https://img.icons8.com/?size=100&id=QhVagV60u2sO&format=png&color=000000" alt="icon" className="object-cover size-6" />
                <div className="flex flex-col gap-0.5">
                  <div className="text-[#e4e7ea] font-semibold">New Project Kick-off: Project Titan</div>
                  <small className="text-[#99a0ac] text-sm">Join us for the official kick-off meeting this Friday at 10 AM. All hands on deck!</small>
                </div>
              </div>
              <div className="bg-[#1e2736] flex items-center gap-5 py-4 px-5 rounded-xl">
                <img src="https://img.icons8.com/?size=100&id=OfjTGv1SlHbW&format=png&color=000000" alt="icon" className="object-cover size-6" />
                <div className="flex flex-col gap-0.5">
                  <div className="text-[#e4e7ea] font-semibold">Q3 Performance Awards</div>
                  <small className="text-[#99a0ac] text-sm">Nominations are now open for the Q3 performance awards. Recognize your peers!</small>
                </div>
              </div>
              <div className="bg-[#1e2736] flex items-center gap-4 py-4 px-5 rounded-xl">
                <img src="https://img.icons8.com/?size=100&id=Tq2dxtbCYGt1&format=png&color=000000" alt="icon" className="object-cover size-7" />
                <div className="flex flex-col gap-0.5">
                  <div className="text-[#e4e7ea] font-semibold">Scheduled Maintenance</div>
                  <small className="text-[#99a0ac] text-sm">The staging server will be down for maintenance on Sunday from 2 AM to 4 AM.</small>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <UpcomingEvent />
            <div className="rounded-2xl dark:bg-[#202a3b] shadow-md overflow-visible p-6 flex-5">
              <span className="text-xl text-[#323233] dark:text-white font-medium">Team Spotlight</span>
            </div>
          </div>
        </div>
        <div className="flex-3 flex flex-col gap-5">
          <div className="dark:bg-[#202a3b] shadow-md overflow-visible box-border flex flex-col items-center py-6 gap-2 rounded-2xl">
            <div className="text-white font-bold text-2xl mb-1">Welcome back, Sarah!</div>
            <span className="text-white font-semibold text-4xl">10:42 <small>AM</small></span>
            <span className="text-[#9da2af]">Tuesday, July 26, 2025</span>
          </div>
          <div className="dark:bg-[#202a3b] shadow-md overflow-visible box-border flex flex-col p-6 gap-2 rounded-2xl ">
            <span className="text-lg text-[#323233] dark:text-white font-medium">Quick Links</span>
            <div className="flex flex-col">
              <a href="#" className="flex gap-4 items-center dark:hover:bg-[rgb(28,36,51)] py-2 px-3 rounded-xl text-[#d1d4da]">
                <img src="https://img.icons8.com/?size=100&id=u8QSctfe0dem&format=png&color=d1d4da" alt="foldericon" className="object-cover size-5" />
                HR Portal
              </a>
              <a href="#" className="flex gap-4 items-center dark:hover:bg-[rgb(28,36,51)] py-2 px-3 rounded-xl text-[#d1d4da]">
                <img src="https://img.icons8.com/?size=100&id=11260&format=png&color=d1d4da" alt="devenvicon" className="object-cover size-5" />
                Dev Environment
              </a>
              <a href="#" className="flex gap-4 items-center dark:hover:bg-[rgb(28,36,51)] py-2 px-3 rounded-xl text-[#d1d4da]">
                <img src="https://img.icons8.com/?size=100&id=59777&format=png&color=d1d4da" alt="devenvicon" className="object-cover size-5" />
                Document Center
              </a>
              <a href="#" className="flex gap-4 items-center dark:hover:bg-[rgb(28,36,51)] py-2 px-3 rounded-xl text-[#d1d4da]">
                <img src="https://img.icons8.com/?size=100&id=646&format=png&color=d1d4da" alt="devenvicon" className="object-cover size-5" />
                IT Support
              </a>
            </div>
          </div>
          <MyTask />
        </div>
      </main>
      <footer class="bg-[#1e293b] w-full border-t border-[#334155] py-6 px-8 text-sm text-[#94a3b8]">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-center sm:text-left">&copy; 2025 DevHive. All rights reserved.</p>
          <div class="flex gap-4">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}