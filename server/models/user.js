import mongoose from 'mongoose'



const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


  const imageSchema = new mongoose.Schema({
    title: String,
    youtube: String,
    instagram: String,
    image: String,// Link to the image
    createdAt: {
      type: Date,
      default: Date.now, // Set default value to current timestamp
    },

  });


  // Model based on the schema
  const Image = mongoose.model('post', imageSchema);

  const Users = mongoose.model("user", userSchema);

  export {Users, Image}