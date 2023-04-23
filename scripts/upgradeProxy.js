const {ethers, upgrades } = require('hardhat');

const proxyAddress= '0x4026C85F6a9b51854d3274F347dC5fb639eae8f1';

async function main() {
    const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
    const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);

    console.log("The current contract owner is: " + upgraded.owner());
    console.log('Implementation contract address: ' + implementationAddress);
}



main();