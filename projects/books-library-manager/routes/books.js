const express = require('express');
const router = express.Router();

/* Import db and "Book" model */
const db = require('../models');
const { Book } = db;

// Import asyncHandler helper function
const asyncHandler = require('../helpers/asyncHandler');

/**
 ** (GET)
 ** Get and show all the books!
 */
router.get(
	'/',
	asyncHandler(async (req, res) => {
		/* If page query and search query does not exist, set it to default value */
		const pageQuery = parseInt(req.query.page) || 1;
		const searchQuery = req.query.search || '';
		const bookPerPage = 12;
		const retrieveBooksFrom = (pageQuery - 1) * bookPerPage;
		let books;
		/* Sequelize method that comes back with filtered data and number of data */
		books = await Book.findAndCountAll({
			where: {
				[db.Sequelize.Op.or]: [
					{
						title: {
							[db.Sequelize.Op.like]: `%${searchQuery}%`,
						},
					},
					{
						author: {
							[db.Sequelize.Op.like]: `%${searchQuery}%`,
						},
					},
					{
						genre: {
							[db.Sequelize.Op.like]: `%${searchQuery}%`,
						},
					},
					{
						year: {
							[db.Sequelize.Op.like]: `%${searchQuery}%`,
						},
					},
				],
			},
			/* For pagination */
			offset: retrieveBooksFrom,
			limit: bookPerPage,
		});
		const pages = Math.ceil(books.count / bookPerPage);
		const searchQueryExist = searchQuery !== '' ? searchQuery : false;

		/* To check if the page exist and if search query exist and choose the correct redirect also 
		it checks if "books" contain any data, if not, no redirect will run  */
		if ((books.count > 0 && pageQuery > pages) || pageQuery <= 0) {
			if (searchQueryExist) {
				return res.redirect(`/books?page=1&search=${searchQuery}`);
			} else {
				return res.redirect('/books?page=1');
			}
		}

		/* Render the index page */
		res.render('index', {
			books: books.rows,
			pageTitle: 'Books',
			numOfpages: pages,
			searchQueryExist,
			currentPage: pageQuery,
		});
	})
);

/**
 ** (GET)
 **  Show create new book form!
 */
router.get('/new', (req, res) => {
	/* Render the new-book page */
	res.render('new-book', { newBook: {}, pageTitle: 'New Book' });
});

/**
 ** (GET)
 ** Show book update form!
 */
router.get(
	'/:id',
	asyncHandler(async (req, res, next) => {
		const bookId = req.params.id;
		const book = await Book.findByPk(bookId);

		/* check if the book exist in database */
		if (book) {
			/* Render the update-book page */
			res.render('update-book', { book, pageTitle: 'Update Book' });
		} else {
			const notFoundError = new Error(
				'Oops, the book you are looking for does not exist!'
			);
			notFoundError.status = 404;
			next(notFoundError);
		}
	})
);

/**
 ** (POST)
 ** Add/insert new book to database!
 */
router.post(
	'/new',
	asyncHandler(async (req, res) => {
		const { title, author, genre, year } = req.body;
		/* Insert/add book data to databse and redirect but if fail catech the error */
		try {
			await Book.create({ title, author, genre, year });
			res.redirect('/books');
		} catch (error) {
			/* If the error is "SequelizeValidationError" render the view and pass error to it, if not just throw error */
			if (error.name === 'SequelizeValidationError') {
				/* Render the new-book page */
				res.render('new-book', {
					newBook: { title, author, genre, year },
					errorName: error.name,
					errors: error.errors,
					pageTitle: 'New Book',
				});
			} else {
				throw error;
			}
		}
	})
);

/**
 ** (POST)
 ** Update book info in database!
 */
router.post(
	'/:id',
	asyncHandler(async (req, res) => {
		const bookId = req.params.id;
		const { title, author, genre, year } = req.body;
		/* update a book data in databse and redirect but if fail catech the error */
		try {
			await Book.update(
				{ title, author, genre, year },
				{
					where: {
						id: bookId,
					},
				}
			);
			res.redirect('/books');
		} catch (error) {
			/* If the error is "SequelizeValidationError" render the view and pass error to it, if not just throw error */
			if (error.name === 'SequelizeValidationError') {
				/* Render the update-book page */
				res.render('update-book', {
					book: { id: bookId, title, author, genre, year },
					errorName: error.name,
					errors: error.errors,
					pageTitle: 'Update Book',
				});
			} else {
				throw error;
			}
		}
	})
);

/**
 ** (POST)
 ** Delete book in database!
 */
router.post(
	'/:id/delete',
	asyncHandler(async (req, res) => {
		const bookId = req.params.id;
		const findDelBook = await Book.findByPk(bookId);

		/* check if the book exist in database */
		if (findDelBook) {
			await findDelBook.destroy();
			res.redirect('/books');
		} else {
			const notFoundError = new Error(
				'Oops, the book you are looking for does not exist!'
			);
			notFoundError.status = 404;
			next(notFoundError);
		}
	})
);

module.exports = router;
