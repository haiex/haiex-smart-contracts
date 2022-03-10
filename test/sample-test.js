const chai = require('chai')
const { ethers } = require('hardhat')
chai.use(require('chai-bignumber')(ethers.BigNumber))

describe('Haiex', function () {
  let haiex

  beforeEach(async () => {
    const Haiex = await ethers.getContractFactory('Haiex')
    haiex = await Haiex.deploy(
      ethers.BigNumber.from(100000),
      '0x3813e82e6f7098b9583FC0F33a962D02018B6803',
      '0xA009b3E0cd1515e81b0F0c52DF1432C289551929',
    )
    await haiex.deployed()
  })

  describe('changePriceSOS', async () => {
    it('New Price Should be equal to 101000 ', async function () {
      const changePriceSOSTx = await haiex.changePriceSOS(ethers.BigNumber.from('101000'))

      // wait until the transaction is mined
      await changePriceSOSTx.wait()
      const price2 = await haiex.price()

      chai.expect(price2.toString()).to.equal('101000')
    })
  })
})
