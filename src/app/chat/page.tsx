import ContentContainer from "@/components/chat/ContentContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Secondbar from "@/components/ui/navigation/secondbar";
import Sidebar from "@/components/ui/navigation/sidebar";
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
})

export default function Chat() {
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