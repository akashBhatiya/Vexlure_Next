import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
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
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    trim: true
  },
  author: {
    type: String,
    default: 'Vexlure Staff',
    trim: true
  },
  readTime: {
    type: String,
    default: '5 min read',
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
  tags: {
    type: [String],
    default: [],
    validate: {
      validator: function(tags: string[]) {
        return tags.length <= 10; // Maximum 10 tags
      },
      message: 'Cannot have more than 10 tags'
    }
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
  
  next();
});

// Prevent model re-compilation during development
export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
