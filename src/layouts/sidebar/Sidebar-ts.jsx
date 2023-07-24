import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineDatabase } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  return (
    <div className="flex sticky top-0">
      <motion.div
        ref={sidebarRef}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] max-w-[16rem] w-[16rem] overflow-hidden md:relative fixed h-screen top-0"
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300 mx-3">
          <span className="text-xl font-bold whitespace-pre cursor-pointer">
            God's Reign Dashboard
          </span>
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link" activeclassname="active-link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/game-manager"}
                className="link"
                activeclassname="active-link"
              >
                <HiOutlineDatabase size={23} className="min-w-max" />
                Create Game
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/all-games"}
                className="link"
                activeclassname="active-link"
              >
                <HiOutlineDatabase size={23} className="min-w-max" />
                All Games
              </NavLink>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
