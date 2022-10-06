require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
// const KOVAN_RPC_URL =process.env.KOVAN_RPC_URL
const RINKEBY_RCP_URL = process.env.RINKEBY_RCP_URL || "https://eth-rinkeby";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "https://eth-rinkeby";
const ETHERSCAN_API_KEY =
  process.env.ETHERSCAN_API_KEY || "https://eth-rinkeby";
const COINMARKETCAP_KEY =
  process.env.COINMARKETCAP_KEY || "https://eth-rinkeby";
module.exports = {
  networks: {
    hardhat: {
      chainId: 31337,
      initialBaseFeePerGas: 0
      // gasPrice: 130000000000,
    },
    goerli: {
      url: RINKEBY_RCP_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
      blockConfirmations: 6,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.8",
      },
      {
        version: "0.6.6",
      },
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0,
      4: 0,
    },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_KEY,
    token: "MATIC",
  },
};
