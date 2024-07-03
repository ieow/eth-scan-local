import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const endpointUrl = "https://eth-sepolia.public.blastapi.io";
const privateKey = "d76fc10c77423d82d60b94939c968962096e6c268c1cc0dd5cfde535d14c2c1e";
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: endpointUrl,
      accounts: [privateKey],
    },
  },
};
export default config;
