import "./Product.css"

export default function Product({title, description}){
    return(
        <div>
            <h2> Snipe Interview Assignment !</h2>

            <h3>Title: {title}</h3>
            <h3>{description} </h3>


            <button>Add to Cart</button>
            <button>Buy Now and Pay</button>

        </div>
    )
}