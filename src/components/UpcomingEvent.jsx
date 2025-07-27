import { upcomingEvents } from "../data.js";

export default function UpcomingEvent() {
    const upevents = upcomingEvents.map(event => (
        <div className="flex mt-5 gap-4 items-center" key={event.title}>
            <div className={`py-1.5 px-3.5 text-center rounded-xl text-white text-sm`} style={{backgroundColor: event.theme}}>
                <div className="font-semibold">{event.date.month}</div>
                <div className="font-bold">{event.date.day}</div>
            </div>
            <div>
                <div className="dark:text-[#e5e6ea] font-medium text-base">{event.title}</div>
                <small className="dark:text-[#8d94a1] text-sm">{event.time} - {event.location}</small>
            </div>
        </div>
    ));

    return (
        <div className="rounded-2xl bg-[#fff] dark:bg-[#202a3b] shadow-md overflow-visible p-6 flex-5">
            <span className="text-xl text-[#323233] dark:text-white font-medium">Upcoming Events</span>
            <div className="flex flex-col gap-3">{upevents}</div>
        </div>
    )
}