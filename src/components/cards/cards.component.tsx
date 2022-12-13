
export function Card(props: { page:string }) {

    return(
        <div className="card-container">
            <div className="card-body">
                <a href="" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" className="card-img" />
                </a>
                <div className="card-text">
                    <h5 className="card-title">Lorem</h5>
                    <p className="card-content">Actual Page <b>{props.page}</b></p>
                    <button className="card-btn">Lorem</button>
                </div>
            </div>
        </div>
    )
}