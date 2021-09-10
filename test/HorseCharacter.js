
const { expectRevert } = require('@openzeppelin/test-helpers')

const CHARACTER_NAME = "Shrek"

contract('HorseCharacter', accounts => {
    const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')
    const HorseCharacter = artifacts.require('HorseCharacter.sol')
    const defaultAccount = accounts[0]

    let link, dnd

    beforeEach(async () => {
        link = await LinkToken.new({ from: defaultAccount })
        dnd = await HorseCharacter.new({ from: defaultAccount })
    })
    // TODO
})
