const Sequelize = require('sequelize');
const sequelize = new Sequelize('ccs_test', 'postgres', 'postgres', {
    dialect: 'postgres'
});

const Inquiry = sequelize.define('inquiry', {
    client: {type: Sequelize.STRING,
	     allowNull: false},
    originator: {type: Sequelize.STRING,
		 allowNull: false},
    service: Sequelize.STRING,
    adverse_parties: Sequelize.STRING,
    origin_time: {type: Sequelize.DATE,
		  defaultValue: Sequelize.NOW}
});

const Response = sequelize.define('response', {
    id: {type: Sequelize.INTEGER,
	 primaryKey: true,
	 autoIncrement: true},
    responder: {type: Sequelize.STRING,
		allowNull: false},
    summary: {type: Sequelize.ENUM('no response',
				   'no conflict',
				   'conflict'),
	      allowNull: false},
    explanation: Sequelize.STRING,
    response_time: {type: Sequelize.DATE,
		    defaultValue: Sequelize.NOW}
});

Inquiry.findById(1).then(inquiry => {
    console.log(inquiry.get({plain:true}))
});
