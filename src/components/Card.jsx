import React from 'react'
import './Card.css'

function Card(props) {
    return(
        <div>
            <div className="card text-center">

                <div className="overflow">
                    <img src={props.image} alt="" className="card-img-top"/>
                </div>

                <div className="card-body text-dark">

                    <h4 className="card-title">{props.title}</h4>

                    <p className="card-text text-secondary">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam totam eveniet sint sunt magni molestias, eligendi et praesentium iure. Quas.
                    </p>

                    <a href="/" className="btn btn-outline-success">Go Get 'em</a>
                </div>

            </div>
        </div>
    )
}

export default Card