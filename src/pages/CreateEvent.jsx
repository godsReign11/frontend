import React, { useState } from "react";
import "./All.css";
import { ToastContainer, toast } from "react-toastify";
import TopHead from "./TopHead";
import EventDetail from "../EventsPages/EventDetails";
import AddPlayers from "../EventsPages/AddPlayers";
import AddGroups from "../EventsPages/AddGroups";
import EventMatches from "../EventsPages/Matches";

export default function CreateEvent() {

    return (
        <div className="wrapper">
            <ToastContainer />
            <div className="content-page rtl-page">
                <div className="container mx-auto">
                    <TopHead name={"Create Event"} />

                    <div className="space-y-6">
                        <EventDetail />

                        <AddPlayers />

                        <AddGroups />

                        <EventMatches />

                        {/* Create Event Buttons */}
                        <div className="flex gap-3 justify-end">
                            <div className="w-[148px] h-11 px-6 py-3 rounded-lg border border-neutral-700 justify-start items-center gap-2.5 inline-flex">
                                <button>
                                    Add to Draft
                                </button>
                            </div>

                            <div className="w-[165px] h-11 px-[34px] py-3 bg-gray-900 rounded-lg justify-start items-center gap-2.5 inline-flex text-white">
                                <button>
                                    Create Event
                                </button>
                            </div>
                        </div>

                        <div>






                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
