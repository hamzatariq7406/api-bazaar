const Sequelize = require('sequelize');
const envConfigs = require('./config')

const env : string = process.env.NODE_ENV || '';
const config = envConfigs[env];

const sequelize = new Sequelize(config.url, config);

export = sequelize;
