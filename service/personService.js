const personModel = require('../model/personModel')

//逻辑层
class PersonService {
    /**
     * 获取全部数据
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async getPerson(req, res, next) {
        const { result } = await personModel.findAll()
        res.json({ err_code: 0, message: result })
    }
    /**
     * 通过id获取数据
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async getPersonById(req, res, next) {
        const id = req.params.id
        const { result } = await personModel.findById(id)
        res.json({ err_code: 0, message: result })
    }
}


module.exports = new PersonService()