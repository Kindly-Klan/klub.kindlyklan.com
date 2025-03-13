'use client';

import React from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import Header from '@/components/Header';
import { useParams } from 'next/navigation';
import Image from 'next/image';

// Importar datos simulados hasta que se implemente la lectura de MDX
const blogPosts = [
  {
    id: 1,
    title: 'Bienvenidos al servidor Kindly Klan Klub',
    date: '2025-03-01',
    content: `
      <h1>Bienvenidos al servidor Kindly Klan Klub</h1>
      <p>Estamos muy emocionados de anunciar la apertura oficial de nuestro servidor Minecraft <strong>Kindly Klan Klub</strong>. Después de meses de planificación y desarrollo, finalmente estamos listos para recibir jugadores.</p>
      <h2>¿Qué ofrecemos?</h2>
      <ul>
        <li><strong>Supervivencia</strong>: Un mundo extenso con recursos abundantes y biomas diversos</li>
        <li><strong>Economía</strong>: Sistema de comercio entre jugadores</li>
        <li><strong>Protección</strong>: Reclama terrenos para proteger tus construcciones</li>
        <li><strong>Comunidad</strong>: Grupo amigable de jugadores y staff siempre dispuesto a ayudar</li>
      </ul>
      <h2>Cómo unirse</h2>
      <p>Unirse es muy sencillo. Solo necesitas:</p>
      <ol>
        <li>Tener Minecraft Java Edition</li>
        <li>Añadir nuestro servidor: <code>play.kindlyklan.com</code></li>
        <li>¡Entrar y empezar a jugar!</li>
      </ol>
      <p>También te recomendamos unirte a nuestro <a href="https://discord.gg/kindlyklan">Discord</a> para mantenerte al día con todas las noticias y eventos.</p>
    `,
    slug: 'bienvenidos-al-servidor',
    featured: true
  },
  {
    id: 2,
    title: 'Actualización del servidor v1.1',
    date: '2025-03-05',
    content: `
      <h1>Actualización del servidor v1.1</h1>
      <p>Estamos felices de anunciar la primera actualización importante de nuestro servidor. Hemos estado trabajando duro para mejorar la experiencia de juego y añadir características que la comunidad ha estado pidiendo.</p>
      <h2>Nuevas características</h2>
      <h3>Sistema de rangos</h3>
      <p>Hemos implementado un sistema de rangos basado en el tiempo de juego y contribuciones a la comunidad:</p>
      <ul>
        <li><strong>Explorador</strong>: Rango inicial</li>
        <li><strong>Ciudadano</strong>: Después de 10 horas de juego</li>
        <li><strong>Veterano</strong>: Después de 50 horas de juego</li>
        <li><strong>Élite</strong>: Rango especial para contribuyentes destacados</li>
      </ul>
      <p>Cada rango desbloquea nuevos comandos y beneficios.</p>
      <h2>Correcciones de errores</h2>
      <ul>
        <li>Solucionado el problema con los chunks que no se cargaban correctamente</li>
        <li>Arreglado el error que causaba desconexiones aleatorias</li>
        <li>Mejorado el rendimiento general del servidor</li>
      </ul>
    `,
    slug: 'actualizacion-servidor-v1-1',
    featured: true
  },
  {
    id: 3,
    title: 'Evento especial: Cacería del tesoro',
    date: '2025-03-10',
    content: `
      <h1>Evento especial: Cacería del tesoro</h1>
      <p>¡Atención a todos los aventureros de Kindly Klan Klub! Nos complace anunciar nuestro primer gran evento comunitario: una emocionante cacería del tesoro por todo el mundo del servidor.</p>
      <h2>Detalles del evento</h2>
      <ul>
        <li><strong>Fecha</strong>: 20 de marzo de 2025</li>
        <li><strong>Hora</strong>: 18:00 CET (hora española)</li>
        <li><strong>Duración</strong>: 2 horas</li>
        <li><strong>Punto de encuentro</strong>: Spawn principal</li>
      </ul>
      <h2>Premios</h2>
      <p>Los premios para los ganadores son:</p>
      <ol>
        <li><strong>Primer lugar</strong>: Set completo de herramientas y armadura de netherita encantada</li>
        <li><strong>Segundo lugar</strong>: 64 diamantes y 32 esmeraldas</li>
        <li><strong>Tercer lugar</strong>: 32 diamantes y 16 esmeraldas</li>
      </ol>
    `,
    slug: 'evento-caceria-tesoro',
    featured: true
  }
];

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Buscar el post correspondiente al slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // Si no se encuentra el post, mostrar error 404
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="bg-blue-800/20 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-blue-500/30 text-center">
            <h1 className="text-4xl font-bold text-blue-100 mb-4">Post no encontrado</h1>
            <p className="text-blue-200 mb-6">Lo sentimos, el post que estás buscando no existe.</p>
            <Link href="/blog" className="inline-block bg-blue-700 hover:bg-blue-600 transition px-4 py-2 rounded text-white font-medium">
              Volver al blog
            </Link>
          </div>
        </main>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-blue-800/20 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-blue-500/30 max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/blog" className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition">
              <FaArrowLeft /> Volver al blog
            </Link>
          </div>
          
          <article>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-2 text-blue-400 text-sm mb-8 border-b border-blue-700/30 pb-4">
              <FaCalendarAlt />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            <div 
              className="prose prose-invert prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 pt-6 border-t border-blue-600/30">
              <div className="flex justify-center">
                <Image 
                  src="/kindlyklanklub-big.png"
                  alt="Kindly Klan Klub"
                  width={100}
                  height={100}
                  className="opacity-70"
                />
              </div>
            </div>
          </article>
        </div>
      </main>
      
      <footer className="py-4 text-center text-blue-300 bg-blue-900/50">
        <p>© {new Date().getFullYear()} Kindly Klan Klub - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}