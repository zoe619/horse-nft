const HorseCharacter = artifacts.require('HorseCharacter')

module.exports = async callback => {
    const dnd = await HorseCharacter.deployed()
    console.log('Let\'s get the overview of your character')
    const overview = await dnd.characters(0)
    console.log(overview)
    callback(overview.tx)
}