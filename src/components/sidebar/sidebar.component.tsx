import React from "react";
import { TfiAgenda } from 'react-icons/tfi';
import { SiAdafruit } from 'react-icons/si';
import { BsPinMap } from 'react-icons/bs';
import { SidebarIcon } from "./subcompoents/sidebarIcon.component";

export function Sidebar(props: { additionalClass?:string}) {

    let additionalClass = '';

    if (!props.additionalClass) additionalClass = '';
    else additionalClass = props.additionalClass;

    return(
        <div className={"sidebar-main " + additionalClass}>
            <SidebarIcon obj={<TfiAgenda size="28" />} text={'Overview'} />
            <Divider />
            <SidebarIcon obj={<SiAdafruit size="28" />} text={'Berries'} /> 
            <SidebarIcon obj={<BsPinMap size="26" />} text={'Locations'} />
        </div>
    )
}

const Divider = () => <hr className="sidebar-hr" />
