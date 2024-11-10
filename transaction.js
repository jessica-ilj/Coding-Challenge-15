import { assets, getAssetById } from './asset.js';

// Transaction class to handle buying and selling of assets
export class Transaction {
  constructor(assetId, type, quantity) {       // initializes the transaction with asset ID, type, and quantity
    this.assetId = assetId;
    this.type = type;
    this.quantity = quantity;
    this.handleTransaction(); // Executes the transaction as soon as the object is created
  }

  // Method to execute the transaction (buy or sell)
  handleTransaction() {
    const asset = getAssetById(this.assetId); // Finds the asset by ID

    // If asset is not found, throw an error
    if (!asset) {
      return `Error: Asset with ID ${this.assetId} not found`;
    }
     // Handle buying and selling 
    if (this.type === 'buy') {
      asset.quantity += this.quantity; // Increase quantity for a buy transaction
      return `Successfully bought ${this.quantity} of ${asset.name}`;
      
    } else if (this.type === 'sell') {
      
      if (asset.quantity < this.quantity) {      // Check if there's enough quantity to sell
        return `Error: Insufficient quantity for sale of ${asset.name}`;
      }
      
      asset.quantity -= this.quantity; // Decrease quantity for a sell transaction
      return `Successfully sold ${this.quantity} of ${asset.name}`;
    } else {
      // Handle invalid transaction types
      return `Error: Invalid transaction type: ${this.type}`;
    }
  }
}
    
   



