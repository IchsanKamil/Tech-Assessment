function toUpperLowerCase (input) {
  let output2 = ''
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) output2 += input[i].toLowerCase()
    else output2 += input[i].toUpperCase()
  }

  return output2
}

module.exports = toUpperLowerCase