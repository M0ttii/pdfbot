'use client'

import { Inter } from 'next/font/google';
import { Input } from '../ui/input'
import Dropzone, { useDropzone } from 'react-dropzone'
import { useCallback, useEffect, useState } from 'react';
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Conversation, RealDatabase, Tables } from '../../../types/supabase';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { conversationAtom } from '@/store';

const inter = Inter({
    weight: '300',
    style: ['normal'],
    subsets: ['latin'],
})


//3KpCAz7Hwr5VPscU
const ContentContainer: React.FunctionComponent<ContentProps> = ({ conversation_id}) => {
    const posts = [];
    const [data, setData] = useAtom(conversationAtom)

    if (conversation_id == "0") {
        if (posts.length == 0) {
            return <>
                <div className={" h-full w-full flex flex-col bg-gradient-to-r from-[#141414] to-[#0F0F0F] rounded-lg"}>
                    <div className="contentList flex flex-col items-center justify-center h-full w-full">
                        <MyDropzone />
                    </div>
                    <div className="flex w-full pl-80 pr-80">
                        <Input className="bg-[#1A1A1A] border-0 drop-shadow p-8 placeholder:text-[#BBBBBB]/50" placeholder="Ask a question"></Input>
                    </div>

                </div>
            </>
        }
    }
    if (data) {
        const acceptedIDs = data.map(conversation => conversation.id)
        if (acceptedIDs.includes(parseInt(conversation_id))) {
            return <>
                <div className={" h-full w-full flex flex-col bg-gradient-to-r from-[#141414] to-[#0F0F0F] rounded-lg"}>
                    <div className="contentList flex flex-col items-center h-full w-full">
                        <Post origin={originType.You} text={conversation_id.toString()} timeinMin={15}></Post>
                    </div>
                    <div className="flex w-full pl-80 pr-80">
                        <Input className="bg-[#1A1A1A] border-0 drop-shadow p-8 placeholder:text-[#BBBBBB]/50" placeholder="Ask a question"></Input>
                    </div>

                </div>
            </>

        } else {
            return <>
                <div className={" h-full w-full flex flex-col bg-gradient-to-r from-[#141414] to-[#0F0F0F] rounded-lg"}>
                    <div className="contentList flex flex-col items-center h-full w-full">
                        <span>ID nicht vorhanden</span>
                    </div>
                    <div className="flex w-full pl-80 pr-80">
                        <Input className="bg-[#1A1A1A] border-0 drop-shadow p-8 placeholder:text-[#BBBBBB]/50" placeholder="Ask a question"></Input>
                    </div>
                </div>
            </>

        }
    }

    return (
        <div className={" h-full w-full flex flex-col bg-gradient-to-r from-[#141414] to-[#0F0F0F] rounded-lg"}>
            <div className="contentList flex flex-col items-center h-full w-full">
                <span>Lade Daten</span>
            </div>
            <div className="flex w-full pl-80 pr-80">
                <Input className="bg-[#1A1A1A] border-0 drop-shadow p-8 placeholder:text-[#BBBBBB]/50" placeholder="Ask a question"></Input>
            </div>

        </div>
    )
}

const MyDropzone = () => {
    const supabase = createClientComponentClient<RealDatabase>();
    const router = useRouter()
    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach(async (file: File) => {
            const userID = await supabase.auth.getSession().then(session => session.data.session?.user.id)
            console.log("UserID: " + userID)
            await supabase
                .storage
                .from('pdfs')
                .upload(userID?.toString() + "/" + file.name, file)
            const {data, error} = await supabase.from("conversations")
                .insert({ user_id: userID, pdf_path: userID?.toString() + "/" + file.name })
                .select()
            if(data != null){
                router.push('chat/' + data[0].id.toString())
                // useEffect(() => changeData(data))
            }
        })

    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center">
                <AlertSVG></AlertSVG>
                <span className={inter.className + " text-[#fff]/70"}>You dont have any files uploaded.</span>
                <span className={inter.className + " text-[#fff]/70"}>Drop any pdf file here.</span>
            </div>
        </div>
    )
}

function uploadFile() {
    

}

type ContentProps = {
    conversation_id: string,
}

type PostProps = {
    origin: originType,
    text: string,
    timeinMin: number
}

