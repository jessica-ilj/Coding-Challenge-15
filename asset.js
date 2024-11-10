// Define an array of assets
export const assets = [
  { id: 1, name: 'SpaceX Stock', type: 'stock', price: 300, quantity: 20 }, //I put this many assets because I am a trader. I'm into this financial stuff.
  { id: 2, name: 'Tesla', type: 'stock', price: 700, quantity: 30 },
  { id: 3, name: 'U.S. Treasury Bond', type: 'bond', price: 1000, quantity: 10 },
  { id: 4, name: 'Bitcoin', type: 'cryptocurrency', price: 35000, quantity: 2 },
  { id: 5, name: 'Ethereum', type: 'cryptocurrency', price: 2400, quantity: 10 },
  { id: 6, name: 'Gold', type: 'commodity', price: 1800, quantity: 5 },
  { id: 7, name: 'Wine (Chateau Lafite Rothschild)', type: 'collectible', price: 12000, quantity: 2 }, //you probably didn't know this was an asset, now you do.
  { id: 8, name: 'Vanguard REIT ETF', type: 'ETF', price: 80, quantity: 50 },
  { id: 9, name: 'S&P 500 Index Fund', type: 'ETF', price: 400, quantity: 15 },
  { id: 10, name: 'Vintage Ferrari 250 GTO', type: 'luxury', price: 70000000, quantity: 1 },
];


// Function to get an asset by its ID

export function getAssetById(id) {
  return assets.find(asset => asset.id === id);
}
