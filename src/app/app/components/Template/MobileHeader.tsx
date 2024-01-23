"use client";

import { useEffect } from "react";

const toggleSideBar = () => {
  document
    .getElementById("default-sidebar")
    ?.classList.toggle("-translate-x-full");
};

const hideSideBar = () => {
  const sidebar = document.getElementById("default-sidebar");
  if (sidebar && !sidebar.classList.contains("default-sidebar")) {
    sidebar.classList.add("-translate-x-full");
  }
};

export default function MobileHeader() {
  useEffect(() => {
    document.body.addEventListener("click", hideSideBar);
    return () => document.body.removeEventListener("click", hideSideBar);
  }, []);

  return (
    <header className="header bg-white shadow py-4 px-4 md:hidden">
      <div className="header-content flex items-center flex-row">
        <div className="hidden md:flex relative">
          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            id="search"
            type="text"
            name="search"
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
            placeholder="Search..."
          />
        </div>
        <div className="flex md:hidden">
          <button
            className="flex items-center justify-center h-10 w-10 border-transparent"
            onClick={toggleSideBar}
          >
            <svg
              className="h-6 w-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
        <div className="flex ml-auto">
          {/* <a href="" className="flex flex-row items-center">
              <Image
                width={10}
                height={10}
                className="w-10 h-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt=""
              />
              <span className="flex flex-col ml-2">
                <span className="truncate w-20 font-semibold tracking-wide leading-none">
                  John Doe
                </span>
                <span className="truncate w-20 text-gray-500 text-xs leading-none mt-1">
                  Manager
                </span>
              </span>
            </a> */}
        </div>
      </div>
    </header>
  );
}
