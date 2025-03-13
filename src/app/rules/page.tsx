'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShieldAlt, FaUserShield, FaExclamationTriangle, FaInfoCircle, FaArrowLeft, FaDiscord } from 'react-icons/fa';
import Header from '@/components/Header';

export default function Rules() {
  // Añadir un padding-top para compensar el header fijo
  useEffect(() => {
    document.body.classList.add('pt-16');
    return () => {
      document.body.classList.remove('pt-16');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
      <Header />
      
      {/* Hero Section */}
      <div className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-blue-900/70 z-10"></div>
        <div className="relative h-[200px] overflow-hidden">
          <Image 
            src="/fondo.png" 
            alt="Kindly Klan Klub Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 flex items-center justify-center">
              <FaShieldAlt className="text-blue-300 mr-3" /> 
              Normativa
            </h1>
            <p className="text-blue-300 max-w-4xl mx-auto">
              
            </p>
          </div>
        </div>
        
        {/* Decorative wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#0F2042" 
              fillOpacity="1" 
              d="M0,64L48,64C96,64,192,64,288,53.3C384,43,480,21,576,32C672,43,768,85,864,96C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            >
            </path>
          </svg>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Navegación */}
          <div className="mb-8">
            <Link href="/" className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition group w-fit">
              <FaArrowLeft className="transition-transform group-hover:-translate-x-1" /> Volver al inicio
            </Link>
          </div>
          
          {/* Banner de Próximamente */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-xl border border-indigo-400/30 shadow-lg shadow-indigo-900/20 mb-8 animate-pulse">
            <div className="flex flex-col items-center justify-center text-center py-8">
              <div className="bg-indigo-500/30 p-4 rounded-full mb-4">
                <FaExclamationTriangle className="text-4xl text-yellow-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¡Próximamente!</h2>
              <p className="text-indigo-100 text-xl max-w-2xl">
                Kindly Klan Klub aún no se ha lanzado. 
                Estamos trabajando para ofrecerte la mejor experiencia posible.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link 
                  href="https://discord.gg/kindlyklan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 bg-white text-indigo-700 hover:bg-indigo-100 transition-all rounded-lg font-medium shadow-lg shadow-indigo-900/20"
                >
                  <FaDiscord className="mr-2 text-lg" /> Únete a nuestro Discord
                </Link>
                <Link 
                  href="/" 
                  className="inline-flex items-center px-5 py-3 bg-indigo-800 hover:bg-indigo-700 transition-all rounded-lg text-white font-medium shadow-lg shadow-indigo-900/20"
                >
                  <FaArrowLeft className="mr-2 text-lg" /> Volver al inicio
                </Link>
              </div>
            </div>
          </div>
          
          {/* Contenido principal con opacidad reducida */}
          <div className="bg-blue-800/20 backdrop-blur-sm p-8 rounded-xl border border-blue-500/30 shadow-lg shadow-blue-900/20 opacity-70">
            
            {/* Sección de reglas generales */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-blue-700/30 p-3 rounded-full mr-4">
                  <FaUserShield className="text-2xl text-blue-200" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                  Reglas Generales
                </h2>
              </div>
              Todavía no disponible...
            </div>
            
            {/* Sección de sanciones */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-red-700/30 p-3 rounded-full mr-4">
                  <FaExclamationTriangle className="text-2xl text-red-300" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-200">
                  Sanciones
                </h2>
              </div>
              
              <div className="bg-red-900/10 p-6 rounded-lg border border-red-500/30 mb-6">
                <p className="text-blue-100 mb-4">
                  Dependiendo de la gravedad y frecuencia de la infracción, se aplicarán diferentes sanciones:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600/20 flex items-start">
                    <div className="bg-yellow-700/20 p-2 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    </div>
                    <p className="text-blue-200">Advertencia (Warning)</p>
                  </div>
                  
                  <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600/20 flex items-start">
                    <div className="bg-orange-700/20 p-2 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    </div>
                    <p className="text-blue-200">Expulsión temporal del servidor</p>
                  </div>
                  
                  <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600/20 flex items-start">
                    <div className="bg-blue-700/20 p-2 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                    <p className="text-blue-200">Retiramiento de objetos</p>
                  </div>
                  
                  <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600/20 flex items-start">
                    <div className="bg-red-700/20 p-2 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    </div>
                    <p className="text-blue-200">Baneo permanente</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-800/20 p-5 rounded-lg border border-blue-600/30">
                <p className="text-blue-200 italic text-sm">
                  La administración se reserva el derecho de modificar estas reglas en cualquier momento. 
                  Es responsabilidad de los jugadores mantenerse informados sobre las actualizaciones de la normativa.
                </p>
              </div>
            </div>
            
            {/* Sección de preguntas */}
            <div className="mt-12 pt-6 border-t border-blue-600/30">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-700/30 p-3 rounded-full mr-4">
                  <FaInfoCircle className="text-2xl text-indigo-200" />
                </div>
                <h3 className="text-xl font-semibold text-blue-200">¿Preguntas o dudas?</h3>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6 bg-blue-900/20 p-6 rounded-lg border border-blue-600/30">
                <div className="flex-shrink-0">
                  <Image 
                    src="/kindlyklanklub-big.png" 
                    alt="Kindly Klan Klub" 
                    width={80} 
                    height={80} 
                    className="rounded-lg"
                  />
                </div>
                
                <div>
                  <p className="text-blue-100 mb-4">
                    Si tienes alguna pregunta sobre las reglas o necesitas más información sobre el lanzamiento, 
                    contáctanos a través de nuestro Discord:
                  </p>
                  
                  <Link 
                    href="https://discord.gg/kindlyklan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 bg-indigo-700 hover:bg-indigo-600 transition-all rounded-lg text-white font-medium shadow-lg shadow-indigo-900/20"
                  >
                    <FaDiscord className="mr-2 text-lg" /> Unirse a Discord
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative bg-blue-950 overflow-hidden">
        {/* Decorative top wave */}
        <div className="absolute top-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto rotate-180">
            <path 
              fill="#0F2042" 
              fillOpacity="0.3" 
              d="M0,64L48,64C96,64,192,64,288,53.3C384,43,480,21,576,32C672,43,768,85,864,96C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            >
            </path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <Image 
                src="/kindlyklanklub-big.png" 
                alt="Kindly Klan Klub Logo"
                width={60}
                height={60}
                className="mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-blue-100">Kindly Klan Klub</h3>
                <p className="text-blue-300 text-sm">Tu network favorita 💓</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <Link href="/blog" className="text-blue-200 hover:text-white transition relative after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100">
                Blog
              </Link>
              <Link href="https://discord.gg/kindlyklan" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition flex items-center gap-1 relative after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100">
                <FaDiscord className="text-sm" /> Discord
              </Link>
            </div>
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-blue-700/30 to-transparent my-6"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-blue-300 mb-4 md:mb-0">© {new Date().getFullYear()} Kindly Klan - Todos los derechos reservados</p>
            <div className="flex gap-4">
              <button 
                onClick={() => navigator.clipboard.writeText('???')}
                className="text-blue-300 hover:text-blue-100 transition flex items-center gap-1"
              >
                
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}