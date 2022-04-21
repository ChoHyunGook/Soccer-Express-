const db = require("../models");
const tokenService = require("../services")
const token = requ
const User = db.user;
checkDuplicateUserid = (req, res, next) => {
  User.findById({
    userid: req.body.userid
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "ID가 이미 존재합니다" });
      return;
    }
  });
};
login = (req, res, next) => {
    User.findById({
      userid: req.body.userid, password: req.body.password
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        const token =  tokenService()
        console.log(' $$$$$$$$$$$$$$$$$ ')
        console.log(token)
        console.log(' $$$$$$$$$$$$$$$$$ ')
        res.status(200).send({ message: token});
        return;
      }
    });
  };

const verifySignUp = {
    checkDuplicateUserid,
    login
};
module.exports = verifySignUp;