import mongoose from 'mongoose';

const imagetableSchema = new mongoose.Schema(
  {
    idimage: { type: Number, required: true },
    idprod: { type: Number, required: true },
    color: { type: String, required: true },
    image3: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Imagetable =
  mongoose.models.Imagetable || mongoose.model('Imagetable', imagetableSchema);

export default Imagetable;
