const MasterBreeder = artifacts.require('MasterBreeder');
const GovernanceToken = artifacts.require("../build/contracts/UniswapV2ERC20");

module.exports = async function (deployer) {
   const Gov = await artifacts.require("<gov build>").deployed(); 
   await deployer.deploy(MasterBreeder, Gov.address, other params, comma, sepparated);
}