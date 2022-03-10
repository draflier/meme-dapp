const hre = require("hardhat");

async function main() {

  const [owner] = await hre.ethers.getSigners();
  const contractFactory = await hre.ethers.getContractFactory("DrafMeme");
  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log("DrafMeme Contract deployed to:", contract.address);
  console.log("DrafMeme Contract owner address:", owner.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

