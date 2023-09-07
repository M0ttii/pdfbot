import { PropsWithChildren } from "react";
import Navbar from "./navigation/navbar";
import Sidebar from "./navigation/sidebar";

const Layout = (props: PropsWithChildren) => {
    return (
        <>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        </>
    )
}

export default Layout;