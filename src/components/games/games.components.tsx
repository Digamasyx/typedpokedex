import { useEffect } from "react"


export const Games = (props: {defaultClass?:string, title:string}) => {
    
    useEffect(() => {
        document.title = props.title
    })

    return(
        <main className={ (props.defaultClass)?? 'content-container' }>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde deserunt, sint numquam architecto commodi ad. Tenetur atque accusantium obcaecati assumenda perferendis, excepturi neque aliquid in possimus, alias et facilis harum?

            <p>
                { Math.floor(Math.random() * 10^10 - 1) + 1 }
            </p>
        </main>
    )

}