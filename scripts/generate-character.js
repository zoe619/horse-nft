const HorseCharacter = artifacts.require('HorseCharacter')

module.exports = async callback => {
  const dnd = await HorseCharacter.deployed()
  console.log('Creating requests on contract:', dnd.address)
  const tx = await dnd.requestNewRandomCharacter("The Horse Sparrow 1")
  const tx2 = await dnd.requestNewRandomCharacter("The Horse Sparrow 2")
  const tx3 = await dnd.requestNewRandomCharacter("The Horse Sparrow 3")
  const tx4 = await dnd.requestNewRandomCharacter("The Horse Sparrow 4")
  callback(tx.tx)
}