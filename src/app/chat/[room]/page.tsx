import ContentContainer from "@/components/chat/ContentContainer";
import Secondbar from "@/components/ui/navigation/secondbar";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Conversation, RealDatabase } from "../../../../types/supabase";

export default async function Chat({params}: {params: {room: string}}) {

    console.log(params.room)
    return (
        <>
            <ContentContainer conversation_id={params.room}></ContentContainer>
        </>    
    )
}



export async function generateStaticParams() {
    const supabase = createClientComponentClient<RealDatabase>();
    const {data, error} = await supabase.from("conversations").select('*');
   
    if(data){
        return data.map((conversation) => ({
          room: conversation.id,
        }))
    }
  }

