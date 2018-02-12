/*
 * the SQL definitions
 */

const Sequelize = require("sequelize");

const sql = new Sequelize(
    "ccs_test",
    "postgres",
    "postgres",
    {dialect: "postgres"}
);

const Inquiry = sql.define(
    "inquiry", {
	client:
	Sequelize.STRING,
	
	originator:
	Sequelize.STRING,
	
	service:
	Sequelize.STRING,
	
	adverse_parties:
	Sequelize.STRING
    }
);

const Response = sequelize.define(
    "response", {
	inquiry:
	Sequelize.INTEGER,
	
	responder:
	Sequelize.STRING,
	
	summary:
	Sequelize.ENUM("no response",
		       "no conflict",
		       "conflict"),
	
	explanation:
	Sequelize.STRING,
    }
);

// little test
Inquiry.findById(1).then(
    inquiry => {
	console.log(inquiry.get({plain:true}))
    }
);
