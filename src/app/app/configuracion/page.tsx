import Image from "next/image";

export default function Productos() {
  return (
    <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
      <header className="header bg-white shadow py-4 px-4">
        <div className="header-content flex items-center flex-row">
          <form action="#">
            <div className="hidden md:flex relative">
              <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                {/* <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg> */}
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
              <a
                href="#"
                className="flex items-center justify-center h-10 w-10 border-transparent"
              >
                {/* <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg> */}
              </a>
            </div>
          </form>
          <div className="flex ml-auto">
            <a href="" className="flex flex-row items-center">
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
            </a>
          </div>
        </div>
      </header>
      <div className="main-content flex flex-col flex-grow p-4">
        <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>

        <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4 h-screen"></div>
      </div>
      <footer className="footer px-4 py-6">
        <div className="footer-content">
          <p className="text-sm text-gray-600 text-center">
            © Brandname 2020. All rights reserved.{" "}
            <a href="https://twitter.com/iaminos">by iAmine</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
