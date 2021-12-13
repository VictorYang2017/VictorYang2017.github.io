'use strict';
$(function () {
	/* Variables */
	// Global variables
	var userDetailData = {};
	var animationClassData = null;
	var userDetailsArray = null;
	// Target DOM variables
	var mainBody = $('body'),
		mainContainerHTML = $('#main-container'),
		mainSectionHTML = $('.main-section'),
		loginContainerHTML = $('.login-input-container'),
		inputContainer = $('.input-container'),
		usernameInputHTML = $('.username-input'),
		passwordInputHTML = $('.password-input'),
		bothInputBoxesHTML = $('input'),
		loginInputComponents = $('.login-input-container--components'),
		loginButtonHTML = $('.login-input-container--button'),
		signUpNowPTagHTML = $('.sign-up-now'),
		bothErrorMsgHTML = $('.error-msg'),
		bothErrorMessageHTML = $('.error-message'),
		usernameErrorMsgHTML = $('.username-error-msg'),
		passwordErrorMsgHTML = $('.password-error-msg');

	/* Functions for the website */
	function init() {
		// User details datas

		// Getting animation datas from the animation class json files
		$.getJSON('json/animation-class.json', function (animationClassJSONData) {
			animationClassData = animationClassJSONData.animationClass;
		});
		// Login button onclick
		loginButtonHTML.on('click', function () {
			loginButtonHTML.removeClass('button-effect');
			loginButtonHTML.outerWidth();
			loginButtonHTML.addClass('button-effect');
			startAllTheFunctionCall();
		});

		bothInputBoxesHTML.on('keypress', function (event) {
			if (event.which === 13) {
				loginButtonHTML.removeClass('button-effect-two');
				loginButtonHTML.outerWidth();
				loginButtonHTML.addClass('button-effect-two');
				startAllTheFunctionCall();
			}
		});

		// Sign up now on click
		signUpNowPTagHTML.on('click', function () {
			displaySignUpNow();
		});
	}

	function startAllTheFunctionCall() {
		getTheUsernameErrorMsg();
		getThePasswordErrorMsg();
	}

	// Checking the username data
	function getTheUsernameErrorMsg() {
		var usernameInputHTMLValue = usernameInputHTML.val();
		var cloneOfUsernameErrorMsgHTMLDiv = usernameErrorMsgHTML.clone();
		usernameErrorMsgHTML.after(cloneOfUsernameErrorMsgHTMLDiv);
		usernameErrorMsgHTML.remove();
		usernameErrorMsgHTML[0] = cloneOfUsernameErrorMsgHTMLDiv[0];
		usernameInputHTML.removeClass('input-error-msg');
		usernameInputHTML.outerWidth();
		if (usernameInputHTMLValue !== userDetailData.username) {
			usernameInputHTML.addClass('input-error-msg');
			usernameErrorMsgHTML.addClass('error-msg');
		} else {
			usernameErrorMsgHTML.removeClass('error-msg');
			usernameInputHTML.removeClass('input-error-msg');
		}
	}
	// checking the password data
	function getThePasswordErrorMsg() {
		var passwordInputHTMLValue = passwordInputHTML.val();
		var cloneOfPasswordErrorMsgHTMLDiv = passwordErrorMsgHTML.clone();
		passwordErrorMsgHTML.after(cloneOfPasswordErrorMsgHTMLDiv);
		passwordErrorMsgHTML.remove();
		passwordErrorMsgHTML[0] = cloneOfPasswordErrorMsgHTMLDiv[0];
		passwordInputHTML.removeClass('input-error-msg');
		passwordInputHTML.outerWidth();
		if (passwordInputHTMLValue !== userDetailData.password) {
			passwordInputHTML.addClass('input-error-msg');
			passwordErrorMsgHTML.addClass('error-msg');
		} else {
			passwordErrorMsgHTML.removeClass('error-msg');
			passwordInputHTML.removeClass('input-error-msg');
			getTheAnimationDropDownOptions();
		}
	}

	// Get the animation drop down options
	function getTheAnimationDropDownOptions() {
		var animationClass = '';
		$.each(animationClassData, function (i, eachAnimationClassTitle) {
			animationClass += `<option ${eachAnimationClassTitle.disabled} id="${eachAnimationClassTitle.id}"class="animation-class-option" value="${eachAnimationClassTitle.slug}">${eachAnimationClassTitle.title}</option>`;
		});
		displayTheWelcomeMessage(animationClass);
	}

	// Displaying the login message
	function displayTheWelcomeMessage(animationClass) {
		var usernameInputHTMLValue = usernameInputHTML.val(),
			passwordInputHTMLValue = passwordInputHTML.val();
		var checkUsername = usernameInputHTMLValue === userDetailData.username,
			checkPassword = passwordInputHTMLValue === userDetailData.password;
		var afterLoggedIn = `<div class="hello-screen-container">
        <div class="hello-screen animated">
            <div class="hello-screen-the-message">Hello, welcome back <p class="hello-screen-firstname">${userDetailData.firstName}</p><p class="hello-screen-lastname">${userDetailData.lastName}!<p></div>
            <h6>Your current account was registered on the ${userDetailData.userRegisterDate}</h6>
        </div>
        <div class="dropdown-for-animation">
           <select>${animationClass}</select>
        </div>
        <div class="dropdown-intro">&uarr; Wanna see something really cool? &uarr;</div>
        <div class="button-for-animate">Click me!</div>
    </div>`;
		if (checkUsername && checkPassword) {
			mainSectionHTML.hide();
			mainContainerHTML.html(afterLoggedIn);
			getWelcomeMessage($('.hello-screen'), 5000);
		}

		var buttonForAnimateHTML = $('.button-for-animate');
		var dropdownForAnimation = $('select');
		var HelloWelcomeWord = $('.hello-screen');
		dropdownForAnimation.val('choose-something-in-here').change();
		buttonForAnimateHTML.on('click', function () {
			getTheWelcomeMessageAnimationAndButtonEffect(
				buttonForAnimateHTML,
				dropdownForAnimation,
				HelloWelcomeWord
			);
		});

		dropdownForAnimation.on('keypress', function (event) {
			if (event.which === 13) {
				getTheWelcomeMessageAnimationAndButtonEffect(
					buttonForAnimateHTML,
					dropdownForAnimation,
					HelloWelcomeWord
				);
			}
		});
	}
	// Getting all the welcome screens animation and button effect
	function getTheWelcomeMessageAnimationAndButtonEffect(
		buttonForAnimateHTML,
		dropdownForAnimation,
		HelloWelcomeWord
	) {
		buttonForAnimateHTML.removeClass('button-effect-two');
		buttonForAnimateHTML.outerWidth();
		buttonForAnimateHTML.addClass('button-effect-two');
		var dropdownForAnimationValue = dropdownForAnimation.val();
		HelloWelcomeWord.bind(
			'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',
			function () {
				$(this).removeClass(dropdownForAnimationValue);
			}
		).addClass(dropdownForAnimationValue);
	}
	// Getting the welcome message and animate it
	function getWelcomeMessage(helloMessage, msgMovingSpeed) {
		helloMessage.animate(
			{ marginLeft: '32%' },
			{
				duration: msgMovingSpeed,
				easing: 'linear',
			}
		);
		helloMessage.animate(
			{ marginLeft: '-32%' },
			{
				duration: msgMovingSpeed,
				easing: 'linear',
				complete: function () {
					getWelcomeMessage(helloMessage, msgMovingSpeed);
				},
			}
		);
	}

	// Getting the sign up container and inputs
	function displaySignUpNow() {
		loginContainerHTML.detach();
		var signUpComponents = `<div class="sign-up-container input-container">
        <div class="sign-up-back-button">
            <div class="back-button">&lsaquo;</div>
        </div>
        <form class="sign-up-form">
            <div class="first-name-last-name">
                <div class="first-name">
                    <div class="first-name-heading signup-input-heading">
                        <h3>First Name</h3>
                    </div>
                    <input type="text" class="first-name-input form-signup-input clean" name="first-name" placeholder="Jack">
                </div>
                <div class="last-name">
                    <div class="last-name-heading signup-input-heading">
                        <h3>Last Name</h3>
                    </div>
                    <input type="text" class="last-name-input form-signup-input clean" name="last-name" placeholder="Campbell">
                </div>
            </div>            
            <div class="gender">
                <div class="male-female">
                    <div class="gender-heading signup-input-heading">
                        <h3>Gender</h3>
                    </div>
                    <select class="gender-options select-clean">
                        <option value="disable" disabled>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>
            <div class="email-address">
                <div class="email-address-heading signup-input-heading">
                    <h3>Email</h3>
                </div>
                <input type="text" class="email form-signup-input clean" name="email" placeholder="jackcampbell@example.com">
            </div>
            <div class="form-username-password">
                <div class="form-username">
                    <div class="form-username-heading signup-input-heading">
                        <h3>Username</h3>
                    </div>
                    <input type="text" class="form-username-input form-signup-input clean" name="username" maxlength="10" placeholder="5 to 10 char">
                </div>
                <div class="form-password">
                    <div class="form-password-heading signup-input-heading">
                        <h3>Password</h3>
                    </div>
                    <input type="password" class="form-password-input form-signup-input clean" name="password" maxlength="15" placeholder="8 to 15 char">
                </div>
            </div>
        </form>
        <div class="submit-button">
            <div class="submit">Sign Up</div>
        </div>
    </div>`;
		mainSectionHTML.append(signUpComponents);
		var backButton = $('.back-button');
		var signUpContainer = $('.sign-up-container');
		var genderOptions = $('.gender-options');
		genderOptions.val('disable');
		// Back button on the sign up screen, on click
		backButton.on('click', function (event) {
			event.preventDefault();
			signUpContainer.detach();
			bothInputBoxesHTML.val('');
			clearOutTheErrorMsgAndInputFieldValue();
			mainSectionHTML.append(loginContainerHTML);
		});

		// Submit button on click effect
		var submitButton = $('.submit-button');
		var allSignUpScreenInputFields = $('.form-signup-input');
		submitButton.on('click', function (event) {
			event.preventDefault();
			proceedSignUp(submitButton, signUpContainer);
		});
		allSignUpScreenInputFields.on('keypress', function (event) {
			if (event.which === 13) {
				proceedSignUp(submitButton, signUpContainer);
			}
		});
	}

	// Removing the login page input field auto fire error message and clear out the input field
	function clearOutTheErrorMsgAndInputFieldValue() {
		bothInputBoxesHTML.removeClass('input-error-msg');
		usernameErrorMsgHTML.removeClass('error-msg');
		passwordErrorMsgHTML.removeClass('error-msg');
	}
	// Function of after the user clicked the sign up button
	function proceedSignUp(submitButton, signUpContainer) {
		submitButton.removeClass('button-effect');
		submitButton.outerWidth();
		submitButton.addClass('button-effect');
		checkInputFieldsToRegex(signUpContainer);
	}

	function checkInputFieldsToRegex(signUpContainer) {
		var firstNameInputSignUpHTML = $('.first-name-input'),
			lastNameInputSignUpHTML = $('.last-name-input'),
			genderSelectSignUpHTML = $('.gender-options'),
			emailInputSignUpHTML = $('.email'),
			formUsernameInputSignUpHTML = $('.form-username-input'),
			formPasswordInputSignUpHTML = $('.form-password-input');
		var firstNameRegex = /^[a-z ,.'-]+$/i;
		var lastNameRegex = /^[a-z ,.'-]+$/i;
		var emailRegex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var usernameRegex = /^[a-zA-Z0-9.\-_$@*!]{5,10}$/;
		var passwordRegex = /^[a-zA-Z0-9.\-_$@*!]{8,15}$/;
		// Test variables
		var firstNameRegexCheck = firstNameRegex.test(
			firstNameInputSignUpHTML.val()
		);
		var lastNameRegexCheck = lastNameRegex.test(lastNameInputSignUpHTML.val());
		var genderCheck =
			genderSelectSignUpHTML.val() === 'male' ||
			genderSelectSignUpHTML.val() === 'female';
		var emailRegexCheck = emailRegex.test(emailInputSignUpHTML.val());
		var usernameRegexCheck = usernameRegex.test(
			formUsernameInputSignUpHTML.val()
		);
		var passwordRegexCheck = passwordRegex.test(
			formPasswordInputSignUpHTML.val()
		);
		var inputAndRegexArrayO = [
			{
				regexCheck: firstNameRegexCheck,
				inputClassName: firstNameInputSignUpHTML,
			},
			{
				regexCheck: lastNameRegexCheck,
				inputClassName: lastNameInputSignUpHTML,
			},

			{
				regexCheck: emailRegexCheck,
				inputClassName: emailInputSignUpHTML,
			},

			{
				regexCheck: usernameRegexCheck,
				inputClassName: formUsernameInputSignUpHTML,
			},

			{
				regexCheck: passwordRegexCheck,
				inputClassName: formPasswordInputSignUpHTML,
			},
			{
				regexCheck: genderCheck,
				inputClassName: genderSelectSignUpHTML,
			},
		];
		checkTheInputAndRegexArrayO(inputAndRegexArrayO, signUpContainer);
	}

	function checkTheInputAndRegexArrayO(inputAndRegexArrayO, signUpContainer) {
		var falseDatas = [];
		$.each(inputAndRegexArrayO, function (i, eachRegexCheck) {
			if (eachRegexCheck.regexCheck === false) {
				falseDatas.push(eachRegexCheck);
			} else if (eachRegexCheck.regexCheck === true) {
				eachRegexCheck.inputClassName.removeClass('not-valid');
			}
		});
		$.each(falseDatas, function (i, falseData) {
			falseData.inputClassName.removeClass('not-valid');
			falseData.inputClassName.outerWidth();
			falseData.inputClassName.addClass('not-valid');
		});
		if (falseDatas.length === 0) {
			getAllTheValue(signUpContainer);
		}
	}

	// Getting all the sign up values
	function getAllTheValue(signUpContainer) {
		var firstNameInputSignUpHTML = $('.first-name-input'),
			lastNameInputSignUpHTML = $('.last-name-input'),
			genderSelectSignUpHTML = $('.gender-options'),
			emailInputSignUpHTML = $('.email'),
			formUsernameInputSignUpHTML = $('.form-username-input'),
			formPasswordInputSignUpHTML = $('.form-password-input');

		// input values
		var firstNameInputSignUpHTMLValue = firstNameInputSignUpHTML.val();
		var lastNameInputSignUpHTMLValue = lastNameInputSignUpHTML.val();
		var genderSelectSignUpHTMLValue = genderSelectSignUpHTML.val();
		var emailInputSignUpHTMLValue = emailInputSignUpHTML.val();
		var formUsernameInputSignUpHTMLValue = formUsernameInputSignUpHTML.val();
		var formPasswordInputSignUpHTMLValue = formPasswordInputSignUpHTML.val();
		// new datas
		var firstname = firstNameInputSignUpHTMLValue,
			lastname = lastNameInputSignUpHTMLValue,
			gender = genderSelectSignUpHTMLValue,
			theemail = emailInputSignUpHTMLValue,
			theusername = formUsernameInputSignUpHTMLValue,
			thepassword = formPasswordInputSignUpHTMLValue;

		pushInToTheUserDataObject(
			firstname,
			lastname,
			gender,
			theemail,
			theusername,
			thepassword,
			signUpContainer
		);
	}

	// Put all the user sign up value into the global user data object
	function pushInToTheUserDataObject(
		firstname,
		lastname,
		gender,
		theemail,
		theusername,
		thepassword,
		signUpContainer
	) {
		userDetailData.firstName = firstname;
		userDetailData.lastName = lastname;
		userDetailData.theGender = gender;
		userDetailData.theEmail = theemail;
		userDetailData.username = theusername;
		userDetailData.password = thepassword;
		var currentDate = new Date();
		var day = currentDate.getDate();
		var month = currentDate.getMonth() + 1;
		var year = currentDate.getFullYear();
		var registeredDate = day + '/' + month + '/' + year;
		userDetailData.userRegisterDate = registeredDate;
		var wipeInputInSignUpScreen = $('.clean');
		var genderBackToOriginal = $('.select-clean');
		wipeInputInSignUpScreen.val('');
		genderBackToOriginal.val('disable');
		signUpContainer.detach();
		bothInputBoxesHTML.val('');
		clearOutTheErrorMsgAndInputFieldValue();
		mainSectionHTML.append(loginContainerHTML);
	}

	init();
});
