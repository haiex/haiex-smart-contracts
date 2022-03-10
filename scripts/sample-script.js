// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat')
// var bigInt = require("big-integer");
const { ethers } = require('ethers')
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Haiex = await hre.ethers.getContractFactory('Haiex')
  const haiex = await Haiex.deploy(
    ethers.BigNumber.from(100000),
    '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
    '0xe56A35702D70740891cf7A01368d4d804fC11A7B',
  )

  await haiex.deployed()

  let tgoud = await hre.ethers.getContractAt('TGOUD', '0xe56A35702D70740891cf7A01368d4d804fC11A7B')

  await tgoud.addDapp(haiex.address)

  console.log('Greeter deployed to:', haiex.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
