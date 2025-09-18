"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiPlus, HiPencil, HiTrash, HiEye, HiArrowUpTray } from 'react-icons/hi2';
import { HiUpload } from 'react-icons/hi';

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  image: string;
  subImage?: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

interface BlogFormData {
  title: string;
  description: string;
  content: string;
  category: string;
  image: string;
  subImage: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  published: boolean;
}

const BLOG_CATEGORIES = [
  'Export Insights',
  'Market Analysis',
  'Spice Knowledge', 
  'Health Benefits',
  'Certifications Quality'
];

const BlogAdminPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    description: '',
    content: '',
    category: 'Export Insights',
    image: '',
    subImage: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    published: false
  });

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const result = await response.json();
      if (result.success) {
        setBlogs(result.data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle file upload
  const handleFileUpload = async (file: File, type: 'image' | 'subImage') => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', type);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setFormData(prev => ({
          ...prev,
          [type]: result.data.url
        }));
      } else {
        alert(result.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingBlog ? '/api/blogs' : '/api/blogs';
      const method = editingBlog ? 'PUT' : 'POST';
      const payload = editingBlog 
        ? { ...formData, id: editingBlog._id }
        : formData;

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (result.success) {
        alert(result.message);
        setShowForm(false);
        setEditingBlog(null);
        resetForm();
        fetchBlogs();
      } else {
        alert(result.error || 'Operation failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Operation failed');
    }
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`/api/blogs?id=${id}`, {
        method: 'DELETE'
      });

      const result = await response.json();
      if (result.success) {
        alert(result.message);
        fetchBlogs();
      } else {
        alert(result.error || 'Delete failed');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Delete failed');
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      content: '',
      category: 'Export Insights',
      image: '',
      subImage: '',
      metaTitle: '',
      metaDescription: '',
      metaKeywords: '',
      published: false
    });
  };

  // Handle edit
  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      description: blog.description,
      content: blog.content,
      category: blog.category,
      image: blog.image,
      subImage: blog.subImage || '',
      metaTitle: blog.metaTitle,
      metaDescription: blog.metaDescription,
      metaKeywords: blog.metaKeywords,
      published: blog.published
    });
    setShowForm(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <button
            onClick={() => {
              setShowForm(true);
              setEditingBlog(null);
              resetForm();
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <HiPlus className="w-5 h-5" />
            Add New Blog
          </button>
        </div>

        {/* Blog Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">
                  {editingBlog ? 'Edit Blog' : 'Add New Blog'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {BLOG_CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content *
                    </label>
                    <textarea
                      required
                      rows={8}
                      value={formData.content}
                      onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Write your blog content here..."
                    />
                  </div>

                  {/* Images */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Main Image */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Main Image *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                        {formData.image ? (
                          <div className="relative">
                            <Image
                              src={formData.image}
                              alt="Main image"
                              width={300}
                              height={200}
                              className="w-full h-40 object-cover rounded"
                            />
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                            >
                              <HiTrash className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="text-center">
                            <HiUpload className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="mt-2">
                              <label className="cursor-pointer">
                                <span className="text-blue-600 hover:text-blue-500">Upload main image</span>
                                <input
                                  type="file"
                                  className="hidden"
                                  accept="image/*"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleFileUpload(file, 'image');
                                  }}
                                />
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Sub Image */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sub Image (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                        {formData.subImage ? (
                          <div className="relative">
                            <Image
                              src={formData.subImage}
                              alt="Sub image"
                              width={300}
                              height={200}
                              className="w-full h-40 object-cover rounded"
                            />
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, subImage: '' }))}
                              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                            >
                              <HiTrash className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="text-center">
                            <HiUpload className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="mt-2">
                              <label className="cursor-pointer">
                                <span className="text-blue-600 hover:text-blue-500">Upload sub image</span>
                                <input
                                  type="file"
                                  className="hidden"
                                  accept="image/*"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleFileUpload(file, 'subImage');
                                  }}
                                />
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Meta Tags */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">SEO Meta Tags</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Title
                      </label>
                      <input
                        type="text"
                        value={formData.metaTitle}
                        onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Leave empty to use blog title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Description
                      </label>
                      <textarea
                        rows={2}
                        value={formData.metaDescription}
                        onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Leave empty to use blog description"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Keywords
                      </label>
                      <input
                        type="text"
                        value={formData.metaKeywords}
                        onChange={(e) => setFormData(prev => ({ ...prev, metaKeywords: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Comma separated keywords"
                      />
                    </div>
                  </div>

                  {/* Published Status */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="published"
                      checked={formData.published}
                      onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
                      Publish immediately
                    </label>
                  </div>

                  {/* Form Actions */}
                  <div className="flex justify-end space-x-4 pt-6 border-t">
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setEditingBlog(null);
                        resetForm();
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={uploading}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                    >
                      {uploading ? 'Uploading...' : editingBlog ? 'Update Blog' : 'Create Blog'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Blogs List */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">All Blogs ({blogs.length})</h2>
          </div>
          
          {blogs.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No blogs found. Create your first blog!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Blog
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {blogs.map((blog) => (
                    <tr key={blog._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-16 w-16">
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              width={64}
                              height={64}
                              className="h-16 w-16 rounded-lg object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {blog.title}
                            </div>
                            <div className="text-xs text-blue-600 font-medium mb-1">
                              {blog.category}
                            </div>
                            <div className="text-sm text-gray-500">
                              {blog.description.substring(0, 100)}...
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          blog.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {blog.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => window.open(`/blog/${blog.slug}`, '_blank')}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <HiEye className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleEdit(blog)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <HiPencil className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(blog._id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <HiTrash className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogAdminPage;
