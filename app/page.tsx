import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gold font-sans">
      {/* Header */}
      <header className="py-8 text-center">
        <Image 
          src="/logo.png" 
          alt="Seyi's Signature Furniture Logo" 
          width={120} 
          height={120} 
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-yellow-500">Seyi's Signature Furniture</h1>
        <p className="text-lg italic text-yellow-400">
          Distinct Designs. Crafted to Perfection.
        </p>
      </header>

      {/* Hero Banner */}
      <section className="flex flex-col items-center justify-center py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Luxury Custom Furniture for Homes & Offices
        </h2>
      </section>

      {/* Services */}
      <section className="py-12 px-8 bg-black text-white">
        <h3 className="text-2xl font-bold mb-6 text-yellow-500">Our Services</h3>
        <ul className="space-y-4">
          <li>🛋️ Custom Furniture Design</li>
          <li>💼 Office Interiors</li>
          <li>🛠️ Repairs & Restorations</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-8 bg-gray-800 text-white">
        <h3 className="text-2xl font-bold mb-6 text-yellow-500">Why Choose Us?</h3>
        <ul className="space-y-4">
          <li>🔨 Signature Craftsmanship – Handcrafted with precision & care</li>
          <li>💎 Unique Designs – Furniture tailored to your style</li>
          <li>🛡️ Premium Quality – Elegant, durable & timeless</li>
        </ul>
      </section>

      {/* Contact */}
      <footer className="py-12 px-8 bg-black text-center text-white">
        <p className="text-lg mb-2">📞 0815 407 3174 | 0807 263 5232</p>
        <p className="mb-2">📍 Victoria Island, Lagos</p>
        <p className="text-yellow-400">Book a consultation today & bring your vision to life.</p>
      </footer>
    </div>
  );
}
