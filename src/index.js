const { JsonRpcProvider } = require('ethers');
const fetchTokenPrice = require('./fetchTokenPrice');

class Web3Price {
    /**
   * Creates an instance of Web3Price.
   * @param {string} nodeUrl - The URL of the Ethereum node to connect to.
   */
    constructor(nodeUrl){
        this.nodeUrl=nodeUrl;
        this.provider = {
            HTTP: new JsonRpcProvider(nodeUrl)
        };
        
    }
      /**
   * Fetches the price of a token in WETH and USD.
   * @param {string} tokenAddress - The Ethereum address of the token contract.
   * @returns {Promise<{success: boolean, data?: {price: {WETH: string, USD: number}}, message?: string}>} The result object containing success status and price data.
   */
     async getPrice(tokenAddress){
        return await fetchTokenPrice(tokenAddress,this.provider);
    }

    
}

module.exports = Web3Price;