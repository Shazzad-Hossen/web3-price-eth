const { Contract } = require("ethers");
const ERC20_CONTRACT_ABI = require('./utils/ERC20_CONTRACT_ABI.json');

const isErc20Token = async(tokenAddress,PROVIDER)=>{
  try {
    const TOKEN_CONTRACT= new Contract(tokenAddress,ERC20_CONTRACT_ABI,PROVIDER.HTTP);
    await TOKEN_CONTRACT.decimals();
    await TOKEN_CONTRACT.balanceOf('0x2812037C3c77a9BcE4e7D6e767524CdaB7Cf3675');
    return {success: true, data:{isERC20Token: true}}
  } catch (error) {
    return {success: true, data:{isERC20Token: false}}
  }

}
module.exports=isErc20Token;