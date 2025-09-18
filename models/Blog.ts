import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
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
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'Export Insights',
      'Market Analysis', 
      'Spice Knowledge',
      'Health Benefits',
      'Certifications Quality'
    ],
    default: 'Export Insights'
  },
  image: {
    type: String,
    required: [true, 'Main image is required']
  },
  subImage: {
    type: String,
    default: null
  },
  metaTitle: {
    type: String,
    trim: true,
    maxlength: [60, 'Meta title cannot be more than 60 characters']
  },
  metaDescription: {
    type: String,
    trim: true,
    maxlength: [160, 'Meta description cannot be more than 160 characters']
  },
  metaKeywords: {
    type: String,
    trim: true,
    default: ''
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  published: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true, // This will add createdAt and updatedAt fields
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create indexes for better performance
BlogSchema.index({ slug: 1 });
BlogSchema.index({ published: 1 });
BlogSchema.index({ createdAt: -1 });

// Generate slug from title before saving
BlogSchema.pre<IBlog>('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  
  // Set meta title and description if not provided
  if (!this.metaTitle) {
    this.metaTitle = this.title;
  }
  if (!this.metaDescription) {
    this.metaDescription = this.description;
  }
  
  next();
});

// Prevent model re-compilation during development
export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
