const HorseCharacter = artifacts.require('HorseCharacter')

const RINKEBY_VRF_COORDINATOR = "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B";
const RINKEBY_LINKTOKEN = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";
const RINKEBY_KEYHASH = "0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311";


module.exports = async(deployer, network, [defaultAccount]) => {

    await deployer.deploy(HorseCharacter, RINKEBY_VRF_COORDINATOR, RINKEBY_LINKTOKEN,
        RINKEBY_KEYHASH, { from: "0x52a4B566F4a091Bce9A94ad9c1cAc177A8de65e9" })

    let htc = await HorseCharacter.deployed();

}