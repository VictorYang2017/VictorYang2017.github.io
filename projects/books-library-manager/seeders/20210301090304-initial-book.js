'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/* Seed initial books. */
		const currentDate = new Date();
		try {
			return await queryInterface.bulkInsert(
				'Books',
				[
					{
						title: "Harry Potter and the Philosopher's Stone",
						author: 'J.K. Rowling',
						genre: 'Fantasy',
						year: 1997,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'Harry Potter and the Chamber of Secrets',
						author: 'J.K. Rowling',
						genre: 'Fantasy',
						year: 1998,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'Harry Potter and the Prisoner of Azkaban',
						author: 'J.K. Rowling',
						genre: 'Fantasy',
						year: 1999,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'Harry Potter and the Goblet of Fire',
						author: 'J.K. Rowling',
						genre: 'Fantasy',
						year: 2000,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'Harry Potter and the Order of the Phoenix',
						author: 'J.K. Rowling',
						genre: 'Fantasy',
						year: 2003,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'Harry Potter and the Half-Blood Prince',
						author: 'J.K. Rowling',
						genre: 'Fantasy',
						year: 2005,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'Harry Potter and the Deathly Hallows',
						author: 'J.K. Rowling',
						genre: 'Fantasy',
						year: 2007,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'A Brief History of Time',
						author: 'Stephen Hawking',
						genre: 'Non Fiction',
						year: 1988,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'The Universe in a Nutshell',
						author: 'Stephen Hawking',
						genre: 'Non Fiction',
						year: 2001,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'Frankenstein',
						author: 'Mary Shelley',
						genre: 'Horror',
						year: 1818,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'The Martian',
						author: 'Andy Weir',
						genre: 'Science Fiction',
						year: 2014,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'Ready Player One',
						author: 'Ernest Cline',
						genre: 'Science Fiction',
						year: 2011,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'Armada',
						author: 'Ernest Cline',
						genre: 'Science Fiction',
						year: 2015,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'Pride and Prejudice',
						author: 'Jane Austen',
						genre: 'Classic',
						year: 1813,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
					{
						title: 'Emma',
						author: 'Jane Austen',
						genre: 'Classic',
						year: 1815,
						createdAt: currentDate,
						updatedAt: currentDate,
					},
				],
				{}
			);
		} catch (error) {
			console.log(error);
		}
	},

	down: async (queryInterface, Sequelize) => {
		/* Delete initial books. */
		return await queryInterface.bulkDelete('Books', null, {});
	},
};
