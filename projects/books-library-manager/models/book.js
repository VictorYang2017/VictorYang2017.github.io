'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Book extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
	}
	Book.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: 'Sorry, "Title" can not be null!',
					},
					notEmpty: {
						msg: 'Sorry, "Title" can not be empty!',
					},
				},
			},
			author: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: 'Sorry, "Author" can not be null!',
					},
					notEmpty: {
						msg: 'Sorry, "Author" can not be empty!',
					},
				},
			},
			genre: DataTypes.STRING,
			year: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Book',
		}
	);
	return Book;
};
