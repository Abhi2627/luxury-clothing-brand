export default function Home() {
  const products = [
    { id: 1, name: "Silk Cashmere Blend", price: 299, image: "/api/placeholder/400/500", category: "Women" },
    { id: 2, name: "Italian Leather Jacket", price: 899, image: "/api/placeholder/400/500", category: "Men" },
    { id: 3, name: "Satin Evening Gown", price: 499, image: "/api/placeholder/400/500", category: "Women" },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-black to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Luxury Redefined
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Curated collection of premium fashion for the discerning.
          </p>
          <button className="bg-white text-black px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
            Shop New Arrivals
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Collection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="h-96 bg-linear-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  {/* Placeholder image fallback */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Luxury Product
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-sm bg-black text-white px-3 py-1 rounded-full">{product.category}</span>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-gray-900">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
