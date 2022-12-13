import { useEffect } from "react"
import { Card } from "../wrapper"


export const Locations = (props: { defaultClass?:string, title:string }) => {

    useEffect(() => {
        document.title = props.title
    })

    return(
        <div className={ (props.defaultClass)?? 'content-container' }>
            <Card page="locations"/>
        </div>
    )
}