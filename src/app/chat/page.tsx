'use client'
import ContentContainer from "@/components/chat/ContentContainer";
import Secondbar from "@/components/ui/navigation/secondbar";
import { Inter } from 'next/font/google'
import { Conversation, RealDatabase } from "../../../types/supabase";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const inter = Inter({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
})

export default async function Chat() {
    

    return (
        <>
        <ContentContainer conversation_id={"0"}></ContentContainer>
        </>
        // <main className="flex min-h-screen flex-col bg-[#343541] items-center justify-between lg:flex p-10">
        //     <div className="col-start-2 row-start-2 bg-white"></div>
        //     <div className="flex w-full pl-80 pr-80">
        //         <Input className="bg-[#40414F] border-0 drop-shadow p-8 placeholder:red" placeholder="Ask a question"></Input>
        //     </div>
        // </main>
        
    )
}