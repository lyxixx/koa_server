//设置响应头的中间件

module.exports = async (cxt,next)=>{
    const contentType = 'application/json ;charset  =utf-8'
    cxt.set('Content-Type',contentType)
    cxt.set('Access-Control-Allow-Origin','*')
    cxt.set('Access-Control-Allow-Methods','OPTIONS,GET,POST,PUT,DELETE')
   await next();
}