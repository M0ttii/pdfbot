'use client'
import { buttonVariants } from "@/components/ui/button"

import Link from "next/link";
import { useState } from "react";
import { Button } from "../button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    return (
        <div className="z-20 flex-row lg:flex min-h-screen absolute mt-[55px] border-r-[1px] border-indigo-500">
            <div
                className={` ${open ? "lg:w-40" : "lg:w-60 "
                    } flex flex-col  p-3 w-full bg-[#242424] shadow duration-300`}
            >
                <div className="space-y-3">
                    {/* <div className="flex items-center justify-between">
                        <button onClick={() => setOpen(!open)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                    </div> */}
                    <div className="flex-1">
                        <ul className="pb-4 space-y-1 text-sm">
                            <li className="rounden-sm">
                                <Button variant="default" className="w-full justify-start">
                                    <PlusIcon className="mr-2 stroke-3"></PlusIcon>
                                    New PDF
                                </Button>
                            </li>
                        </ul>
                        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                            History
                        </h2>
                        <ul className="pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Button variant="ghost" className="w-full justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="mr-2 h-4 w-4"
                                    >
                                        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                                        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                                        <circle cx="12" cy="12" r="2" />
                                        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                                        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                                    </svg>
                                    Radio
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}