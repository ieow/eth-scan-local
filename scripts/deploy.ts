import { viem } from "hardhat";
async function main() {

    const wallets = await viem.getWalletClients()
    console.log(wallets)
    const deployedContract = await viem.deployContract("BalanceScanner")

    console.log(deployedContract)

    // deployedContract
    // console.log(
    // "Deploying contracts with the account:",
    // deployer.address
    // );

    // const HelloWorld = await ethers.getContractFactory("HelloWorld");
    // const contract = await HelloWorld.deploy();

    // console.log("Contract deployed at:", contract.address);

    // const saySomething = await contract.speak();
    
    // console.log("saySomething value:", saySomething);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });