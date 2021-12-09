const MasterBreeder = artifacts.require('MasterBreeder');
const GovernanceToken = artifacts.require("../build/contracts/UniswapV2ERC20");

module.exports = async function (deployer) {
    await deployer.deploy(MasterBreeder);
}