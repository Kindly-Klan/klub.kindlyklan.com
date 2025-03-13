import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const postsDirectory = path.join(process.cwd(), 'src/content/blog');
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    // Verificar si el archivo existe
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }
    
    // Leer el contenido del archivo
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Extraer el frontmatter y el contenido con gray-matter
    const { data, content } = matter(fileContents);
    
    // Devolver los datos necesarios
    return NextResponse.json({
      slug,
      frontmatter: {
        title: data.title || 'Sin título',
        date: data.date || new Date().toISOString().slice(0, 10),
        excerpt: data.excerpt || 'Sin descripción',
        featured: !!data.featured
      },
      content
    });
  } catch (error) {
    console.error(`Error al obtener el post ${params.slug}:`, error);
    return NextResponse.json(
      { error: 'Error retrieving post' },
      { status: 500 }
    );
  }
}