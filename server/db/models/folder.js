const Sequelize = require('sequelize');
const db = require('../db');

const Folder = db.define('folder', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})


module.exports = Folder;
