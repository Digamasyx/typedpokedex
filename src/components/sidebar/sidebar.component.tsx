import { TfiAgenda } from 'react-icons/tfi';
import { SiAdafruit } from 'react-icons/si';
import { BsPinMap, BsDisc } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import { GiChest } from 'react-icons/gi';

import { SidebarIcon } from "./subcompoents/sidebarIcon.component";

export function Sidebar(props: { additionalClass?:string|string[]}) {

    let additionalClass:string|string[] = '';

    if (!props.additionalClass) additionalClass = '';
    else if (Array.isArray(props.additionalClass)) {
        additionalClass = props.additionalClass.join(' ')
    } else if (!Array.isArray(props.additionalClass)) {
        additionalClass = props.additionalClass
    }


    return(
        <aside className={"sidebar-main " + additionalClass}>
            <SidebarIcon obj={<TfiAgenda size="28" />} text={'Overview'} />
            <Divider />
            <SidebarIcon obj={<SiAdafruit size="28" />} text={'Berries'} /> 
            <SidebarIcon obj={<BsPinMap size="26" />} text={'Locations'} />
            <SidebarIcon obj={<FaGamepad size="28" />} text={'Games'}/>
            <SidebarIcon obj={<GiChest size="28" />} text={'Items'}/>
            <SidebarIcon obj={<BsDisc size="28" />} text={'Machines'}/>
        </aside>
    )
}

const Divider = () => <hr className="sidebar-hr" />
