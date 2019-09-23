import { Schema, model, Document } from 'mongoose'

interface ImageInterface extends Document {
  url: string,
  name: string,
  adrress: string
}

const ImageSchema = new Schema({
  url: String,
  name: String,
  adress: String
}, {
  timestamps: true
})

export default model<ImageInterface>('Image', ImageSchema)
