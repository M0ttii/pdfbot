import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
})

export default function Chat(){
    return ( 
        <main className="flex min-h-screen flex-col bg-[#161618] items-center justify-between lg:flex p-10">
            <div className="flex w-full h-14 justify-between items-center bg-[#191919] p-5">
                <span className="{inter.className} text-white">Hallo</span>
            </div>
            <div className="col-start-2 row-start-2 bg-white"></div>
            <Input className="ml-40 mr-40"></Input>
        </main>
    )
}