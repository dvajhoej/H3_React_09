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
          throw new Error('Fejl ved indlæsning af produkter.')
        }

        const data = await response.json()
        setProducts(data.products ?? [])
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError('Kunne ikke indlæse produkter.')
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
      <h2>PRODUKTER</h2>
      <input
        className="products-search"
        type="text"
        placeholder="Søg efter vare..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {isLoading && <p>Indlæser produkter...</p>}
      {error && <p>{error}</p>}

      {!isLoading &&
        !error &&
        filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}

      {!isLoading && !error && filteredProducts.length === 0 && <p>Ingen produkter fundet.</p>}
    </section>
  )
}

export default Products
