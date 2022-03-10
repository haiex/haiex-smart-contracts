require('@nomiclabs/hardhat-ethers')
require('hardhat-deploy')
module.exports = {
  defaultNetwork: 'alfajores',
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {
      forking: {
        url: 'https://alfajores-forno.celo-testnet.org',
        accounts: ['privatekey'],
      },
    },
    matic: {
      url: `https://rpc-mumbai.maticvigil.com/v1/${'[id]'}`,
      accounts: ['privatekey'],
    },
    alfajores: {
      url: 'https://alfajores-forno.celo-testnet.org',
      accounts: ['privatekey'],
      chainId: 44787,
    },
  },
  solidity: {
    version: '0.8.0',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 20000,
  },
}
