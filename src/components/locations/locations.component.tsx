import { useEffect } from "react"


export const Locations = (props: { defaultClass?:string, title:string }) => {

    useEffect(() => {
        document.title = props.title
    })

    return(
        <div className={ (props.defaultClass)?? 'content-container' }>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur unde accusamus aspernatur? Consectetur laudantium, sed quos voluptate cupiditate, libero consequuntur consequatur tenetur enim eos neque doloribus nam ratione delectus.
            <p>
                { Math.floor(Math.random() * 10^10 - 1) + 1 }
            </p>
        </div>
    )
}