'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        email: '2223969110@qq.com',
        password: '1324234',
        inviter_id: 0,
        username: 'Beck',
        weixin: 'xxx',
        weibo: 'xxx',
        receive_remote: 0,
        email_verifyed: 1,
        avatar: 'xxx.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
    }]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users');
  }
};
