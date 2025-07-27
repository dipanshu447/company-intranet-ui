import { teamSpotlight } from "../data.js";

export default function TeamSpotlight() {
    const spotlights = teamSpotlight.map(member => (
        <div className="flex mt-5 gap-4 items-center" key={member.name}>
            <img src={member.avatar} alt={member.name} className="object-cover w-11 rounded-4xl" />
            <div>
                <div className="text-[#e5e6ea] font-medium text-base">{member.name}</div>
                <small className="text-[#8d94a1] text-sm">{member.role}</small>
            </div>
        </div>
    ));

    return (
        <div className="rounded-2xl dark:bg-[#202a3b] shadow-md overflow-visible p-6 flex-5">
            <span className="text-xl text-[#323233] dark:text-white font-medium">Team Spotlight</span>
            <div className="flex flex-col gap-3">{spotlights}</div>
        </div>
    )
}