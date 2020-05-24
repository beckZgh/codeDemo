
const inquirer = require('inquirer');
const fs       = require('./_file');

module.exports = {

   askName: ()=>{

       let qusetions = [
           {
                name: 'name',
                type: 'input',
                message: '请输入文件夹名称',
                validate: value=>{

                    if(!value.length)      return '请输入文件夹名称';
                    if( fs.hasName(value)) return '该文件已存在';

                    return true;
                }
           }
       ];

       return inquirer.prompt(qusetions);
   }
}
