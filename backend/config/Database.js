const {Sequelize} = require("sequelize")

const db = new Sequelize('portofolio_ican','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db