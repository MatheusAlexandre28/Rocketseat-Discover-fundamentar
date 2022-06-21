module.exports = function getFlag(name, greeting){
  const firstName = process.argv[3]
  const lastName = process.argv[5]

  console.log(`Ola  ${firstName} ${lastName}`)
}