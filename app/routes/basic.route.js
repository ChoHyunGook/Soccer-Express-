const {bmi, calc, grade, rps, enchant} = require('../controllers/basic.controller')

module.exports = x => {
  x.app.post(`${x.url}/bmi`, bmi)
  x.app.post(`${x.url}/calc`, calc)
  x.app.post(`${x.url}/grade`, grade)
  x.app.post(`${x.url}/rps`, rps)
  x.app.post(`${x.url}/enchant`, enchant)
}

