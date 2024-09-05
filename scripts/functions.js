const soma = function (setResultado, number, number2) {
    setResultado(Number(number) + Number(number2))
    return number
  }
const diminui = function (setResultado, number, number2) {
    setResultado(Number(number) - Number(number2))
    return number
  }
const multi = function (setResultado, number, number2) {
    setResultado(Number(number) * Number(number2))
    return number
  }
const div = function (setResultado, number, number2) {
    setResultado(Number(number) / Number(number2))
    return number
  }

  module.exports = {soma, diminui, multi, div}
