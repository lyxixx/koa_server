//计算总耗时的中间件

module.exports = async (cxt, next) => {
    const start = new Date
    //让洋葱模型内层中间件执行
    await next()
    const end = new Date()
    const duration = end - start
    cxt.set('X-response-Time', duration  + 'ms')

}