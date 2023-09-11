import ContentContainer from "@/components/chat/ContentContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Secondbar from "@/components/ui/navigation/secondbar";
import Sidebar from "@/components/ui/navigation/sidebar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Inter } from 'next/font/google'
import { cookies } from "next/headers";
import { Database } from "../../../types/supabase";

const inter = Inter({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
})

type Conversation = Database['public']['Tables']['conversations']['Row']

export default async function Chat() {
    const supabase = createServerComponentClient({ cookies });

    const {data, error} = await supabase.from("conversations").select().returns<Conversation>();

    if (error){
        console.log("Error: " + error)
    }
    console.log("Data: " + data)
    console.log("dfsdfsdf");

    return (
        <>
            <Sidebar></Sidebar>
            <div className="flex bg-black w-full h-full p-3">
                <Secondbar></Secondbar>
                <ContentContainer></ContentContainer>
            </div>
        </>
        // <main className="flex min-h-screen flex-col bg-[#343541] items-center justify-between lg:flex p-10">
        //     <div className="col-start-2 row-start-2 bg-white"></div>
        //     <div className="flex w-full pl-80 pr-80">
        //         <Input className="bg-[#40414F] border-0 drop-shadow p-8 placeholder:red" placeholder="Ask a question"></Input>
        //     </div>
        // </main>
        
    )
}