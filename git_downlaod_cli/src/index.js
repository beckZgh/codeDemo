
// 库
const fs       = require('../lib/_file');
const question = require('../lib/_inquirer');

// 模块
const path     = require('path');
const clear    = require('clear');
const chalk    = require('chalk');
const figlet   = require('figlet');
const spinner  = require('clui').Spinner;
const download = require('download-git-repo')

clear(); // 清空屏幕

console.log(chalk.yellow(
    figlet.textSync('Sumdoo-Cli', { horizontalLayou: 'full' })
));

// 开始构建
init();
async function init(){

    // 显示当前路径
    let currPath = fs.getCurrPath();
    console.log( chalk.green('当前路径:', currPath) );
    console.log( ' ' );

    let args = await question.askName();

    console.log( ' ' );
    let status = new spinner('正在拉取远程仓库模板代码.....');
        status.start();


    download('direct:https://github.com/beckZgh/sumdoo-template.git', args.name, { clone:true }, err=>{

        status.stop();
        if(err){
            console.log(' ');
            console.log(chalk.red(err));
        }else{
            console.log(chalk.green('下载完成'));
        }
    });
}


