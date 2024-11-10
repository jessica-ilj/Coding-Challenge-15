import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Display portfolio value
console.log('Initial Portfolio Value: $' + calculatePortfolioValue());

// Display portfolio allocation as percentages
const allocation = getPortfolioAllocation();
console.log('Initial Portfolio Allocation:');
allocation.forEach(asset => {
  console.log(`${asset.name}: ${asset.allocation * 100}%`);
});

// Create some transactions
try {
  const buyGold = new Transaction(6, 'buy', 5);  // Buy 5 Gold assets
  const sellTesla = new Transaction(2, 'sell', 5); // Sell 5 Tesla stocks
  const buyBond = new Transaction(3, 'buy', 2);   // Buy 2 U.S. Treasury Bonds

  // Display transaction details
  console.log('Transaction Details:');
  console.log(`Bought 5 Gold assets: Asset ID ${buyGold.assetId}, Quantity: ${buyGold.quantity}`);
  console.log(`Sold 5 Tesla stocks: Asset ID ${sellTesla.assetId}, Quantity: ${sellTesla.quantity}`);
  console.log(`Bought 2 U.S. Treasury Bonds: Asset ID ${buyBond.assetId}, Quantity: ${buyBond.quantity}`);

  // Display updated portfolio value
  console.log('Updated Portfolio Value: $' + calculatePortfolioValue());

  // Display updated portfolio allocation
  console.log('Updated Portfolio Allocation:');
  const updatedAllocation = getPortfolioAllocation();
  updatedAllocation.forEach(asset => {
    console.log(`${asset.name}: ${asset.allocation * 100}%`);
  });

} catch (error) {
  console.error(error.message);
}

