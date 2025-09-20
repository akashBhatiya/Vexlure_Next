"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { HiUpload, HiX } from 'react-icons/hi';

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

interface BlogFormProps {
  showForm: boolean;
  editingBlog: BlogPost | null;
  formData: BlogFormData;
  uploading: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onFormDataChange: (data: Partial<BlogFormData>) => void;
  onFileUpload: (file: File, type: 'image' | 'subImage') => void;
}

const BLOG_CATEGORIES = [
  'Export Insights',
  'Market Analysis',
  'Spice Knowledge', 
  'Health Benefits',
  'Certifications Quality'
];

const BlogForm: React.FC<BlogFormProps> = ({
  showForm,
  editingBlog,
  formData,
  uploading,
  onClose,
  onSubmit,
  onFormDataChange,
  onFileUpload
}) => {
  if (!showForm) return null;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (showForm) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [showForm, onClose]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'subImage') => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file, type);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-200">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">
              {editingBlog ? 'Edit Blog' : 'Add New Blog'}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
              title="Close"
            >
              <HiX className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          
          <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => onFormDataChange({ title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
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
                onChange={(e) => onFormDataChange({ description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
              />
            </div>

            {/* Author and Read Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => onFormDataChange({ author: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
                  placeholder="Vexlure Staff"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Read Time
                </label>
                <input
                  type="text"
                  value={formData.readTime}
                  onChange={(e) => onFormDataChange({ readTime: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
                  placeholder="5 min read"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => onFormDataChange({ category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
              >
                {BLOG_CATEGORIES.map((category) => (
                  <option key={category} value={category} className="text-black">
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
              <div className="mb-2 p-3 bg-orange-50 rounded-lg">
                <p className="text-xs font-semibold text-gray-700 mb-2">Content Structure Guide:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                  <li><strong>First 2-3 paragraphs</strong> will appear before the second image</li>
                  <li>Remaining content will appear after the second image</li>
                  <li>Use <code className="bg-gray-100 px-1">**text**</code> for <strong>bold text</strong></li>
                  <li>Use <code className="bg-gray-100 px-1">~~text~~</code> for <span className="text-orange-600 underline">orange underlined text</span></li>
                  <li>Use <code className="bg-gray-100 px-1"># Heading</code> for main headings</li>
                  <li>Use <code className="bg-gray-100 px-1">## Subheading</code> for subheadings</li>
                  <li>Use <code className="bg-gray-100 px-1">{'>'} Quote text</code> for highlighted quotes</li>
                  <li>Separate paragraphs with double line breaks</li>
                </ul>
              </div>
              <textarea
                required
                rows={10}
                value={formData.content}
                onChange={(e) => onFormDataChange({ content: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base font-mono"
                placeholder="Write your blog content here...\n\nUse markdown formatting:\n# Heading\n**Bold text**\n> Quote\n\nNew paragraph..."
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags (Current: {formData.tags.length})
              </label>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Add a tag and press Enter"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const input = e.target as HTMLInputElement;
                      const tag = input.value.trim();
                      if (tag && !formData.tags.includes(tag)) {
                        onFormDataChange({ tags: [...formData.tags, tag] });
                        input.value = '';
                      }
                    }
                  }}
                />
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-blue-100 text-blue-800"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => {
                            onFormDataChange({
                              tags: formData.tags.filter((_, i) => i !== index)
                            });
                          }}
                          className="ml-1 sm:ml-2 text-blue-600 hover:text-blue-800 text-sm sm:text-base"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                        alt="Main blog image"
                        width={300}
                        height={200}
                        className="w-full h-32 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => onFormDataChange({ image: '' })}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <HiUpload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-2">
                        <label htmlFor="main-image" className="cursor-pointer">
                          <span className="mt-2 block text-sm font-medium text-gray-900">
                            Upload main image
                          </span>
                          <input
                            id="main-image"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'image')}
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
                        alt="Sub blog image"
                        width={300}
                        height={200}
                        className="w-full h-32 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => onFormDataChange({ subImage: '' })}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <HiUpload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-2">
                        <label htmlFor="sub-image" className="cursor-pointer">
                          <span className="mt-2 block text-sm font-medium text-gray-900">
                            Upload sub image
                          </span>
                          <input
                            id="sub-image"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'subImage')}
                          />
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Published Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={(e) => onFormDataChange({ published: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
                Publish immediately
              </label>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={uploading}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 text-sm sm:text-base"
              >
                {uploading ? 'Uploading...' : editingBlog ? 'Update Blog' : 'Create Blog'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
