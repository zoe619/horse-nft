const HorseCharacter = artifacts.require('HorseCharacter')

module.exports = async callback => {
    console.log(process.env.DOG)
    callback('sup')
}