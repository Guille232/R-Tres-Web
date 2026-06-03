import React, { useState } from 'react';

// Catálogo completo con tus imágenes reales, edades y tallas
const initialProducts = [
  { id: 1,  name: "Combo Verano Niña (3 piezas)",  price: 1250, category: "niña",  age: "bebes",    sizes: "6M, 12M, 18M",     image: "/img/falda-de-nina.png",         stock: true  },
  { id: 2,  name: "Set Casual Niño",               price: 1500, category: "niño",  age: "pequeños", sizes: "2T, 4T, 6T",       image: "/img/ropadenino.png",            stock: true  },
  { id: 3,  name: "Vestido Floral Primavera",      price: 950,  category: "niña",  age: "pequeños", sizes: "4T, 6T, 8T",       image: "/img/falda-para-nina2.jpg",      stock: true  },
  { id: 4,  name: "Combo Deportivo Niña",          price: 1800, category: "niña",  age: "grandes",  sizes: "10, 12, 14",       image: "/img/deportivonina.png",         stock: false },
  { id: 5,  name: "Shorts de Denim Niña",          price: 800,  category: "niña",  age: "grandes",  sizes: "10, 12",           image: "/img/pantalon-de-nina.png",      stock: true  },
  { id: 6,  name: "Conjunto Polo y Short Niño",    price: 1600, category: "niño",  age: "bebes",    sizes: "9M, 12M, 24M",     image: "/img/camisa-mangalarga-nino.png",stock: true  },
  { id: 7,  name: "Romper Estampado Bebé",         price: 1100, category: "niña",  age: "bebes",    sizes: "0-3M, 3-6M, 6-9M", image: "/img/pantalon-para-bebe.jpg",    stock: true  },
  { id: 8,  name: "Ropa para Niña",                price: 1350, category: "niña",  age: "pequeños", sizes: "4T, 6T",           image: "/img/para-nina.png",             stock: false },
  { id: 9,  name: "Ropa Para Bebés",               price: 900,  category: "niña",  age: "bebes",    sizes: "0-3M, 3-6M",       image: "/img/ropa-de-bebe.png",          stock: true  },
  { id: 10, name: "Jeans Infantiles Premium",      price: 1750, category: "niño",  age: "grandes",  sizes: "10, 12, 14, 16",   image: "/img/camisa-para-nino.png",      stock: true  },
];

const ageLabels = {
  todas:    "Cualquier edad",
  bebes:    "Bebés (0-24m)",
  pequeños: "Pequeños (2-6 años)",
  grandes:  "Grandes (7-12 años)",
};

const WA_NUMBER = "18094072965";

