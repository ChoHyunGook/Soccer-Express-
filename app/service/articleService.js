import db from '../models/index.js'
import express from 'express'
export default function ArticleService() {
    const Article = db.article

    return {
        addArticle(req, res) {
            console.log('###진행 4: 노드서버에 진입함' + JSON.stringify(req.body))
            console.log(req.body)

            new Article(req.body).save(() => {
                return 'ok'
            })
        },
        getArticle(req, res) {
            console.log(`### ArticleController access`)
            Article
                .find()
                .exec((err, articles) => {
                    if (err) 
                        return res
                            .status(400)
                            .send(err)
                    return articles
                })
        }
    }
}