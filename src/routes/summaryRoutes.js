
const express = require('express');
const router = express.Router();
const { getSummary } = require('../controllers/summaryController');



/**
 * @swagger
 * /summary:
 *   get:
 *     summary: Retrieve a summary of transactions
 *     tags: [Summary]
 *     parameters:
 *       - name: startDate (YYYY-MM-DD)
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *       - name: endDate (YYYY-MM-DD)
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *       - name: categoryId
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A summary of transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalIncome:
 *                   type: number
 *                   format: float
 *                 totalExpenses:
 *                   type: number
 *                   format: float
 *                 balance:
 *                   type: number
 *                   format: float
 *       500:
 *         description: Internal server error
 */

router.get('/', getSummary); 

module.exports = router;
