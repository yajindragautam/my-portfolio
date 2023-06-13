const bcrypt  = require("bcryptjs");

const generateRandomNumber = () => {
    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number
  
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return randomNumber;
}

async function hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (error) {
      throw new Error('Password hashing failed');
    }
  }

module.exports ={generateRandomNumber,hashPassword}