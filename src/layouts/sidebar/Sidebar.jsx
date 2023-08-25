import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineAppstore, AiFillCaretRight } from "react-icons/ai";
import { GiTargetPoster } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
import { RiGamepadFill, RiUser4Fill } from "react-icons/ri";
import { BiCategory } from 'react-icons/bi'
import { TbPlayerEjectFilled, TbGoGame } from "react-icons/tb";
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

  // Parents and Child Managers
  const [gameManagerOpen, setGameManagerOpen] = useState(false);
  const toggleGameManager = () => {
    setGameManagerOpen((prevState) => !prevState);
  };

  const [playerManagerOpen, setPlayerManagerOpen] = useState(false);
  const [contestManagerOpen, setContestManagerOpen] = useState(false);
  const [bannerManagerOpen, setBannerManagerOpen] = useState(false);
  const [userManagerOpen, setUserManagerOpen] = useState(false);

  const togglePlayerManager = () => {
    setPlayerManagerOpen((prevState) => !prevState);
  };

  const toggleContestManager = () => {
    setContestManagerOpen((prevState) => !prevState);
  };

  const toggleBannerManager = () => {
    setBannerManagerOpen((prevState) => !prevState);
  };

  const toggleUserManager = () => {
    setUserManagerOpen((prevState) => !prevState);
  }

  return (
    <div className="flex sticky top-0">
      <motion.div
        ref={sidebarRef}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={{ x: open ? 0 : -250 }}
        className="bg-white text-gray shadow-xl z-[999] max-w-[16rem] w-[16rem] overflow-hidden md:relative fixed h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300">
          {/* <img
            src="./Images/logo.png" //
            alt="logo"
            className="w-7 h-7"
          /> */}

          <motion.span
            className="text-xl font-bold whitespace-pre cursor-pointer ml-3"
            onClick={() => setOpen(!open)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            God's Reign Dashboard
          </motion.span>
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100">
            <li className="hover:bg-gray-200">
              <NavLink to={"/"} className="link" activeClassName="active-link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>

            <li>
              <motion.div
                className="link cursor-pointer hover:bg-gray-200 "
                onClick={toggleGameManager}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <BiCategory size={23} className="min-w-max" />
                Ecommerce
              </motion.div>
              <AnimatePresence>
                {gameManagerOpen && (
                  <motion.ul
                    className="flex flex-col gap-1 ml-5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <li className="hover:bg-gray-100 rounded-md mt-2 mb-1">
                      <NavLink
                        to={"/game-manager"}
                        className="link"
                        activeClassName="active-link"
                      >
                        <BiCategory size={20} className="min-w-max" />
                        Order History
                      </NavLink>
                    </li>
                    <li className="hover:bg-gray-100 rounded-md mt-1 mb-2">
                      <NavLink
                        to={"/all-games"}
                        className="link"
                        activeClassName="active-link"
                      >
                        <BiCategory size={20} className="min-w-max" />
                        Products
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li>
              <motion.div
                className="link cursor-pointer hover:bg-gray-200"
                onClick={togglePlayerManager}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <BiCategory size={23} className="min-w-max" />
                E-Sports
              </motion.div>
              <AnimatePresence>
                {playerManagerOpen && (
                  <motion.ul
                    className="flex flex-col gap-1 ml-5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <li className="hover:bg-gray-100 rounded-md mt-2 mb-1">
                      <NavLink
                        to={"/game-manager"}
                        className="link"
                        activeClassName="active-link"
                      >
                        <BiCategory size={20} className="min-w-max" />
                        Games
                      </NavLink>
                    </li>
                    <li className="hover:bg-gray-100 rounded-md mt-1 mb-2">
                      <NavLink
                        to={"/players-manager"}
                        className="link"
                        activeClassName="active-link"
                      >
                        <BiCategory size={20} className="min-w-max" />
                        Players
                      </NavLink>
                    </li>

                    <li className="hover:bg-gray-100 rounded-md mt-1 mb-2">
                      <NavLink
                        to={"/contest-manager"}
                        className="link"
                        activeClassName="active-link"
                      >
                        <BiCategory size={20} className="min-w-max" />
                        Events
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Contest Manger */}

            <li>
              <motion.div
                className="link cursor-pointer hover:bg-gray-200"
                onClick={toggleContestManager}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <BiCategory size={23} className="min-w-max" />
                Entertainment
              </motion.div>
              <AnimatePresence>
                {contestManagerOpen && (
                  <motion.ul
                    className="flex flex-col gap-1 ml-5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <li className="hover:bg-gray-100 rounded-md mt-2 mb-1">
                      <NavLink
                        to={"/create-contest"}
                        className="link"
                        activeClassName="active-link"
                      >
                        <BiCategory size={20} className="min-w-max" />
                        Create Contest
                      </NavLink>
                    </li>
                    <li className="hover:bg-gray-100 rounded-md mt-1 mb-2">
                      <NavLink
                        to={"/all-contest"}
                        className="link"
                        activeClassName="active-link"
                      >
                        <BiCategory size={20} className="min-w-max" />
                        All Contest List
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Banner Manager */}
            <li>
              <motion.div
                className="link cursor-pointer hover:bg-gray-200"
                onClick={toggleBannerManager}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <BiCategory size={23} className="min-w-max" />
                Accounts
              </motion.div>
              <AnimatePresence>
                {bannerManagerOpen && (
                  <motion.ul
                    className="flex flex-col gap-1 ml-5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <li className="hover:bg-gray-100 rounded-md mt-2 mb-1">
                      <NavLink
                        to={"/create-banner"}
                        className="link"
                        activeClassName="active-link"
                      >
                        <BiCategory size={20} className="min-w-max" />
                        Create Banner
                      </NavLink>
                    </li>
                    <li className="hover:bg-gray-100 rounded-md mt-1 mb-2">
                      <NavLink
                        to={"/all-banners"}
                        className="link"
                        activeClassName="active-link"
                      >
                        <BiCategory size={20} className="min-w-max" />
                        All Banner List
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* User Manager */}
            <li>
              <motion.div
                className="link cursor-pointer hover:bg-gray-200"
                onClick={toggleUserManager}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <BiCategory size={23} className="min-w-max" />
                Accounts
              </motion.div>
              <AnimatePresence>
                {userManagerOpen && (
                  <motion.ul
                    className="flex flex-col gap-1 ml-5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <li className="hover:bg-gray-100 rounded-md mt-2 mb-1">
                      <NavLink
                        to={"/all-users"}
                        className="link"
                        activeClassName="active-link"
                      >
                        <BiCategory size={20} className="min-w-max" />
                        User Manager
                      </NavLink>
                    </li>
                    <li className="hover:bg-gray-100 rounded-md mt-1 mb-2">
                      <NavLink
                        to={"/"}
                        className="link"
                        activeClassName="active-link"
                      >
                        <BiCategory size={20} className="min-w-max" />
                        Settings
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>


        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
