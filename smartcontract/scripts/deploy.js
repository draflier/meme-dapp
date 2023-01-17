const hre = require("hardhat");

async function main() {

  const [owner] = await hre.ethers.getSigners();
  const contractFactory = await hre.ethers.getContractFactory("DrafSolnTestToken");
  const contract = await contractFactory.deploy();
  await contract.deployed();

  try{
    await run("verify:verify", { address: contract.address, constructorArguments: [], contract: "contracts/DrafSolnTestToken.sol:DrafSolnTestToken" });
  }catch(e){
      console.log(e);
  }

  console.log("DrafSoln Test Token Contract deployed to:", contract.address);
  console.log("DrafSoln Test Token Contract owner address:", owner.address);
}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

