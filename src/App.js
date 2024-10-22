const express = require('express');
const app = express();
const swaggerSetup = require('./config/swagger');
swaggerSetup(app);
app.use(express.json());

const categoryRoutes = require('./routes/categoryRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const summaryRoutes = require('./routes/summaryRoutes');
app.use('/categories', categoryRoutes);
app.use('/transactions', transactionRoutes);
app.use("/summary", summaryRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
