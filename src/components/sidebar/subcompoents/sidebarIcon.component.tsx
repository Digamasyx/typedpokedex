import React from "react";


export function SidebarIcon({ obj, text }:any) {
    return(
        <div className="sidebar-icon group">
            { obj }
            <span className="sidebar-tooltip group-hover:scale-100">
                { text }
            </span>
        </div>
    )
}