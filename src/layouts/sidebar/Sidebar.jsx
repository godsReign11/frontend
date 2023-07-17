import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";

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

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div className="flex sticky top-0">
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] max-w-[16rem] w-[16rem] overflow-hidden md:relative fixed h-screen top-0"
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300 mx-3">
          <span className="text-xl font-bold whitespace-pre cursor-pointer">
            God's Reign
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

            <li>
              <NavLink
                to={"/create-player"}
                className="link"
                activeclassname="active-link"
              >
                <BsPerson size={23} className="min-w-max" />
                Create Player
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/all-players"}
                className="link"
                activeclassname="active-link"
              >
                <BsPerson size={23} className="min-w-max" />
                All Players
              </NavLink>
            </li>


            <li>
              <NavLink
                to={"/create-contest"}
                className="link"
                activeclassname="active-link"
              >
                <BsPerson size={23} className="min-w-max" />
                Contest Manager
              </NavLink>
            </li>
          </ul>
          {open && (
            <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Log Out</p>
                  <small></small>
                </div>
                <Link
                  className="text-red-500 py-1.5 px-3 text-xs bg-red-50 rounded-xl"
                  // to="/login"
                >
                  Logout
                </Link>
              </div>

              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Profile</p>
                  <small></small>
                </div>
                <Link
                  className="text-red-500 py-1.5 px-3 text-xs bg-red-50 rounded-xl"
                  // to="/login"
                >
                  Settings
                </Link>
              </div>
            </div>
          )}
        </div>
      </motion.div>
      <div className="m-3 md:hidden" onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
