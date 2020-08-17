import React from 'react'
import Card from './Card'
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpeg'

function Cards() {
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card image={img1}/>
                </div>
                <div className="col-md-4">
                    <Card image={img2}/>
                </div>
                <div className="col-md-4">
                    <Card image={img3}/>
                </div>
            </div>
        </div>
    )
}

export default Cards