//读取文件的工具方法

const fs =require("fs");
module.exports.getFileJsonData=(filePath)=>{
    
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            }else{
                resolve(data);
            }
        })

    })

 
}