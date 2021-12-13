const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/* Import routes */
const indexRoute = require('./routes/index');
const booksRoute = require('./routes/books');

const app = express();

/* view engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* Static folder setup */
app.use(express.static(path.join(__dirname, 'public')));

/* 500 Error test */
// app.use((req,res,next)=>{
//   const error = new Error('Oops, something wrong!');
//   error.status = 500;
//   next(error);
// });

/* Import db */
const db = require('./models');


/* Function that runs when app first start */
(async () => {
	/* Check to see if database connection and model sync to database is a success, if not catch the error and log out*/
	try {
		/* Check for database connection */
		await db.sequelize.authenticate();
		console.log(
			'\x1b[32m%s\x1b[0m',
			'Database connection has been established...'
		);
		/* Sync the model with the database */
		await db.sequelize.sync();
	} catch (error) {
		console.log(
			'\x1b[31m%s\x1b[0m',
			'Sorry, looks like there is a problem connecting to database!'
		);
		console.error(
			'\x1b[31m%s\x1b[0m',
			`Connecting to database error: ${error}`
		);
	}
})();


/* Routes */
app.use('/', indexRoute);
app.use('/books', booksRoute);


/* catch 404 and forward to error handler */
app.use(function (req, res, next) {
	next(
		createError(404, 'Sorry, the page you are looking for does not exist...')
	);
});


/* error handler */
app.use(function (err, req, res, next) {
	const errorStatusCode = err.status;
	if (errorStatusCode === 404) {
		res.status(errorStatusCode);
		/* render the page-not-found page */
		res.render('page-not-found', { message: 'NOT FOUND', error: err });
	} else {
		const errorMessage = req.app.get('env') === 'development' ? err.message : 'Oops, looks like something went wrong...';
		const errorStack = req.app.get('env') === 'development' ? err.stack : '';

		/* Log out the error is the error is not 404 */
		console.error('\x1b[31m%s\x1b[0m', `STATUS: [${errorStatusCode}]`);
		console.error('\x1b[31m%s\x1b[0m', `ERROR MESSAGE: ${err.message}`);
		res.status(errorStatusCode || 500);
		/* render the error page */
		res.render('error', {
			message: errorMessage,
			error: err,
			errorStack: errorStack,
		});
	}
});

module.exports = app;
