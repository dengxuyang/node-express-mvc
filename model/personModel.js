const db = require('../config/db')
    //这里是person表的数据连接层
class personModel {
    //查找所有
    findAll() {
            return db.query('select * from tb_person', [])
        }
        //通过id查找
    findById(id) {
            return db.query('select * from tb_person where id = ?', [id])
        }
        //更新
    update() {
            //TODO
        }
        //删除
    delete() {
            //TODO
        }
        //添加
    create() {
        //TODO
    }
}
module.exports = new personModel()