function App() {
  const [categoryFilter, setCategoryFilter] = useState('todos');
  const [ageFilter, setAgeFilter]           = useState('todas');

  const filteredProducts = initialProducts.filter(p => {
    const matchCategory = categoryFilter === 'todos' || p.category === categoryFilter;
    const matchAge      = ageFilter === 'todas'      || p.age === ageFilter;
    return matchCategory && matchAge;
  });

  const handleContact = () => {
    const message = "¡Hola! Vengo de la página web y me gustaría obtener más información sobre sus combos infantiles.";
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleWhatsAppOrder = (product) => {
    const message = `¡Hola! Vengo del catálogo web. Me interesa el producto: *${product.name}*. ¿Tienen disponibilidad en talla de las opciones (${product.sizes})?`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
   <div className="min-h-screen font-sans gradient-bg">

      {/* ── Navbar ── */}
           {/* ── Navbar Mejorado ── */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-orange/10 shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

          {/* Logo + Nombre */}
          <div className="flex items-center gap-3 md:gap-4 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="relative">
              <img
                src="/img/logo-rtres.png"
                alt="R TRES Logo"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-orange object-cover shadow-md"
              />
              {/* Pequeño punto indicador de estado online */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="font-display text-xl md:text-2xl text-brand-brown font-bold tracking-tight leading-none">
                R TRES
              </h1>
              <span className="text-xs md:text-sm text-brand-orange font-semibold tracking-wider uppercase">
                Combos Infantiles
              </span>
            </div>
          </div>

          {/* Botón Contáctanos → WhatsApp */}
          <button
            onClick={handleContact}
            className="group relative flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all shadow-[0_4px_14px_rgba(34,197,94,0.3)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.4)] hover:-translate-y-0.5"
          >
            {/* Ícono de WhatsApp animado */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.561 4.14 1.535 5.874L.057 23.5l5.803-1.519A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.95 0-3.784-.504-5.378-1.383l-.385-.229-3.442.902.918-3.352-.251-.399A9.947 9.947 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            <span className="hidden sm:inline">Contáctanos</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>

        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-brand-pink/20 pt-32 pb-12 md:pt-40 md:pb-16 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-display text-brand-brown mb-4 font-bold">
          Encuentra su talla ideal
        </h2>
        <p className="text-gray-700 mb-2 max-w-2xl mx-auto text-lg">
          Moda infantil práctica, cómoda y hermosa.
        </p>
        <p className="text-brand-brown font-semibold text-sm max-w-2xl mx-auto">
          🚚 Envíos a todo RD &nbsp;|&nbsp; 📍 Pick up en Santo Domingo Oeste
        </p>
      </section>

      {/* ── Catálogo ── */}
      <main className="max-w-6xl mx-auto px-4 py-10">

        {/* Filtro 1 — Género */}
        <div className="flex justify-center gap-3 md:gap-6 mb-4 overflow-x-auto pb-2">
          {[
            { value: 'todos', label: 'Todos 📦', active: 'bg-brand-brown text-white border-brand-brown',  inactive: 'bg-white text-brand-brown border-brand-brown/30 hover:border-brand-brown' },
            { value: 'niña',  label: 'Niñas 💖', active: 'bg-brand-pink  text-white border-brand-pink',   inactive: 'bg-white text-brand-pink  border-brand-pink/50  hover:border-brand-pink'  },
            { value: 'niño',  label: 'Niños 👦', active: 'bg-blue-400   text-white border-blue-400',      inactive: 'bg-white text-blue-400   border-blue-400/50   hover:border-blue-400'   },
          ].map(btn => (
            <button
              key={btn.value}
              onClick={() => setCategoryFilter(btn.value)}
              className={`px-6 py-2 rounded-full font-bold border-2 transition-all whitespace-nowrap ${categoryFilter === btn.value ? btn.active : btn.inactive}`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Filtro 2 — Edad */}
        <div className="flex justify-center gap-2 md:gap-4 mb-10 overflow-x-auto pb-4">
          {Object.entries(ageLabels).map(([value, label]) => (
            <button
              key={value}
              onClick={() => setAgeFilter(value)}
              className={`px-4 py-1.5 text-sm rounded-lg font-semibold transition-all whitespace-nowrap ${
                ageFilter === value ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Sin resultados */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-14 text-gray-500 font-semibold text-lg">
            No hay combos disponibles para esta combinación ahora mismo. 👕
          </div>
        )}

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Etiqueta de tallas */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-extrabold text-gray-700 shadow-sm border border-gray-100">
                  Tallas: {product.sizes}
                </div>

                {/* Overlay agotado */}
                {!product.stock && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                    <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                      AGOTADO
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  {product.category} • {ageLabels[product.age]}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="font-display text-xl text-brand-orange font-bold mt-auto mb-4">
                  RD$ {product.price.toLocaleString()}
                </div>

                {product.stock ? (
                  <button
                    onClick={() => handleWhatsAppOrder(product)}
                    className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                  >
                    Pedir por WhatsApp
                  </button>
                ) : (
                  <button disabled className="w-full bg-gray-100 text-gray-400 py-3 rounded-xl font-bold cursor-not-allowed">
                    Sin Stock
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
   {/* ── Footer ── */}
<footer className="bg-brand-brown text-brand-beige mt-12">

  {/* Sección principal del footer */}
  <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

    {/* Columna 1 — Logo y descripción */}
    <div className="flex flex-col items-center md:items-start gap-3">
      <img
        src="/img/logo-rtres.png"
        alt="R TRES Logo"
        className="w-16 h-16 rounded-full border-2 border-brand-orange object-cover"
      />
      <p className="font-display font-bold text-lg">R TRES | Combos Infantiles RD</p>
      <p className="text-sm opacity-70 max-w-xs">
        Moda infantil práctica, cómoda y hermosa para los más pequeños del hogar.
      </p>
    </div>

    {/* Columna 2 — Información de contacto */}
    <div className="flex flex-col items-center md:items-start gap-3">
      <h3 className="font-display font-bold text-base uppercase tracking-wider text-brand-orange">
        Información
      </h3>
      <ul className="space-y-2 text-sm opacity-90">
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <span>📦</span> Combos para niños y niñas
        </li>
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <span>📍</span> Pick up | Santo Domingo Oeste
        </li>
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <span>🚚</span> Envíos a toda RD
        </li>
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <span>📞</span> 809-407-2965
        </li>
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <span>❌</span> No DM, solo WhatsApp
        </li>
      </ul>
    </div>

    {/* Columna 3 — Redes sociales y botón */}
    <div className="flex flex-col items-center md:items-start gap-4">
      <h3 className="font-display font-bold text-base uppercase tracking-wider text-brand-orange">
        Síguenos
      </h3>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/rtres_1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl transition-colors text-sm font-bold"
      >
        {/* Ícono Instagram SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-pink">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
        @rtres_1
      </a>

      {/* WhatsApp */}
      <button
        onClick={handleContact}
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.561 4.14 1.535 5.874L.057 23.5l5.803-1.519A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.95 0-3.784-.504-5.378-1.383l-.385-.229-3.442.902.918-3.352-.251-.399A9.947 9.947 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        Contáctanos por WhatsApp
      </button>
    </div>
  </div>

  {/* Barra inferior */}
  <div className="border-t border-white/10 py-4 text-center text-xs opacity-40">
    Demo interactiva creada por ForbesCore Solutions
  </div>

</footer>
    </div>
  );
}

export default App;