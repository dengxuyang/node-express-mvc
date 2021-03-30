class DB {
    constructor() {
        this.mysql = require('mysql')
    }
    query(sql, params) {
        return new Promise((resolve, reject) => {
            //创建连接
            const connection = this.mysql.createConnection({
                    host: 'localhost',
                    user: 'root',
                    password: '123456',
                    database: 'test'
                })
                //2.开启连接
            connection.connect(err => {
                    if (err) {
                        console.log('连接数据库失败');
                        reject(err)
                    }
                    console.log('连接数据库成功');
                })
                //3.执行sql查询语句
            connection.query(sql, params, (err, result, fileds) => {
                    if (err) {
                        console.log('数据库查询失败');
                        reject(err)
                    }
                    resolve({
                        result,
                        fileds
                    })
                })
                //4.关闭连接
            connection.end(err => {
                if (err) {
                    console.log('关闭数据库失败');
                    reject(err)
                }
                console.log('关闭数据库成功');
            })
        })
    }
}
module.exports = new DB()