enum originType {
    You = 'You', Ai = 'PDF'
}

const Post: React.FunctionComponent<PostProps> = ({ origin, text, timeinMin }) => {
    if (origin == originType.You) {
        return <>
            <div className="w-1/2 flex flex-row items-center p-3 mt-5">
                <div className='avatar-wrapper flex flex-col items-center w-12 mt-auto ml-1 mb-auto'>
                    <img src={"/pb.png"} alt='' className='avatar flex-none w-20' />
                </div>

                <div className='post-content w-4/5 flex flex-col justify-start ml-3'>
                    <p className='post-owner text-left text-[#E0E0E0] font-semibold text-sm inline-block flex items-center '>
                        {origin}
                        <span className="ml-1 mr-1 w-1 h-1 bg-[#E0E0E0] rounded-full block"></span>
                        <span className='text-sm font-light text-[#E0E0E0]/50'>{timeinMin}m</span>
                    </p>
                    <p className='post-text text-lg text-left text-[#BBBBBB] font-medium text-sm'>{text}</p>
                </div>
            </div>
        </>
    }
    return <>
        <div className="w-1/2 flex flex-row items-center bg-[#1C1C1C]/30 p-3 mt-5 border-[#3F3F3F] border rounded-lg">
            <div className='avatar-wrapper flex flex-col items-center w-12 mt-auto ml-1 mb-auto'>
                <AtomSvg></AtomSvg>
            </div>

            <div className='post-content w-4/5 flex flex-col justify-start ml-3'>
                <p className='post-owner text-left text-[#E0E0E0] font-semibold text-sm inline-block flex items-center '>
                    {origin}
                    <span className="ml-1 mr-1 w-1 h-1 bg-[#E0E0E0] rounded-full block"></span>
                    <span className='text-sm font-light text-[#E0E0E0]/50'>{timeinMin}m</span>
                </p>
                <p className='post-text text-lg text-left text-[#BBBBBB] font-medium text-sm'>{text}</p>
            </div>
        </div>
    </>
};

// const Dropzone = () => {
//     return (
//         <span>Drop files here</span>
//     )
// }

