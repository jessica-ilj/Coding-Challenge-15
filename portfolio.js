import { assets } from './asset.js';

// Function to calculate the total portfolio value
export function calculatePortfolioValue() {
  return assets.reduce((accumulatedValue, asset) => accumulatedValue + asset.price * asset.quantity, 0);
}

// Function to calculate the percentage allocation of each asset in the portfolio
export function getPortfolioAllocation() {
  const portfolioTotalValue = calculatePortfolioValue(); //sums the total value of the portfolio by multiplying the price and quantity of each asset.
  const allocations = [];

  for (const asset of assets) {
    const allocationPercentage = ((asset.price * asset.quantity) / portfolioTotalValue) * 100; //calculates the percentage allocation of each asset in the portfolio.
    allocations.push({
      name: asset.name,
      allocation: allocationPercentage 
    });
  }

  return allocations;
}
