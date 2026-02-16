import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'

function Products() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadProducts() {
      try {
        setIsLoading(true)
        setError('')

        const response = await fetch('https://dummyjson.com/products', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('Request failed')
        }

        const data = await response.json()
        setProducts(data.products ?? [])
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError('Could not load products.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()

    return () => controller.abort()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section>
      <h2>Products</h2>
      <input
        className="products-search"
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {isLoading && <p>Loading products...</p>}
      {error && <p>{error}</p>}

      {!isLoading &&
        !error &&
        filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}

      {!isLoading && !error && filteredProducts.length === 0 && <p>No products found.</p>}
    </section>
  )
}

export default Products
