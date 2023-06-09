import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Home(){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(async res => await res.json())
        .then(data => setPosts(data.products))
    }, [])

    return(
        <div className="container">
            {posts.map((post, i) =>
                <ProductCard post = {post}/>
//Added to PRODUCT CARD
/*             <div className = "card" key={i}> 
                <h1>{post.title}</h1>
                <img src={post.images[0]}></img>
                <p>{post.description}</p>
                <p>Price: ${post.price}</p>
                <p>Discount: {post.discountPercentage} %</p>
            </div> */
            )}
        </div>
    )
}

export default Home