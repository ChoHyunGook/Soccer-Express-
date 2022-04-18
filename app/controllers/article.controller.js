const db = require('../models/index')
const ArticleSchema = db.article
exports.addArticle = (req, res)=>{
    console.log('###진행 4: 노드서버에 진입함'+JSON.stringify(req.body))
    console.log(req.body)
    
    new ArticleSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    }) 
}

exports.getArticle = (req, res)=>{
    console.log(`### ArticleController access`)
    ArticleSchema.find()
    .exec((err, articles) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, article})
    })

}
