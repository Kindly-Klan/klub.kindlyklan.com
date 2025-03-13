import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Función para obtener todos los archivos MDX del directorio de blog
export async function GET() {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/content/blog');
    
    // Verificar si el directorio existe
    if (!fs.existsSync(postsDirectory)) {
      return NextResponse.json([], { status: 200 });
    }
    
    // Leer los archivos del directorio
    const fileNames = fs.readdirSync(postsDirectory);
    
    // Filtrar solo archivos .mdx
    const mdxFiles = fileNames.filter(fileName => fileName.endsWith('.mdx'));
    
    // Procesar cada archivo
    const posts = mdxFiles.map(fileName => {
      // Obtener el slug del nombre del archivo (quitar extensión .mdx)
      const slug = fileName.replace(/\.mdx$/, '');
      
      // Leer el contenido del archivo
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Extraer el frontmatter con gray-matter
      const { data } = matter(fileContents);
      
      // Devolver los datos necesarios
      return {
        slug,
        frontmatter: {
          title: data.title || 'Sin título',
          date: data.date || new Date().toISOString().slice(0, 10),
          excerpt: data.excerpt || 'Sin descripción',
          featured: !!data.featured
        }
      };
    });
    
    // Ordenar por fecha (más reciente primero)
    const sortedPosts = posts.sort((a, b) => 
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    );
    
    return NextResponse.json(sortedPosts);
  } catch (error) {
    console.error('Error al leer los posts del blog:', error);
    return NextResponse.json([], { status: 500 });
  }
}