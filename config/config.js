// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1); // Exit the process with failure code
//   }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');

const mongoURI =
  process.env.MONGO_URI || 'mongodb+srv://GovarthanahariN:hariajay123@cluster0.f50ul.mongodb.net/cartDB?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully to:', mongoURI.includes('localhost') ? 'Local Database' : 'MongoDB Atlas');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;

