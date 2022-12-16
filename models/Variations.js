import mongoose from 'mongoose';

const variationsSchema = new mongoose.Schema(
  {
    idvar: { type: Number, required: true },
    idprod: { type: Number, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    count: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Variations =
  mongoose.models.Variations || mongoose.model('Variations', variationsSchema);

export default Variations;
