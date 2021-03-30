const express = require('express')
const router = express.Router()
//解构
const { getPerson, getPersonById } = require('../service/personService')

class PersonContorller {
    //class 静态资源
    static initRouter() {
        router.get('/', getPerson)
        router.get('/:id', getPersonById)
        return router
    }
}
//把router暴露出去
module.exports = PersonContorller.initRouter()