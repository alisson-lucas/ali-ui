'use client'
import { useState } from "react";
import SideMenu from "./SideMenu";

export default function SideMenuContainer() {
  const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`relative flex flex-col h-screen ${collapsed ? 'w-16' : 'w-[250px]'}  z-40`}>
            <SideMenu collapsed={collapsed} setCollapsed={setCollapsed}/>
        </div>
    )
}