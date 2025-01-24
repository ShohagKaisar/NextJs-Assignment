
import getBlogs from '@/lib/getBlogs';
import React from 'react'

export default async function BlogPage({ params }) {

  const { id } = await params;

  const blog = await getBlogs(id);
  console.log(blog);

  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Title: {blog.title}
          </h1>
          <p className="text-gray-600 mb-4 whitespace-pre-line">
            <span className='font-bold'>Description:</span> {blog.body}
          </p>
          <div className="border-t pt-4">
            <p className="text-sm text-gray-500 mt-1">
              <span className="font-medium text-gray-700">Post ID:</span> {blog.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}