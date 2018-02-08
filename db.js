const Sequelize = require('sequelize');
const sequelize = new Sequelize('ccs_test', 'postgres', 'postgres', {
    dialect: 'postgres'
});

const Inquiry = sequelize.define('inquiry', {
    
    client:
    Sequelize.STRING,

    originator:
    Sequelize.STRING,

    service:
    Sequelize.STRING,

    adverse_parties:
    Sequelize.STRING
});

const Response = sequelize.define('response', {

    inquiry:
    Sequelize.INTEGER,
    
    responder:
    Sequelize.STRING,

    summary:
    Sequelize.ENUM('no response',
		   'no conflict',
		   'conflict'),
    
    explanation:
    Sequelize.STRING,
});

Inquiry.findById(1).then(inquiry => {
    console.log(inquiry.get({plain:true}))
});
