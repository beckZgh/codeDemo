
const fs      = require('fs');
const path    = require('path');

module.exports = {

    // 获取当前路径
    getCurrPath(){
        return process.cwd();
    },

    // 检查是否存在相同文件名
    hasName(name){
        return fs.existsSync(path.join(process.cwd(), name));
    },

    // 写入文件
    write(data){
        console.log(data);
    }
};
