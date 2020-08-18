const toUpperLowerCase = require('../helper/convert2');

class Assessment {
  static convert (req, res) {
    const { input } = req.body

    if (!input) {
      res.status(400).json({ messageError: 'Input cannot be empty' })
    }
    else {
      const output1 = input.toUpperCase()
      const output2 = toUpperLowerCase(input)
      const output = { output1, output2 }
  
      res.status(200).json(output)
    }
  }
}

module.exports = Assessment