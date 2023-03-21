function ProductCard(post){
    return(
        <a href={"/products/" + post.post.id}/*  className = "card" */ /* key={i} */>
            <div className = 'container'>
                <div className="card">
                <h1>{post.post.title}</h1>
                <img src={post.post.images[0]} alt=""></img>
                <p>{post.post.description}</p>
                <p>Price: ${post.post.price}</p>
                <p>Discount: {post.post.discountPercentage} %</p>
                </div>
            </div>
        </a>
    )
}

export default ProductCard