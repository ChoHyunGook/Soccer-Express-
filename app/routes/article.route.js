const { addArticle, getArticle } = require('../controllers/article.controller');
module.exports = x => {
     console.log('### article.route 로 들어옴###')
     x.app.post(`${x.url}/addArticle`, addArticle)
     x.app.get(`${x.url}/getArticles`, getArticle)
}