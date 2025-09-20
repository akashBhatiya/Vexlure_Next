"use client";

import React from 'react';
import Image from 'next/image';
import { HiPencil, HiTrash, HiEye } from 'react-icons/hi2';

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  content: string;
  author?: string;
  readTime?: string;
  category: string;
  image: string;
  subImage?: string;
  tags: string[];
  slug: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

interface BlogTableProps {
  blogs: BlogPost[];
  onEdit: (blog: BlogPost) => void;
  onDelete: (blog: BlogPost) => void;
  onView: (slug: string) => void;
}

const BlogTable: React.FC<BlogTableProps> = ({
  blogs,
  onEdit,
  onDelete,
  onView
}) => {
  if (blogs.length === 0) {
    return (
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
          <h2 className="text-base sm:text-lg font-medium text-gray-900">All Blogs (0)</h2>
        </div>
        <div className="p-4 sm:p-6 text-center text-gray-500">
          <p className="text-sm sm:text-base">No blogs found. Create your first blog!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
        <h2 className="text-base sm:text-lg font-medium text-gray-900">All Blogs ({blogs.length})</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Blog
              </th>
              <th className="hidden md:table-cell px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tags
              </th>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="hidden sm:table-cell px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td className="px-3 sm:px-6 py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={64}
                        height={64}
                        className="h-12 w-12 sm:h-16 sm:w-16 rounded-lg object-cover"
                      />
                    </div>
                    <div className="ml-3 sm:ml-4 min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                        {blog.title}
                      </div>
                      <div className="text-xs text-blue-600 font-medium mb-1">
                        {blog.category}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                        {blog.description.substring(0, 60)}...
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden md:table-cell px-3 sm:px-6 py-3 sm:py-4">
                  <div className="flex flex-wrap gap-1 max-w-[150px] sm:max-w-[200px]">
                    {blog.tags && blog.tags.length > 0 ? (
                      blog.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-400">No tags</span>
                    )}
                    {blog.tags && blog.tags.length > 2 && (
                      <span className="text-xs text-gray-500">+{blog.tags.length - 2}</span>
                    )}
                  </div>
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    blog.published 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {blog.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="hidden sm:table-cell px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-1 sm:space-x-2">
                    <button
                      onClick={() => onView(blog.slug)}
                      className="text-blue-600 hover:text-blue-900 p-1"
                      title="View Blog"
                    >
                      <HiEye className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={() => onEdit(blog)}
                      className="text-indigo-600 hover:text-indigo-900 p-1"
                      title="Edit Blog"
                    >
                      <HiPencil className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={() => onDelete(blog)}
                      className="text-red-600 hover:text-red-900 p-1"
                      title="Delete Blog"
                    >
                      <HiTrash className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTable;
