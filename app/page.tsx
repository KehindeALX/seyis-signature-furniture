import NavBar from "../components/NavBar"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold text-gold">
        Seyi’s Signature Furniture
      </h1>
      <p className="mt-4 text-lg">
        {/* Product Showcase */}
<section id="products" className="py-12 px-8 bg-gray-900 text-white">
  <h3 className="text-2xl font-bold mb-6 text-yellow-500">Our Collection</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Product 1 */}
    <div className="bg-black rounded-lg shadow-lg overflow-hidden">
      <img src="/chair.jpg" alt="Luxury Chair" className="w-full h-64 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-yellow-400">Luxury Chair</h4>
        <p className="text-sm mt-2">Elegant handcrafted chair for modern living rooms.</p>
      </div>
    </div>

    {/* Product 2 */}
    <div className="bg-black rounded-lg shadow-lg overflow-hidden">
      <img src="/sofa.jpg" alt="Premium Sofa" className="w-full h-64 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-yellow-400">Premium Sofa</h4>
        <p className="text-sm mt-2">Comfort meets style in this timeless sofa design.</p>
      </div>
    </div>

    {/* Product 3 */}
    <div className="bg-black rounded-lg shadow-lg overflow-hidden">
      <img src="/table.jpg" alt="Signature Table" className="w-full h-64 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-yellow-400">Signature Table</h4>
        <p className="text-sm mt-2">Perfect centerpiece for dining or office spaces.</p>
      </div>
    </div>
  </div>
</section>

      </p>
    </main>
  );
}
