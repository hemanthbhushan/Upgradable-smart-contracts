const {expect} = require('chai');
const { ethers, upgrades } = require('hardhat');
const { isCallTrace } = require('hardhat/internal/hardhat-network/stack-traces/message-trace');


let a,upgrade;

describe("testing upgradable contracts",()=>{
  beforeEach(async()=>{
    const A = await ethers.getContractFactory("Initial");
    a = await upgrades.deployProxy(A);   
  })
  it("testing the A contract",async()=>{
    await a.set(23);
    const num = await a.get();

    expect(Number(num)).to.equal(23);
  })
  it("upgrading to UpgradeA contract",async()=>{
    await a.set(23);
    const num = await a.get();

    expect(Number(num)).to.equal(23);
    const Upgrade = await ethers.getContractFactory("upgradeA");
    upgrade = await upgrades.upgradeProxy(a.address,Upgrade);

    const num1 = await upgrade.get();
    expect(Number(num1)).to.equal(23);

    await upgrade.increament();
    const num2 = await upgrade.get();
    expect(num2).to.equal(24);

  })
})