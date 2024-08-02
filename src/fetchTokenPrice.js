const { Contract, parseUnits, formatUnits } = require("ethers");
const axios = require("axios");

const UNI_V2_ROUTER_ABI = require('./utils/UNI_V2_ROUTER_ABI.json');
const ERC20_CONTRACT_ABI = require('./utils/ERC20_CONTRACT_ABI.json');


const UNI_V2_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const WRAPPED_ETH_CONTRACT_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

const fetchTokenPrice = async (TOKEN_ADDRESS,PROVIDER) => {
    try {
        const UNI_V2_ROUTER_CONTRACT = new Contract(UNI_V2_ROUTER_ADDRESS, UNI_V2_ROUTER_ABI, PROVIDER.HTTP);
        const AMOUNTS_IN = parseUnits('1');
        const AMOUNTS_OUT = await UNI_V2_ROUTER_CONTRACT.getAmountsOut(AMOUNTS_IN, [TOKEN_ADDRESS, WRAPPED_ETH_CONTRACT_ADDRESS]);
        const TOKEN_CONTRACT = new Contract(TOKEN_ADDRESS, ERC20_CONTRACT_ABI, PROVIDER.HTTP);
        const TOKEN_DECIMAL = await TOKEN_CONTRACT.decimals();
        const WETH_RECEIVABLE = formatUnits(AMOUNTS_OUT[1].toString(), TOKEN_DECIMAL);
        const PRICE = { WETH: WETH_RECEIVABLE };
        try {
            const res = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
            PRICE.USD = res.data.USD * Number(WETH_RECEIVABLE);
        } catch (error) {
            console.log(error);
        }

        return { success: true, data: { price: PRICE } };

    } catch (error) {
        console.log(error);
        return { success: false, message: 'Something went wrong' };
    }
};

module.exports = fetchTokenPrice;
