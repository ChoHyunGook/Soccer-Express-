import db from '../models/index.js'
import Repository from '../config/dbConfig.js'
export default function UserService() {

    const User = db.User
    const dbo = new Repository()
    const dbConnect = dbo.getDb();

    return {
        join(req, res) {
            new User(req.body).save(function (err) {
                if (err) {
                    res
                        .status(500)
                        .send({message: err});
                    console.log('회원가입 실패')
                    return;
                } else {
                    res
                        .status(200)
                        .json({ok: 'ok'})

                }
                console.log('회원가입 성공')
            })
            /**const matchDocument = {
                userid: req.body.userid,
                password: req.body.password,
                email: req.body.email,
                name: req.body.name,
                phone: req.body.phone,
                birth: req.body.birth,
                address: req.body.address
            };
            dbConnect
                .collection("users")
                .insertOne(matchDocument, function (err, result) {
                    if (err) {
                        res
                            .status(400)
                            .send("Error inserting matches!");
                    } else {
                        console.log(`Added a new match with id ${result.insertedId}`);
                        res
                            .status(204)
                            .send();
                    }
                }) */
        },
        login(req, res) {
            User
                .findOne(req.body)
                .exec((err, result) => {
                    if (result) {
                        console.log(' #### 로그인 성공 ####')
                        res.send(`hello ${username}`);
                    } else { 
                        res.send("login failed");
                    }
                });

            /**const matchDocument = {
                userid: req.body.userid,
                password: req.body.password,
                email: req.body.email,
                name: req.body.name,
                phone: req.body.phone,
                birth: req.body.birth,
                address: req.body.address
            };
            dbConnect
                .collection("users")
                .insertOne(matchDocument, function (err, result) {
                    if (err) {
                        res
                            .status(400)
                            .send("Error inserting matches!");
                    } else {
                        console.log(`Added a new match with id ${result.insertedId}`);
                        res
                            .status(204)
                            .send();
                    }
                }) */
        }
    } // return
}