const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes');
const employeeRoutes2 = require('./routes/employeeRoute2');
const putanddel = require('./routes/employeeRoutes3');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

dotEnv.config();

// Use body-parser middleware before defining routes

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('mongodb connection successfully');
  })
  .catch((error) => {
    console.log(`${error}`);
  });

// Define your routes after using middleware
app.use('/employees', employeeRoutes);
app.use('/findone',employeeRoutes2)
app.use('/updaanddel',putanddel)

app.listen(PORT, () => {
  console.log(`server is running on port number ${PORT}`);
});
