const {ethers, upgrades } =  require("hardhat");

// Proxy contract address: 0x0Ab63445b7447A2519D73daF0c979dc3e2E577aD
// Implementation contract address: 0xd1dF9fc9C757b9aD3918080BCc746ec316F07f38


async function main() {
    const VendingMachineV1 = await ethers.getContractFactory('VendingMachineV1');

    const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
    await proxy.deployed();

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxy.address
    );

    console.log('Proxy contract address: ' + proxy.address);

    console.log('Implementation contract address: ' + implementationAddress);
}

main();

