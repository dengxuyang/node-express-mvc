const express = require('express')
const  app = express();
//引入路由
const personRouter = require('./router/person')





app.use('/person',personRouter)





//监听9527端口
app.listen(9527);
console.log('服务启动成功,端口:9527');
console.log('地址：http://127.0.0.1:9527');