import { Input } from '../ui/input'
import styles from './ContentContainer.module.css'
import AtomSvg from './atomsvg'

//3KpCAz7Hwr5VPscU
const ContentContainer = () => {
    return (
        <div className={styles.contentContainer + " h-full w-full flex flex-col bg-gradient-to-r from-[#141414] to-[#0F0F0F] rounded-lg"}>
            <div className="contentList flex flex-col items-center h-full w-full">
                <Post origin={originType.You} text='dfs' timeinMin={15}></Post>
                <Post origin={originType.Ai} text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum' timeinMin={15}></Post>
                <Post origin={originType.You} text='dfs' timeinMin={15}></Post>
                <Post origin={originType.Ai} text='dfs' timeinMin={15}></Post>
                <Post origin={originType.You} text='dfs' timeinMin={15}></Post>
            </div>
            <div className="flex w-full pl-80 pr-80">
                <Input className="bg-[#1A1A1A] border-0 drop-shadow p-8 placeholder:text-[#BBBBBB]/50" placeholder="Ask a question"></Input>
            </div>

        </div>
    )
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
    const seed = Math.round(Math.random() * 100);
    if (origin == originType.You) {
        return <>
            <div className="w-1/2 flex flex-row items-center p-3 mt-5">
                <div className='avatar-wrapper flex flex-col items-center w-12 mt-auto ml-1 mb-auto'>
                    <img src={"/pb.png"} alt='' className='avatar flex-none w-20' />
                </div>

                <div className='post-content w-4/5 flex flex-col justify-start ml-3'>
                    <p className='post-owner text-left text-[#E0E0E0] font-semibold text-sm inline-block flex items-center '>
                        {origin}
                        <div className="ml-1 mr-1 w-1 h-1 bg-[#E0E0E0] rounded-full"></div>
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
                    <div className="ml-1 mr-1 w-1 h-1 bg-[#E0E0E0] rounded-full"></div>
                    <span className='text-sm font-light text-[#E0E0E0]/50'>{timeinMin}m</span>
                </p>
                <p className='post-text text-lg text-left text-[#BBBBBB] font-medium text-sm'>{text}</p>
            </div>
        </div>
    </>
};

export default ContentContainer;