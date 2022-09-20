const Koa = require('koa');
const app = new Koa()
//设置总耗时的中间件
const respDurationMiddleware = require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)
//设置响应头的中间件
const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware)

const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)

app.listen(8888,()=>{
    console.log('Hello');
})


