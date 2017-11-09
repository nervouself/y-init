const request = require('request');
const chalk = require('chalk');

module.exports = done => {
  
  request({
    url: 'https://raw.githubusercontent.com/nervouself/y-init/master/lib/options.json',
    timeout: 1000
  }, (err, res, body) => {
    let options;
    if (!err && res.statusCode === 200) {
      options = JSON.parse(body).options;
    } else {
      console.log(chalk.yellow('获取模板列表失败，使用本地模板列表'));
      options = require('./options.json').options;
    }
    done(options);
  })
}
