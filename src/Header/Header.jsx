"use client";

import { usePathname } from 'next/navigation';

export default function Home() {
    const pathname = usePathname()
    console.log(pathname);

    return (
      <>
        <header className="fixed w-full z-20">
              <nav className="bg-white h-[100px] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                  <div className="h-full text-2xl flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                      <a href="/" className={`flex items-center ${pathname === '/' ? 'text-white' : 'text-zinc-500'}`}>
                          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CodeRIT</span>
                      </a>
                      <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                              <li >
                                  <a href="/" className={`${pathname === '/' ? 'text-white' : 'text-zinc-500'} block py-2 pr-4 pl-3 rounded bg-primary-700 `} aria-current="page">Home</a>
                              </li>
                              <li>
                                  <a href="/events" className={`${pathname === '/events' ? 'text-white' : 'text-zinc-500'} block py-2 pr-4 pl-3  `}>Events</a>
                              </li>
                              <li>
                                  <a href="team" className={`${pathname === '/team' ? 'text-white' : 'text-zinc-500'} block py-2 pr-4 pl-3  `}>Team</a>
                              </li>
                              <li>
                                  <a href="registration" className={`${pathname === '/registration' ? 'text-white' : 'text-zinc-500'} block py-2 pr-4 pl-3 `}>Register</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </header>
      </>
    )
  }