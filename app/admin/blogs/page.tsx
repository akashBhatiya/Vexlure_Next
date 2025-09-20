"use client";

import React, { useState, useEffect } from 'react';
import { HiPlus, HiTrash } from 'react-icons/hi2';
import BlogForm from '@/components/admin/BlogForm';
import BlogTable from '@/components/admin/BlogTable';

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

interface BlogFormData {
  title: string;
  description: string;
  content: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  subImage: string;
  tags: string[];
  published: boolean;
}

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "vexlure@2024"; // Change this password as needed


const BlogAdminPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [uploading, setUploading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<{ id: string; title: string } | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    description: '',
    content: '',
    author: 'Vexlure Staff',
    readTime: '5 min read',
    category: 'Export Insights',
    image: '',
    subImage: '',
    tags: [],
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

  // Check authentication on page load
  useEffect(() => {
    const checkAuth = () => {
      let attempts = 0;
      const maxAttempts = 3;
      
      const askPassword = () => {
        attempts++;
        const password = prompt(`Enter admin password to access Blog Management:\n(Attempt ${attempts}/${maxAttempts})`);
        
        if (password === ADMIN_PASSWORD) {
          setIsAuthenticated(true);
          fetchBlogs();
          setAuthLoading(false);
        } else if (password !== null) {
          if (attempts < maxAttempts) {
            alert(`Incorrect password! ${maxAttempts - attempts} attempts remaining.`);
            askPassword();
          } else {
            alert('Maximum attempts exceeded. Access denied.');
            window.location.href = '/admin';
          }
        } else {
          // User cancelled
          window.location.href = '/admin';
        }
      };
      
      askPassword();
    };
    
    checkAuth();
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('API response:', result);
      
      if (result.success) {
        setNotification({ type: 'success', message: result.message || 'Blog saved successfully!' });
        setShowForm(false);
        setEditingBlog(null);
        resetForm();
        fetchBlogs();
      } else {
        setNotification({ type: 'error', message: result.error || 'Operation failed' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification({ type: 'error', message: 'An error occurred while saving the blog' });
    }
  };

  // Handle delete - show confirmation modal
  const handleDeleteClick = (blog: BlogPost) => {
    setBlogToDelete({ id: blog._id, title: blog.title });
    setShowDeleteModal(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    if (!blogToDelete || deleting) return;

    setDeleting(true);
    try {
      const response = await fetch(`/api/blogs?id=${blogToDelete.id}`, {
        method: 'DELETE'
      });

      const result = await response.json();
      if (result.success) {
        setNotification({ type: 'success', message: result.message || 'Blog deleted successfully!' });
        fetchBlogs();
      } else {
        setNotification({ type: 'error', message: result.error || 'Delete failed' });
      }
    } catch (error) {
      console.error('Delete error:', error);
      setNotification({ type: 'error', message: 'Delete failed' });
    } finally {
      setDeleting(false);
      setShowDeleteModal(false);
      setBlogToDelete(null);
    }
  };

  // Cancel delete
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setBlogToDelete(null);
  };

  // Handle ESC key and outside click
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showDeleteModal) {
        cancelDelete();
      }
    };

    if (showDeleteModal) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [showDeleteModal]);

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      content: '',
      author: 'Vexlure Staff',
      readTime: '5 min read',
      category: 'Export Insights',
      image: '',
      subImage: '',
      tags: [],
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
      author: blog.author || 'Vexlure Staff',
      readTime: blog.readTime || '5 min read',
      category: blog.category,
      image: blog.image,
      subImage: blog.subImage || '',
      tags: blog.tags || [],
      published: blog.published
    });
    setShowForm(true);
  };

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Checking authentication...</div>
      </div>
    );
  }

  // Show loading while fetching blogs (after authentication)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Access denied. Redirecting...</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-4 left-4 right-4 sm:top-4 sm:right-4 sm:left-auto z-50 animate-in slide-in-from-top-2 duration-300">
          <div className={`rounded-lg p-3 sm:p-4 shadow-lg max-w-sm mx-auto sm:mx-0 ${
            notification.type === 'success' 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {notification.type === 'success' ? (
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <div className="ml-3 flex-1">
                <p className={`text-xs sm:text-sm font-medium ${
                  notification.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {notification.message}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <button
                  onClick={() => setNotification(null)}
                  className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    notification.type === 'success'
                      ? 'text-green-500 hover:bg-green-100 focus:ring-green-600'
                      : 'text-red-500 hover:bg-red-100 focus:ring-red-600'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto pt-20 px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Blog Management</h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Authenticated Admin Access</p>
          </div>
          <button
            onClick={() => {
              setShowForm(true);
              setEditingBlog(null);
              resetForm();
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 sm:py-2 rounded-lg flex items-center justify-center gap-2 w-12 h-12 sm:w-auto sm:h-auto"
            title="Add New Blog"
          >
            <HiPlus className="w-5 h-5" />
            <span className="hidden sm:inline">Add New Blog</span>
          </button>
        </div>

        {/* Blog Form Component */}
        <BlogForm
          showForm={showForm}
          editingBlog={editingBlog}
          formData={formData}
          uploading={uploading}
          onClose={() => {
            setShowForm(false);
            setEditingBlog(null);
            resetForm();
          }}
          onSubmit={handleSubmit}
          onFormDataChange={(data) => setFormData(prev => ({ ...prev, ...data }))}
          onFileUpload={handleFileUpload}
        />

        {/* Delete Confirmation Modal */}
        {showDeleteModal && blogToDelete && (
          <div 
            className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                cancelDelete();
              }
            }}
          >
            <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Delete Blog Post
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Are you sure you want to delete the blog post{' '}
                    <span className="font-medium text-gray-900">"{blogToDelete.title}"</span>?
                  </p>
                  <p className="text-sm text-red-600">
                    This action cannot be undone. All data associated with this blog will be permanently removed.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={cancelDelete}
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={deleting}
                  className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {deleting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <HiTrash className="w-4 h-4" />
                      Delete Blog
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Table Component */}
        <BlogTable
          blogs={blogs}
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
          onView={(slug) => window.open(`/blog/${slug}`, '_blank')}
        />
      </div>
    </div>
  );
};

export default BlogAdminPage;
