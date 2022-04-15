const db = require('../models/index')
const UserSchema = db.user
exports.signup = (req, res)=>{
    console.log('###진행 4: 노드서버에 진입함'+JSON.stringify(req.body))
    console.log(req.body)
    
    new UserSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    }) 
}

exports.userlist = (req, res)=>{
    console.log(`### userController access`)
    UserSchema.find()
    .exec((err, users) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, users})
    })

}

exports.profile = (req, res) => {
    console.log(`### user profile access `)
    UserSchema.find({username: req.params.id})
    .exec((err, user) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, user })
    })
    
}