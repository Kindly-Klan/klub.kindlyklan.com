'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaBookOpen, FaGamepad, FaUserFriends, FaArrowRight, FaDiscord, FaCopy, FaExclamationTriangle } from "react-icons/fa";
import ServerStatus from "@/components/ServerStatus";
import Header from "@/components/Header";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  // Añadir un padding-top para compensar el header fijo
  useEffect(() => {
    document.body.classList.add('pt-16');
    return () => {
      document.body.classList.remove('pt-16');
    };
  }, []);

  // Función para desplazamiento suave
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-start">
        {/* Hero Banner */}
        <div className="w-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-blue-900/70 z-10"></div>
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <Image 
              src="/fondo.png" 
              alt="Kindly Klan Klub Background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center px-4 max-w-4xl mx-auto">
              <div className="animate-bounce-slow mx-auto mb-6">
                <div className="flex justify-center">
                  <Image 
                    src="/kindlyklanklub-big.png" 
                    alt="Kindly Klan Klub"
                    width={250}
                    height={250}
                    className="animate-pulse-slow"
                  />
                </div>
              </div>
              
              {/* Banner de Próximamente */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-xl border border-indigo-400/30 shadow-lg shadow-indigo-900/20 mb-8 animate-pulse max-w-lg mx-auto">
                <div className="flex items-center justify-center gap-3">
                  <FaExclamationTriangle className="text-xl text-yellow-300" />
                  <h2 className="text-xl md:text-2xl font-bold text-white">¡Próximamente!</h2>
                </div>
                <p className="text-indigo-100 text-sm mt-2">
                  <strong>Kindy Klan Klub</strong> se encuentra en desarrollo. 
                  ¡Únete a nuestro Discord para estar al tanto del lanzamiento!
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4">
              </div>
            
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
        <section className="w-full py-16 bg-gradient-to-b from-[#0F2042] to-blue-900/30">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-blue-100 relative">
      <span className="bg-gradient-to-r from-blue-300 to-blue-100 text-transparent bg-clip-text">
        ¿Qué es el Klub?
      </span>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-20 h-1 bg-blue-500 rounded"></div>
    </h2>
    
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"></div>
      
      <div className="bg-blue-800/10 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/20 to-indigo-600/20 rounded-2xl -rotate-2 transform scale-105"></div>
            <div className="relative bg-gradient-to-br from-blue-900/60 to-indigo-900/60 p-6 rounded-2xl border border-blue-500/30 shadow-xl shadow-blue-900/20">
              <Image 
                src="/kindlyklanklub-big.png"
                alt="Kindly Klan Klub Logo"
                width={120}
                height={120}
                className="mx-auto mb-4 animate-pulse-slow"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-blue-200 leading-relaxed">
              <strong className="text-blue-100 text-xl">Kindly Klan Klub</strong> es una network que combina la parte pública y privada de los eventos de Kindly Klan, sirviendo de puente para los dos espacios.
            </p>
            Podrán entrar tanto <strong>premium</strong> como <strong>no premiums</strong>. ¡Todo el mundo está invitado!
            <p className="text-blue-300 leading-relaxed">
            </p>
            
            <div className="pt-4">
              <Link 
                href="https://discord.gg/kindlyklan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 group"
              >
                <FaDiscord className="text-xl" />
                Únete al Klub
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20 scroll-mt-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-100 relative">
            <span className="bg-gradient-to-r from-blue-300 to-blue-100 text-transparent bg-clip-text">
              ¿Por qué unirse a nuestra network?
            </span>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-20 h-1 bg-blue-500 rounded"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-800/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/10 group">
              <div className="mx-auto bg-gradient-to-br from-blue-700/50 to-blue-900/50 rounded-full h-20 w-20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-md group-hover:shadow-blue-400/20">
                <FaGamepad className="text-4xl text-blue-200 group-hover:text-blue-100 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">Puente de juego</h3>
              <p className="text-blue-300">Kindly Klan Klub hace de puente entre lo <strong>público</strong> y lo privado, manteniendo eventos/series o modalidades.</p>
            </div>
            
            <div className="bg-blue-800/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/10 group">
              <div className="mx-auto bg-gradient-to-br from-blue-700/50 to-blue-900/50 rounded-full h-20 w-20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-md group-hover:shadow-blue-400/20">
                <FaUserFriends className="text-4xl text-blue-200 group-hover:text-blue-100 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">Comunidad</h3>
              <p className="text-blue-300">Forma parte de una comunidad amigable y colaborativa donde todos son bienvenidos.</p>
            </div>
            
            <div className="bg-blue-800/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/10 group">
              <div className="mx-auto bg-gradient-to-br from-blue-700/50 to-blue-900/50 rounded-full h-20 w-20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-md group-hover:shadow-blue-400/20">
                <FaUsers className="text-4xl text-blue-200 group-hover:text-blue-100 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">Eventos</h3>
              <p className="text-blue-300">Puedes participar en eventos, manteniéndote activo.</p>
            </div>
            
            <div className="bg-blue-800/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/10 group">
              <div className="mx-auto bg-gradient-to-br from-blue-700/50 to-blue-900/50 rounded-full h-20 w-20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-md group-hover:shadow-blue-400/20">
                <FaBookOpen className="text-4xl text-blue-200 group-hover:text-blue-100 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">Actualizaciones</h3>
              <p className="text-blue-300">Intentamos actualizar el <strong>Klub</strong> lo máximo posible</p>
            </div>
          </div>
          
          {/* Badge de Próximamente en features */}
          <div className="mt-12 text-center">
            <span className="inline-block bg-indigo-600/70 text-white text-sm px-4 py-1 rounded-full border border-indigo-400/30 animate-pulse">
              <FaExclamationTriangle className="inline-block mr-1 text-yellow-300" /> 
              ¡Contenido en desarrollo!
            </span>
          </div>
        </section>
        
        {/* Separator */}
        <div className="w-full relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#0a1a37" 
              fillOpacity="1" 
              d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,112C672,128,768,128,864,117.3C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            >
            </path>
          </svg>
        </div>
        
        {/* Featured Blog Posts - Mejorando esta sección para que no sea tan cuadrada */}
        <section className="w-full py-20 bg-gradient-to-b from-[#0a1a37] to-blue-900/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-4xl font-bold text-blue-100 relative mb-8 md:mb-0">
                <span className="bg-gradient-to-r from-blue-300 to-blue-100 text-transparent bg-clip-text">
                  Últimas Noticias
                </span>
                <div className="absolute left-0 bottom-[-10px] w-20 h-1 bg-blue-500 rounded"></div>
              </h2>
              <Link 
                href="/blog" 
                className="flex items-center gap-2 bg-blue-800/30 hover:bg-blue-700/40 transition-all px-5 py-2 rounded-full group text-blue-200 hover:text-white"
              >
                Ver todas 
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Nota de contenido preliminar */}
            <div className="mb-8 p-4 bg-indigo-800/20 backdrop-blur-sm border border-indigo-500/30 rounded-lg text-center">
              <p className="text-indigo-200">
                <FaExclamationTriangle className="inline-block mr-2 text-yellow-300" />
                Esta sección mostrará las últimas noticias y actualizaciones sobre el <strong>Klub</strong> una vez lanzado.
              </p>
            </div>
            
            <BlogPreview />
            
            {/* Decorative element */}
            <div className="flex justify-center mt-16">
              <div className="w-20 h-1 bg-blue-700/30 rounded"></div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer mejorado */}
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
              <Link href="/rules" className="text-blue-200 hover:text-white transition relative after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100">
                Normativa
              </Link>
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