const AtomSvg = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={47}
        height={47}
        fill="none"
        {...props}
    >
        <path
            fill="#CACACA"
            d="M39.094 23.5c3.425-4.057 4.767-8.06 3.168-10.832-1.6-2.772-5.739-3.612-10.964-2.675C29.497 5 26.702 1.836 23.502 1.836c-3.208 0-6.008 3.178-7.808 8.19-.512-.093-1.045-.228-1.538-.287-4.656-.549-8.003.485-9.415 2.929-1.411 2.444-.64 5.86 2.172 9.619.304.407.695.808 1.039 1.213-.344.405-.735.806-1.039 1.213-2.812 3.759-3.582 7.175-2.172 9.619 1.403 1.907 3.638 3.131 6.16 3.131.325 0 .643-.02.958-.058l-.037.004a20.082 20.082 0 0 0 2.432-.156l-.097.01c.494-.058 1.027-.195 1.538-.287 1.8 5.013 4.6 8.191 7.808 8.191 3.2 0 5.995-3.164 7.796-8.156 1.146.225 2.47.361 3.823.373h.01a7.72 7.72 0 0 0 7.12-3.03l.016-.019c1.6-2.772.254-6.775-3.171-10.832l-.003-.003Zm-3.935-11.672c2.604 0 4.47.681 5.195 1.942.994 1.72-.068 4.747-2.792 8.061a39.045 39.045 0 0 0-4.371-3.792l-.103-.073a38.751 38.751 0 0 0-1.187-6.12l.065.271c.955-.175 2.058-.279 3.184-.29h.009Zm-7.803 18.348a46.175 46.175 0 0 1-3.87 1.985 45.757 45.757 0 0 1-3.841-1.986 46.358 46.358 0 0 1-3.653-2.357 46.105 46.105 0 0 1 0-8.638 46.14 46.14 0 0 1 3.652-2.358 46.015 46.015 0 0 1 3.853-1.98c1.287.59 2.576 1.24 3.858 1.98 1.31.756 2.52 1.546 3.652 2.351a45.778 45.778 0 0 1 0 8.653 45.67 45.67 0 0 1-3.652 2.35Zm3.263.581a33.978 33.978 0 0 1-.872 3.908l.06-.242a33.407 33.407 0 0 1-3.861-1.226l.234.079c.761-.388 1.524-.755 2.279-1.19.746-.43 1.46-.877 2.16-1.329Zm-9.85 2.54c-.925.37-2.114.759-3.33 1.085l-.243.054a30.816 30.816 0 0 1-.796-3.525l-.028-.202c.717.465 1.415.941 2.17 1.377.743.43 1.484.833 2.225 1.21h.001Zm-7.113-7.26a35.094 35.094 0 0 1-2.784-2.533l-.005-.004a34.94 34.94 0 0 1 2.728-2.488l.061-.049c-.042.832-.07 1.676-.07 2.537 0 .86.028 1.704.07 2.537Zm4.887-11.123c-.755.436-1.454.912-2.17 1.377.244-1.483.532-2.742.885-3.971l-.06.244a34.04 34.04 0 0 1 3.813 1.223l-.237-.08c-.742.378-1.486.776-2.231 1.207Zm7.624-1.196a30.38 30.38 0 0 1 3.402-1.085l.238-.053c.288.965.57 2.201.784 3.46l.028.203c-.7-.452-1.416-.899-2.162-1.33-.758-.437-1.524-.806-2.29-1.196v.001Zm7.178 7.266a34.573 34.573 0 0 1 2.75 2.512l.004.004a34.754 34.754 0 0 1-2.695 2.468l-.059.047c.043-.826.07-1.662.07-2.515 0-.853-.027-1.69-.07-2.516ZM23.5 4.039c1.993 0 4.107 2.4 5.618 6.438a38.101 38.101 0 0 0-5.9 2.065l.245-.099c-1.535-.7-3.39-1.372-5.303-1.902l-.276-.064c1.51-4.038 3.623-6.438 5.616-6.438ZM6.646 13.77a5.68 5.68 0 0 1 5.195-1.97l-.03-.003c.736.003 1.46.05 2.169.14l-.087-.01c.364.044.76.15 1.135.213-.474 1.657-.868 3.647-1.103 5.686l-.016.179a39.72 39.72 0 0 0-4.484 3.84l.001-.002c-.242-.293-.531-.583-.75-.876-2.22-2.965-2.96-5.588-2.03-7.197Zm7.247 21.303c-3.673.436-6.319-.235-7.247-1.842-.93-1.61-.19-4.231 2.028-7.196.22-.293.509-.583.751-.876A39.715 39.715 0 0 0 13.8 28.92l.108.075a38.438 38.438 0 0 0 1.185 6.136l-.065-.272c-.374.063-.77.17-1.134.213h-.001Zm9.607 7.889c-1.993 0-4.107-2.4-5.618-6.438a38.922 38.922 0 0 0 5.827-2.066l-.25.1c1.563.71 3.444 1.38 5.387 1.906l.27.062c-1.51 4.038-3.624 6.436-5.616 6.436Zm16.857-9.73c-.997 1.728-4.135 2.358-8.388 1.646.473-1.65.866-3.632 1.103-5.662l.017-.18a39.039 39.039 0 0 0 4.473-3.865l.003-.003c2.723 3.315 3.786 6.34 2.793 8.062l-.001.002ZM23.5 19.46a4.039 4.039 0 1 0 0 8.077 4.039 4.039 0 0 0 0-8.077Zm0 5.875a1.837 1.837 0 1 1 .001-3.673 1.837 1.837 0 0 1-.001 3.673Z"
        />
    </svg>
)

const AlertSVG = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={60}
        fill="none"
        {...props}
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.8}
            strokeWidth={2.5}
            d="M30 22.5v10m0 10h.024M26.538 9.73 5.975 45.245c-1.14 1.97-1.71 2.955-1.626 3.763a2.5 2.5 0 0 0 1.016 1.763c.658.478 1.796.478 4.072.478h41.125c2.276 0 3.414 0 4.072-.478a2.5 2.5 0 0 0 1.016-1.763c.084-.808-.486-1.793-1.627-3.763L33.461 9.729c-1.136-1.963-1.704-2.944-2.446-3.274a2.5 2.5 0 0 0-2.031 0c-.742.33-1.31 1.311-2.446 3.274Z"
        />
    </svg>
)

export default ContentContainer;