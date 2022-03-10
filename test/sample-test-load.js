const chai = require('chai')
const { expect } = require('chai')
const { ethers } = require('hardhat')
chai.use(require('chai-bignumber')(ethers.BigNumber))

// var bigInt = require("big-integer");
//  const { BigNumber } = require ('ethers');

describe('Haiex', function () {
  let haiex

  beforeEach(async () => {
    haiex = await ethers.getContractAt('Haiex', '0xEe17eE6916d9Dbd745b9E668F35039ec1214e46b')
    console.log(haiex.address)
  })

  describe('Init price', async () => {
    it('Price Should be equal to 100000 ', async function () {
      const price = await haiex.price()
      chai.expect(price.toString()).to.equal('100000')
    })
  })
})
