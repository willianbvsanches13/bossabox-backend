import { Schema, model, Document } from 'mongoose';

interface ToolsInterface extends Document {
  title: string;
  link: string;
  description: string;
  tags: [string];
}

const ToolsSchema = new Schema({
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  description: {
    type: String,
  },
  tags: {
    type: [String],
  },
});

export default model<ToolsInterface>('Tools', ToolsSchema);
