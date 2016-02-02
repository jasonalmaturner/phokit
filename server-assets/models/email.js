import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
}, {
  timestamps: true,
});

export default mongoose.model('Email', emailSchema);
