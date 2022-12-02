import React, { ReactElement } from "react";
import { IconTypo } from 'mainTypings'


export function SidebarIcon(props: { obj:ReactElement, text?:IconTypo["text"], clName?:IconTypo["text"] }) {
    
    let realCname = 'sidebar-icon group';
    
    realCname += (props.clName)? ' ' + props.clName: '';

    return(
        <div className={realCname}>
            { props.obj }
            <span className="sidebar-tooltip group-hover:scale-100">
                { props.text }
            </span>
        </div>
    )
}