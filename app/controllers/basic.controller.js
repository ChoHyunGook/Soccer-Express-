const {getBmi, getCalc, getGrade, getRps, getEchant} = require('../service/basic.service')

exports.bmi = (req, res) => {
  res.status(200).json(getBmi(req.body))
}

exports.calc = (req, res) => {
  res.status(200).json(getCalc(req.body))
}

exports.grade = (req, res) => {
  res.status(200).json(getGrade(req.body))
}

exports.rps = (req, res) => {
  res.status(200).json(getRps(req.body))
}

exports.enchant = (req, res) => {
  res.status(200).json(getEchant(req.body))
}

