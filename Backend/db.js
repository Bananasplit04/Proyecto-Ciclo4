const mongoose = require("mongoose");
const asyncHandler = require("./middleware/asyncHandler");
const config = require("./config");

module.exports = asyncHandler(async () => {
  try {
    const connection = await mongoose.connect(config.DB_URI);
    console.log("Database is connected to", connection.connection.name);
  } catch (error) {
      console.error(error.message);
    }
});