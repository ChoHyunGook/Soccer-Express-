import db from '../models/index.js'
import express from 'express'

export default function UserService() {
     const Todo = db.todo

    return {
         addTodo(req,res){
          console.log('###진행 4: 노드서버에 진입함'+JSON.stringify(req.body))
          console.log(req.body)
          
          new Todo(req.body).save(()=>{
              return 'ok' 
          })
         },
         getTodo(req,res){
          Todo.find()
        .exec((err, todos) => {
          if (err) return res.status(400).send(err)
          return todos
          })
         }
    }
}