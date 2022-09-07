
const path = require('path');
const fileUtils = require('../utils/file_utlis')
module.exports = async (cxt, next) => {


    const url = cxt.request.url  // api/seller
    let filePath = url.replace('api', '')   //seller
    filePath = '../data' + filePath + '.json'
    filePath = path.join('__dirname ', filePath)
    const ret = await fileUtils.getFileJsonData(filePath)
    cxt.response.body = ret
    console.log(filePath);
    await next();
}




