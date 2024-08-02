# web3-price-eth

`web3-price-eth` is a Node.js library for fetching the price of a specific Ethereum token from the blockchain using the ethers.js framework. It provides a simple interface to get real-time token prices by querying smart contracts on the Ethereum network.

## Installation

To use this library, you need to have Node.js installed on your machine. You can install the library via npm:

```bash
npm install web3-price-eth
```
or
```bash
yarn add web3-price-eth
```

## Usage
Here is a basic example of how to use the web3-price-eth library:

```javascript
const Web3Price = require("web3-price-eth");

(async () => {
    // Initialize the Web3Price instance with your Infura project URL
    const web3Price = new Web3Price('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
    
    // Fetch the price of a token by its contract address
    const price = await web3Price.getPrice("0x57B49219614859176Ddb029298486B6c30193Cbd");
    
    // Output the price
    console.log(price);
})();

```
## Author

- [Shazzad Hossen](https://github.com/Shazzad-Hossen)

