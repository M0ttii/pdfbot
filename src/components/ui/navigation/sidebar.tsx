'use client'
import { buttonVariants } from "@/components/ui/button"

import Link from "next/link";
import { useState } from "react";
import { Button } from "../button";
import { PlusIcon } from "@radix-ui/react-icons";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import LogoutIcon from "@/components/auth/logout";

var url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
var anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(url, anon)

export async function signOut() {
    const signOut = await supabase.auth.signOut();
}

export default function Sidebar() {
    return (
        <>
            <div className="bg-gradient-to-r from-[#1B1B1B] to-[#111111] top-0 left-0 h-screen w-16 flex flex-col items-center">
                <div className="absolute bottom-10">
                    <form action="/auth/signout" method="post">
                        <Button variant="outline" size="icon" type="submit">
                            <LogoutIcon className="bottom-0 hover:scale-125 transform transition duration-500"></LogoutIcon>
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
