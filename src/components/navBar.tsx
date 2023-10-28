import React from 'react'
import Image from 'next/image'

export default function NavBar() {
    return (
  
            <div className="drawer">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-primary">
                        <div className="flex-none lg:hidden text-secondary">
                            <label
                                htmlFor="my-drawer-3"
                                aria-label="open sidebar"
                                className="btn btn-square btn-ghost"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-6 h-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 ">
                            <a className="btn btn-ghost">
                                <Image
                                    className="mt-[-8px]"
                                    src="/logo-nobg.png"
                                    alt="logo"
                                    width={60}
                                    height={60}
                                ></Image>
                            </a>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal text-base-100">
                                {/* Navbar menu content here */}
                                <li>
                                    <a className="btn btn-ghost normal-case text-xl hover:text-secondary">
                                        Nosotros
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-ghost normal-case text-xl hover:text-secondary">
                                        Eventos
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-ghost normal-case text-xl hover:text-secondary">
                                        Alquileres
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-ghost normal-case text-xl hover:text-secondary">
                                        Decoración
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side z-[1]">
                    <label
                        htmlFor="my-drawer-3"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-primary bg-opacity-30">
                        <li>
                            <a className="btn btn-ghost normal-case text-xl text-base-100 hover:text-secondary">
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a className="btn btn-ghost normal-case text-xl text-base-100  hover:text-secondary">
                                Eventos
                            </a>
                        </li>
                        <li>
                            <a className="btn btn-ghost normal-case text-xl  text-base-100 hover:text-secondary">
                                Alquileres
                            </a>
                        </li>
                        <li>
                            <a className="btn btn-ghost normal-case text-xl text-base-100 hover:text-secondary">
                                Decoración
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

    )
}
