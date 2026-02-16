import { useLocation, useNavigate, useParams } from 'react-router-dom'

function SingleProduct() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const product = location.state?.product
  const hasMatchingProduct = product && String(product.id) === id

  return (
    <section className="single-product-page">
      <button
        type="button"
        className="single-product-back-button"
        onClick={() => navigate('/products')}
      >
        Tilbage til produkter
      </button>

      {!hasMatchingProduct && <p>Ingen produktdata fundet. Gå tilbage og åbn et produkt fra listen.</p>}

      {hasMatchingProduct && (
        <article className="single-product-card">
          <h3>{product.title}</h3>
          {product.images?.[0] && (
            <img
              className="single-product-image"
              src={product.images[0]}
              alt={product.title}
              loading="lazy"
            />
          )}
          <p>{product.description}</p>
          <p>Pris: {product.price.toPrecision(2) * 6.5} DKK</p>
          {product.brand && <p>Mærke: {product.brand}</p>}
        </article>
      )}
    </section>
  )
}

export default SingleProduct
