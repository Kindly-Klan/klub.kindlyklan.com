'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaCopy, FaCheck, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const copyIP = () => {
    navigator.clipboard.writeText('???');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-blue-900/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo y nombre */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-lg">
              <Image 
                src="/kindlyklanklub-big.png" 
                alt="Kindly Klan Klub Logo" 
                width={45} 
                height={45}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-100 leading-none group-hover:text-white transition-colors">Kindly Klan Klub</span>
              <span className="text-sm text-blue-300 font-medium leading-none"></span>
            </div>
          </Link>
          
          {/* Navegación en pantallas grandes */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-blue-100 hover:text-white font-medium text-sm uppercase tracking-wider transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100">
              Inicio
            </Link>
            <Link href="/blog" className="text-blue-100 hover:text-white font-medium text-sm uppercase tracking-wider transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100">
              Blog
            </Link>
            <Link href="/rules" className="text-blue-100 hover:text-white font-medium text-sm uppercase tracking-wider transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100">
              Normativa
            </Link>
          </nav>
          
          {/* IP y Discord */}
          <div className="hidden md:flex items-center space-x-4">
            <div 
              className="relative group flex items-center gap-2 bg-blue-950/60 hover:bg-blue-800/80 transition-all duration-300 p-2 px-4 rounded-full cursor-pointer overflow-hidden"
              onClick={copyIP}
            >
              <span className="font-mono text-blue-100 text-sm group-hover:text-white transition-colors">¡Próximamente!</span>
              {copied ? (
                <FaCheck className="text-green-400" />
              ) : (
                <FaCopy className="text-blue-300 group-hover:text-white transition-colors" />
              )}
              
              {/* Efecto de ripple al hacer clic */}
              <span className="absolute inset-0 bg-blue-500/20 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100"></span>
              
              {/* Mensaje de copiado */}
              {copied && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-green-900/90 text-green-100 text-xs py-1 px-2 rounded shadow-lg">
                  ¡IP copiada!
                </div>
              )}
            </div>
            
            <Link 
              href="https://discord.gg/kindlyklan" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-indigo-700 hover:bg-indigo-600 transition-all duration-300 p-2 px-4 rounded-full relative overflow-hidden shadow-md"
            >
              <FaDiscord className="text-white text-lg" />
              <span className="text-white text-sm font-medium">Discord</span>
              
              {/* Efecto de luz */}
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out"></span>
            </Link>
          </div>
          
          {/* Botón menú móvil */}
          <button 
            className="md:hidden text-blue-100 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </div>
      
      {/* Menú móvil */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-blue-900/95 backdrop-blur-md border-t border-blue-800/50 px-4 py-3">
          <nav className="flex flex-col space-y-4 mb-6">
            <Link 
              href="/" 
              className="text-blue-100 hover:text-white py-2 px-3 hover:bg-blue-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/blog" 
              className="text-blue-100 hover:text-white py-2 px-3 hover:bg-blue-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/rules" 
              className="text-blue-100 hover:text-white py-2 px-3 hover:bg-blue-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Normativa
            </Link>
          </nav>
          
          <div className="flex flex-col space-y-3 pb-2">
            <button
              onClick={() => {
                copyIP();
                setIsMenuOpen(false);
              }}
              className="relative w-full flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-800 transition-all p-2 rounded-lg overflow-hidden"
            >
              <span className="font-mono text-blue-100">???</span>
              {copied ? <FaCheck className="text-green-400" /> : <FaCopy className="text-blue-300" />}
            </button>
            
            <Link 
              href="https://discord.gg/kindlyklan" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-indigo-700 hover:bg-indigo-600 transition-all p-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaDiscord className="text-white" />
              <span className="text-white">Discord</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Efecto de overlay para menú móvil */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;