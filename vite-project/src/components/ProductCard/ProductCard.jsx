import './ProductCard.css'

function ProductCard({ product }) {
  const { title, price, description, images = [] } = product
  const primaryImage = images[0]

  return (
    <article className="product-card">
      <div className="product-card-info">
        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-price">${price}</p>
        <p className="product-card-description">{description}</p>
      </div>
      <div className="product-card-media">
        {primaryImage && (
          <img
            className="product-card-image"
            src={primaryImage}
            alt={`${title} image`}
            loading="lazy"
          />
        )}
      </div>
    </article>
  )
}

export default ProductCard
