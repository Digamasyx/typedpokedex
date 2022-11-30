import React from "react";
import './sidebar.component.css';
import { TfiAgenda } from 'react-icons/tfi';
import { SiAdafruit } from 'react-icons/si'
import { SidebarIcon } from "./subcompoents/sidebarIcon.component";

export function Sidebar() {

    return(
        <div className="sidebar-main">
            <SidebarIcon obj={<TfiAgenda size="28" />} />
            <SidebarIcon obj={<SiAdafruit size="28" />} /> 
        </div>
    )
}
