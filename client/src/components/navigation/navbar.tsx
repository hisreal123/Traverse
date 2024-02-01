"use client";

import { Calendar, HambergerMenu, Notification } from "iconsax-react";
import SearchBox from "../searchBox";

import UserContainer from "../containers/user";
import { useStateCtx } from "@/context/StateCtx";
import ThemeButtons from "../ThemeButton";

export const dynamic = "force-dynamic";
const Navbar = () => {
  const { openSidebar, setOpenSidebar, setShowDate, showDate, todayDate } =
    useStateCtx();

  return (
    <nav className=" w-full flex items-center justify-between px-2 md:px-4 py-2 md:py-[18px] md:h-[88px] border-b-soft-border border-b dark:border-success/40 relative">
      {/* <InfoModal info={todayDate} /> */}
      <button
        type="button"
        aria-haspopup
        aria-label="Open sidebar menu"
        aria-expanded={openSidebar}
        onKeyUp={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setOpenSidebar(true);
            return;
          }
        }}
        onClick={() => setOpenSidebar(true)}
        tabIndex={0}
        className="focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success min-[900px]:hidden mr-4 h-12 w-12 relative z-50 "
      >
        <HambergerMenu className="text-black dark:text-white h-full w-full " />
      </button>
      <div className="flex w-full max-w-[30%]">
        <SearchBox />
      </div>
      <div className="flex items-center  w-full justify-end gap-x-3 md:gap-x-5">
        <button
          type="button"
          tabIndex={0}
          aria-label="show Date"
          aria-haspopup
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowDate(true);
              return;
            }
          }}
          aria-expanded={showDate}
          onClick={() => setShowDate((prev) => !prev)}
          className=" transition-opacity duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light   border border-soft-light dark:border-success/20  flex justify-center items-center rounded-full h-[30px] w-full max-w-[30px] md:hidden"
        >
          <Calendar
            size={16}
            tabIndex={-1}
            className=" text-black dark:text-success "
            aria-hidden
          />
        </button>
        <div className="hidden md:flex min-[900px]:w-[193px] justify-center items-center gap-x-4">
          <button
            type="button"
            aria-haspopup
            aria-label="Open sidebar menu"
            aria-expanded={showDate}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShowDate(true);
                return;
              }
            }}
            onClick={() => setShowDate(true)}
            tabIndex={0}
            className="focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success min-[900px]:hidden h-5 w-5 relative z-50 "
          >
            <Calendar
              size={20}
              tabIndex={-1}
              className=" text-black dark:text-success "
              aria-hidden
            />
          </button>
          <div className="-rotate-90">
            <ThemeButtons />
          </div>
        </div>
        <span className="border border-soft-light dark:border-success/20  flex justify-center items-center rounded-full max-w-[30px] h-[30px] md:h-10 w-full md:max-w-[40px]">
          <Notification className="text-black dark:text-success md:w-5 md:h-5 w-4 h-4" />
        </span>
        <UserContainer />
      </div>
    </nav>
  );
};

export default Navbar;
