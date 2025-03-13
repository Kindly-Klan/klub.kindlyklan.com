'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaArrowLeft, FaArrowRight, FaSearch, FaDiscord, FaExclamationTriangle } from 'react-icons/fa';
import Header from '@/components/Header';

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    featured: boolean;
  };
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    // Añadir padding-top para compensar el header fijo
    document.body.classList.add('pt-16');
    
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog-posts');
        if (!response.ok) {
          throw new Error('Error fetching blog posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
    
    // Limpiar el efecto al desmontar
    return () => {
      document.body.classList.remove('pt-16');
    };
  }, []);

  // Filtrar posts por término de búsqueda
  const filteredPosts = searchTerm.trim() === '' 
    ? posts 
    : posts.filter(post => 
        post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.frontmatter.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );

  // Paginación
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Cambiar de página
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
      <Header />
      
      {/* Hero Section */}
      <div className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-blue-900/70 z-10"></div>
        <div className="relative h-[300px] overflow-hidden flex items-center justify-center">
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
            <h1 className="text-4xl md:text-7xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
              Blog
            </h1>
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
          {/* Navegación y búsqueda */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <Link href="/" className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition group">
              <FaArrowLeft className="transition-transform group-hover:-translate-x-1" /> Volver al inicio
            </Link>
            
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder="Buscar posts..." 
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset pagination on search
                }}
                className="bg-blue-900/30 w-full border border-blue-700/30 focus:border-blue-500/50 rounded-full py-2 px-4 pl-10 text-blue-100 placeholder-blue-400/70 focus:outline-none focus:ring-1 focus:ring-blue-500/30"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400/70" />
            </div>
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
          
          {/* Listado de posts */}
          {loading ? (
            <div className="space-y-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-blue-800/20 backdrop-blur-sm p-6 rounded-xl border border-blue-700/50 animate-pulse h-48"></div>
              ))}
            </div>
          ) : (
            <>
              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {/* Indicador de contenido preliminar */}
                  <div className="text-center mb-8">
                    <span className="inline-block bg-indigo-600/70 text-white text-sm px-4 py-1 rounded-full border border-indigo-400/30">
                      <FaExclamationTriangle className="inline-block mr-1 text-yellow-300" /> 
                      Contenido preliminar - Artículos de muestra
                    </span>
                  </div>
                  
                  {currentPosts.map(post => (
                    <article key={post.slug} className="bg-blue-800/10 backdrop-blur-sm p-6 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30">
                      <h2 className="text-2xl font-bold text-blue-100 mb-3 hover:text-blue-200 transition">
                        <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                      </h2>
                      <div className="flex items-center gap-2 text-blue-400 text-sm mb-4">
                        <FaCalendarAlt />
                        <time dateTime={post.frontmatter.date}>
                          {new Date(post.frontmatter.date).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <p className="text-blue-300 mb-5 line-clamp-3">
                        {post.frontmatter.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 bg-blue-700/80 hover:bg-blue-600/80 transition px-5 py-2 rounded-full text-white font-medium group"
                      >
                        Leer más <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="bg-blue-800/20 backdrop-blur-sm p-8 rounded-xl border border-blue-500/30 text-center">
                  <h3 className="text-xl font-bold text-blue-100 mb-2">No hay resultados</h3>
                  <p className="text-blue-300 mb-4">No se encontraron publicaciones que coincidan con tu búsqueda.</p>
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="inline-block bg-blue-700 hover:bg-blue-600 transition px-4 py-2 rounded text-white font-medium"
                    >
                      Limpiar búsqueda
                    </button>
                  )}
                </div>
              )}
              
              {/* Paginación */}
              {filteredPosts.length > postsPerPage && (
                <div className="flex justify-center mt-10">
                  <div className="inline-flex rounded-md shadow-sm">
                    <button 
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-2 text-sm font-medium rounded-l-lg border ${
                        currentPage === 1 
                          ? 'bg-blue-800/20 text-blue-400 border-blue-700/20 cursor-not-allowed' 
                          : 'bg-blue-800/40 text-blue-200 border-blue-700/40 hover:bg-blue-700/50'
                      }`}
                    >
                      Anterior
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                      <button
                        key={pageNumber}
                        onClick={() => goToPage(pageNumber)}
                        className={`px-3 py-2 text-sm font-medium border-t border-b ${
                          pageNumber === currentPage 
                            ? 'bg-blue-600/60 text-white border-blue-600/50' 
                            : 'bg-blue-800/40 text-blue-200 border-blue-700/40 hover:bg-blue-700/50'
                        } ${pageNumber === 1 ? 'border-l border-blue-700/40' : ''}
                        ${pageNumber === totalPages ? 'border-r border-blue-700/40' : ''}`}
                      >
                        {pageNumber}
                      </button>
                    ))}
                    
                    <button 
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-2 text-sm font-medium rounded-r-lg border ${
                        currentPage === totalPages 
                          ? 'bg-blue-800/20 text-blue-400 border-blue-700/20 cursor-not-allowed' 
                          : 'bg-blue-800/40 text-blue-200 border-blue-700/40 hover:bg-blue-700/50'
                      }`}
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
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
              <Link href="/rules" className="text-blue-200 hover:text-white transition relative after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100">
                Normativa
              </Link>
              <Link href="/" className="text-blue-200 hover:text-white transition relative after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100">
                Inicio
              </Link>
              <Link href="https://discord.gg/kindlyklan" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition flex items-center gap-1 relative after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100">
                <FaDiscord className="text-sm" /> Discord
              </Link>
            </div>
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-blue-700/30 to-transparent my-6"></div>
          
          <p className="text-center text-blue-300 text-sm">
            © {new Date().getFullYear()} Kindly Klan - Todos los derechos reservados
          </p>
          
        </div>
      </footer>
    </div>
  );
}