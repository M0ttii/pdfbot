
import { buttonVariants } from "@/components/ui/button"

import Link from "next/link";
import { useState } from "react";
import { Button } from "../button";
import { PlusIcon } from "@radix-ui/react-icons";
import { Input } from "../input";
import { createRouteHandlerClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutIcon from "@/components/auth/logout";
import { RealDatabase } from "../../../../types/supabase";



export default async function Secondbar() {

    const supabase = createServerComponentClient<RealDatabase>({ cookies });

    const {data, error} = await supabase.from("conversations").select('*');

    if(data){
        console.log("Data: " + data[0].created_at)
    }

    // const [open, setOpen] = useState(false);
    const open = false;
    return (
        <div className="h-full pr-3">
            <div
                className={`lg:w-60 h-full p-3 bg-[#242424] shadow duration-300 rounded-lg bg-gradient-to-r from-[#1A1A1A] to-[#101010]`}>
                <div className="space-y-3">
                    <div className="flex-1">
                        <ul className="pb-8 pt-1 text-sm">
                            <li className="rounded-sm">
                                <Input placeholder="Search history" className="h-9 bg-[#050505] border-[#161616] placeholder:text-[#565656]"></Input>
                            </li>
                        </ul>
                        <ul className="pb-8 text-sm">
                            <li className="rounden-sm flex justify-center">
                                <Button variant="default" className="w-40 justify-start">
                                    <PlusIcon className="mr-2 stroke-3"></PlusIcon>
                                    New PDF
                                </Button>
                            </li>
                        </ul>
                        <h2 className="mb-2 pl-1 text-lg font-semibold tracking-tight">
                            History
                        </h2>
                        <ul className="pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                {data ? (
                                    data.map(entry => 
                                    <>
                                    <Link href={"/chat/" + entry.id}>
                                        <Entry title={entry.title}></Entry>
                                    </Link>
                                    </>
                                    )
                                ) : (
                                    <span>sfsdf</span>
                                )}
                            </li>
                        </ul>
                        <div className="absolute bottom-0">
                            <form action="/auth/signout" method="post">
                                <Button variant="outline" size="icon" type="submit">
                                    <LogoutIcon className="bottom-0 hover:scale-125 transform transition duration-500"></LogoutIcon>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

type EntryProps = {
    title: string;
}

const Entry: React.FunctionComponent<EntryProps> = ({ title }) => {
    return (
        <div className="pb-2">
            <Button variant="ghost" className="w-full justify-start bg-[#272727]">
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
                {title}
            </Button>
        </div>
    )
}