import React from "react";

const DiscordHome = () => {
    return (
        <div className="flex text-white h-screen">

            {/* Server Section */}
            <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll ">
                {[...Array(20)].map((_, i) => (
                    <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
                        S{i}
                    </div>
                ))}


            </div>

            {/* Channels section */}
            <div className="bg-gray-700 w-60 flex flex-col">
                <div className="shadow-md p-4">Tailwind CSS</div>
                <div className="p-4 flex-1">Channels</div>
            </div>

            {/* Message Seletion  */}
            <div className="bg-gray-600 flex-1 flex flex-col">
                <div className="shadow-md p-4">Tailwind CSS</div>
                <div className="p-4 flex-1">Messages</div>
            </div>
        </div>
    );
};

export default DiscordHome;
