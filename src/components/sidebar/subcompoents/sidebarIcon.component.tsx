import { ReactElement } from "react";
import { NavLink } from "react-router-dom";


export function SidebarIcon(props: { obj:ReactElement, text?:string, clName?:string, href?:string }) {

    let altHref:string = 'null';
    let pseudoHref:string = 'null';

    if (!props.href) {
        if (props.text === 'Overview' || typeof props.text === "undefined") altHref = '/'
        else altHref = '/' + props.text?.toLowerCase() +'/' 
    } else {
        pseudoHref = props.href
    }
    
    let realCname = 'sidebar-icon group';
    
    realCname += (props.clName)? ' ' + props.clName: '';

    return(
        <div className={realCname}>
            <NavLink to={ (altHref === 'null')? pseudoHref : altHref }>

                { props.obj }
            </NavLink>
            <span className="sidebar-tooltip group-hover:scale-100">
                { props.text }
            </span>
        </div>
    )
}