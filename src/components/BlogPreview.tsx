'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    featured: boolean;
  };
}

const BlogPreview = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        // Hacemos fetch a la API para obtener los posts
        const response = await fetch('/api/blog-posts');
        if (!response.ok) {
          throw new Error('Error fetching blog posts');
        }
        const data = await response.json();
        
        // Filtramos solo los posts destacados y limitamos a 3
        const featuredPosts = data.filter((post: BlogPost) => post.frontmatter.featured).slice(0, 3);
        setPosts(featuredPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-blue-800/20 backdrop-blur-sm p-5 rounded-lg border border-blue-700/50 animate-pulse h-64"></div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return <p className="text-blue-300 text-center">No hay publicaciones destacadas disponibles.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <article key={post.slug} className="bg-blue-800/20 backdrop-blur-sm p-5 rounded-lg border border-blue-700/50 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-blue-100 mb-2 hover:text-blue-200 transition">
              <Link href={`/blog/${post.slug}`}>
                {post.frontmatter.title}
              </Link>
            </h3>
            <div className="flex items-center gap-2 text-blue-400 text-sm mb-3">
              <FaCalendarAlt />
              <time dateTime={post.frontmatter.date}>
                {new Date(post.frontmatter.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <p className="text-blue-300 mb-4 line-clamp-3">
              {post.frontmatter.excerpt}
            </p>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-block bg-blue-700 hover:bg-blue-600 transition px-4 py-2 rounded text-white font-medium mt-3"
          >
            Leer más
          </Link>
        </article>
      ))}
    </div>
  );
};

export default BlogPreview;