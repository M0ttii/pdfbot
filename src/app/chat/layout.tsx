import Secondbar from "@/components/ui/navigation/secondbar";

export default function ChatLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex bg-black w-full h-full p-3">
            <Secondbar></Secondbar>
            <main className="w-full">{children}</main>
        </div>
    );
}