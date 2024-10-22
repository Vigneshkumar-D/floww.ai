const Transaction = require('../models/transactionModel');

const getSummary = async (req, res) => {
  const { startDate, endDate, categoryId } = req.query;

  try {
    const whereClause = {};
    if (startDate && endDate) {
      whereClause.date = {
        [Op.between]: [new Date(startDate), new Date(endDate)],
      };
    }
    if (categoryId) {
      whereClause.categoryId = categoryId; 
    }

    const totalIncome = await Transaction.sum('amount', {
      where: { type: 'income', ...whereClause },
    });

    const totalExpenses = await Transaction.sum('amount', {
      where: { type: 'expense', ...whereClause },
    });

    const balance = totalIncome - totalExpenses;

    return res.json({
      totalIncome: totalIncome || 0,
      totalExpenses: totalExpenses || 0,
      balance,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getSummary, 
};
