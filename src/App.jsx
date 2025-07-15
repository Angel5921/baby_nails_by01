import React, { useState } from 'react';
import { Sparkles, Instagram, Facebook, Mail } from 'lucide-react';

const initialNails = [
  {
    id: 1,
    title: 'Estilo Azul con Mariposas',
    image: '/uñas_azules_diseño_mariposas.jpeg',
    description: 'Diseño elegante con tonos claros azules, con mariposas.',
  },
  {
    id: 2,
    title: 'Uñas elegantes',
    image: '/uñas_acrilicas.jpeg',
    description: 'Colores lindos, ideales para el verano.',
  },
  {
    id: 3,
    title: 'Uñas Gellish',
    image: '/uñas_gelish.jpg',
    description: 'Estilo sencillo pero con una preciosa vista',
  },
  {
    id: 4,
    title: 'Uñas rojas',
    image: '/uñas_rojas_esmalte.png',
    description: 'Un estilo reluciente con un esmalte rojo muy llamativo',
  },
  {
    id: 5,
    title: 'Uñas estilo Frances',
    image: '/uñas_estilo_frances.jpg',
    description: 'Gran belleza tan unica en un estilo lindo como lo es el estilo frances',
  },
  {
    id: 6,
    title: 'Uñas decoradas con piedras',
    image: '/uñas_decoradas_piedreria.jpg',
    description: 'Piedras pequeñas como llamativas en uñas acrilicas',
  },
];

export default function App() {
  const [nails, setNails] = useState(initialNails);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedNail, setSelectedNail] = useState(null);

  const addNail = () => {
    if (!title || !image) return alert('Por favor, completa título e imagen.');
    const newNail = {
      id: nails.length + 1,
      title,
      image,
      description,
    };
    setNails([...nails, newNail]);
    setTitle('');
    setImage('');
    setDescription('');
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-fuchsia-200 p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center items-center gap-3">
            <Sparkles className="text-rose-500 w-8 h-8 animate-pulse" />
            <h1 className="text-5xl font-extrabold text-rose-700 drop-shadow-lg">baby_nails_by01</h1>
            <Sparkles className="text-rose-500 w-8 h-8 animate-pulse" />
          </div>
          <p className="text-lg text-gray-700 mt-3">Descubre los estilos más trendy para tus uñas</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {nails.map((nail) => (
            <div key={nail.id} className="rounded-3xl shadow-lg border border-rose-300 bg-white hover:scale-105 transition-transform duration-300">
              <img src={nail.image} alt={nail.title} className="w-full h-60 object-cover rounded-t-3xl cursor-pointer" onClick={() => setSelectedNail(nail)} />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-rose-600">{nail.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{nail.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-rose-700 mb-4">¿Te gustó un diseño?</h3>
          <p className="text-gray-700 mb-6">Agenda tu cita ahora mismo por WhatsApp y luce tus uñas soñadas 💅</p>
          <a
            href="https://wa.me/525577816636"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 sm:text-lg rounded-full shadow-lg transition"
          >
            Agenda tu cita
          </a>
        </div>
        {selectedNail && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-4 sm:p-6 max-w-[90%] sm:max-w-lg w-full shadow-2x1 relative">
      <button
        onClick={() => setSelectedNail(null)}
        className="absolute top-2 right-2 text-rose-600 hover:text-rose-800 text-xl font-bold"
      >
        ✕
      </button>
      <img src={selectedNail.image} alt={selectedNail.title} className="w-full rounded-lg mb-4" />
      <h2 className="text-2xl font-bold text-rose-700">{selectedNail.title}</h2>
      <p className="text-gray-600 mt-2">{selectedNail.description}</p>
    </div>
  </div>
)}
        <footer id="contacto" className="mt-20 text-center text-gray-700">
          <p className="mb-4 text-sm">© {new Date().getFullYear()} baby_nails_by01. Todos los derechos reservados.</p>
           {/* Nuevo letrero de contacto */}
          <p className="text-base font-medium text-rose-600 mb-2">Contáctanos</p>
          <div className="flex justify-center gap-6 text-rose-600">
            <a href="https://instagram.com/baby_nails_by01" target="_blank" rel="noopener noreferrer" className="hover:text-rose-800"><Instagram size={28} /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}