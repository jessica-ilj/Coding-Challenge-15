import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Display portfolio value
console.log('Initial Portfolio Value: $' + calculatePortfolioValue());

// Display portfolio allocation
const allocation = getPortfolioAllocation();
console.log('Initial Portfolio Allocation:');
allocation.forEach(asset => {
  console.log(`${asset.name}: ${asset.allocation}`);
});

// Create some transactions
try {
  const buyGold = new Transaction(1, 'buy', 5); // Buy 10 Apple stocks
  const sellTesla = new Transaction(2, 'sell', 5); // Sell 5 Tesla stocks (because tesla isn't popular right now.)
  const buyBond = new Transaction(3, 'buy', 2);    // Buy 2 U.S. Treasury Bonds

  // Display transaction details
  console.log('Transaction Details:');
  console.log(`Bought 5 Gold stocks: ${buyGold}`);
  console.log(`Sold 5 Tesla stocks: ${sellTesla}`);
  console.log(`Bought 2 U.S. Treasury Bonds: ${buyBond}`);

  // Display updated portfolio value
  console.log('Updated Portfolio Value: $' + calculatePortfolioValue());

  // Display updated portfolio allocation
  console.log('Updated Portfolio Allocation:');
  const updatedAllocation = getPortfolioAllocation();
  updatedAllocation.forEach(asset => {
    console.log(`${asset.name}: ${asset.allocation}`);
  });

} catch (error) {
  console.error(error.message);
}
