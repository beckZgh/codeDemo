'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inviter_id: Sequelize.INTEGER,
      email: Sequelize.STRING(40),
      password: Sequelize.STRING,
      username: Sequelize.STRING(40),
      weibo: Sequelize.STRING(40),
      weixin: Sequelize.STRING(40),
      team_id: Sequelize.INTEGER,
      receive_remote: Sequelize.TINYINT(1),
      email_verifyed: Sequelize.TINYINT(1),
      avatar: Sequelize.STRING(40),
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
