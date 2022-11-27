const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Cart = db.define("cart", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	userId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		field: "user_id"
    },
    totalPrice: {
        type: DataTypes.FLOAT,
    }
});

module.exports = Cart;