'use client'
import { useState } from "react";
import SideMenu from "./SideMenu";
import { usePathname } from "next/navigation";

export default function SideMenuContainer() {
    const [collapsed, setCollapsed] = useState(false);

    const pathname = usePathname();

    return (
        <>
            {pathname === '/preview' ? <></> :

                <div className={`relative flex flex-col h-screen ${collapsed ? 'w-16' : 'w-[250px]'}  z-40`}>
                    <SideMenu collapsed={collapsed} setCollapsed={setCollapsed} />
                </div>
            }
        </>
    )
}