import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Display initial portfolio value and allocation
console.log('Initial Portfolio Value:', calculatePortfolioValue());
console.log('Initial Portfolio Allocation:', getPortfolioAllocation());

// Create some transactions
try {
  const buyGold = new Transaction(1, 'buy', 5); // Buy 5 Gold stocks
  const sellTesla = new Transaction(2, 'sell', 5); // Sell 5 Tesla stocks (because Tesla isn't that popular right now.)
  const buyBond = new Transaction(3, 'buy', 2);    // Buy 2 U.S. Treasury Bonds

  // Display transaction details
  console.log('Transaction Details:');
  console.log(buyGold);
  console.log(sellTesla);
  console.log(buyBond);

  // Display updated portfolio value and allocation
  console.log('Updated Portfolio Value:', calculatePortfolioValue());
  console.log('Updated Portfolio Allocation:', getPortfolioAllocation());
} catch (error) {
  console.error(error.message);
}
