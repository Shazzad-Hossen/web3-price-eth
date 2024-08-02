const { JsonRpcProvider } = require('ethers');
const fetchTokenPrice = require('./fetchTokenPrice');
const isErc20Token = require('./isErc20Token');

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

       /**
   * Check if given address is ERC20 token address or not
   * @param {string} tokenAddress - The Ethereum address of the token contract.
   * @returns {Promise<{success: boolean, data?: {isERC20Token: boolean}}, message?: string}>} The result object containing success status and data containing if given token is ERC20 contract or not.
   */
       async isERC20Token(tokenAddress){
        return await isErc20Token(tokenAddress,this.provider);
    }


    
}

module.exports = Web3Price;