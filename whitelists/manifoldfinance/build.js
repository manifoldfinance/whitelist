const fs = require("fs");
const { ChainId } = require("@sushiswap/sdk");

const FILE_NAMES = {
  [ChainId.MAINNET]: "mainnet",
  [ChainId.ROPSTEN]: "ropsten",
  [ChainId.RINKEBY]: "rinkeby",
  [ChainId.GÖRLI]: "goerli",
  [ChainId.KOVAN]: "kovan",
  [ChainId.FANTOM]: "fantom",
  [ChainId.FANTOM_TESTNET]: "fantom-testnet",
  [ChainId.MATIC]: "matic",
  [ChainId.MATIC_TESTNET]: "matic-testnet",
  [ChainId.XDAI]: "xdai",
  [ChainId.BSC]: "bsc",
  [ChainId.BSC_TESTNET]: "bsc-testnet",
  [ChainId.AVALANCHE]: "avalanche",
  [ChainId.AVALANCHE_TESTNET]: "avalanche-testnet",
  [ChainId.HECO]: "heco",
  [ChainId.HECO_TESTNET]: "heco-testnet",
  [ChainId.HARMONY]: "harmony",
  [ChainId.HARMONY_TESTNET]: "harmony-testnet",
  [ChainId.OKEX]: "okex",
  [ChainId.OKEX_TESTNET]: "okex-testnet",
};

const tokens = Object.keys(ChainId).reduce((previousValue, currentValue) => {
  const path = `./src/tokens/${FILE_NAMES[currentValue]}.js`;
  try {
    if (fs.existsSync(path)) {
      return { ...previousValue, [currentValue]: require(path) };
    }
    return { ...previousValue, [currentValue]: [] };
  } catch (error) {
    throw error;
  }
}, {});

console.log(JSON.stringify(tokens, null, 2));
