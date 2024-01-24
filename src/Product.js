import React from 'react'

/* primer forma con properties o propiedades
const Product = (props) =>{
    return(
        <div>
            <img src={props.img} width="300px" height="400px" alt="image1"></img>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.precio}</p>
        </div>
    )

}
*/
//destructurando
const Product = ({img, title, description, precio}) =>{
    return(
        <div>
            <img src={img} width="300px" height="400px" alt="image1"></img>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{precio}</p>
        </div>
    )

}


export default Product