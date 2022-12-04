import { useEffect } from "react"


export function Overview(props: { defaultClass?:string, title:string }) {

    useEffect(() => {
        document.title = props.title
    })

    return(

        <main className={ (props.defaultClass)?? 'content-container' }>
            <div className="content-list">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo omnis, molestiae, sunt quia maxime, ipsum magni est architecto nam corrupti officia iusto atque! Debitis voluptas qui magnam doloribus amet! Harum?
                <p>
                { Math.floor(Math.random() * 10^10 - 1) + 1 }
                </p>
            </div>
        </main>
    )
}