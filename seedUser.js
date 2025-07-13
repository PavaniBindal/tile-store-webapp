const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/user'); // Ensure the path is correct

async function createAdminUser() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/tile-store');
    console.log('Connected to MongoDB');

    const username = 'admin';
    const plainPassword = 'admin123'; // Change this to a strong password!
    
    // Check if user already exists to avoid duplicate error
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log('Admin user already exists');
      return;
    }

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const user = new User({
      username,
      password: hashedPassword,
      role: 'admin',
    });

    await user.save();
    console.log('✅ Admin user created successfully');
  } catch (err) {
    console.error('❌ Error creating admin user:', err.message);
  } finally {
    await mongoose.connection.close();
  }
}

createAdminUser();
