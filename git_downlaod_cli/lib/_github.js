
const git = require('download-git-repo')

// https://github.com/beckZgh/sumdoo-template
const url = 'git@github.com:beckZgh/sumdoo-template.git';

module.exports = {

    download: (name)=>{

        return new Promise((reslove, reject)=>{

            git.Clone('https://github.com/beckZgh/sumdoo-template', name)
            .then(repository=>{
                console.log(' ');
                console.log('sadf', repository)

                reslove({
                    ok   : true,
                    data : repository
                });
            })
            .catch(err=>{
                reslove({
                    ok  : false,
                    err : err
                });
            })

        });
    }

}
