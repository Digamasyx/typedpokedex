import React from "react";



export function StartPage(props: { defaultClass?:string }) {

    let defaultClass = '';

    if (!props.defaultClass) defaultClass = '';
    else defaultClass = props.defaultClass;

    return(

        <div className={ defaultClass }>
            <div className="content-list">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo omnis, molestiae, sunt quia maxime, ipsum magni est architecto nam corrupti officia iusto atque! Debitis voluptas qui magnam doloribus amet! Harum?
            </div>
        </div>
    )
}