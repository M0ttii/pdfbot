import { Inter } from 'next/font/google'
import DotsSvg from './dots';
import { ModeToggle } from './togglebutton';

const inter = Inter({
    weight: ['500', '400'],
    style: ['normal'],
    subsets: ['latin'],
})

const Navbar = () => {
    return (    
        <div className="flex flex-row w-full h-14 absolute top-0 items-center bg-[#242424] border-b-[1px] border-indigo-500 z-12">
            <div className="container-fluid p-4 flex items-center">
                <DotsSvg></DotsSvg>
                <span className="{inter.className} text-white ml-4 font-light">pdfBot</span>
                <div className="absolute right-0 mr-5">
                    <ModeToggle></ModeToggle>
                </div>
            </div>
        </div>
    )
};

export default Navbar;