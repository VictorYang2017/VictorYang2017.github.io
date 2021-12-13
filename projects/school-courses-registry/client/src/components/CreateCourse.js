// Import libraries
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Import components
import Errors from './error/Errors';

// Import utils
import api from '../utils/fetchApiData';

class CreateCourse extends Component {
	state = {
		courseTitle: '',
		courseDescription: '',
		estimatedTime: '',
		materialsNeeded: '',
		errors: [],
	};

	handleInputChange = (evt) => {
		evt.preventDefault();
		const name = evt.currentTarget.name;
		const value = evt.currentTarget.value;
		this.setState({ [name]: value });
	};

	// Use/call when creating a course
	submit = async (evt) => {
		evt.preventDefault();
		// Get userCredentials from authContext;
		const { userCredentials } = this.props.context;
		try {
			const response = await api(
				'/courses',
				'POST',
				{
					title: this.state.courseTitle,
					description: this.state.courseDescription,
					estimatedTime: this.state.estimatedTime || null,
					materialsNeeded: this.state.materialsNeeded || null,
				},
				true,
				userCredentials
			);
			// Check for status code and run specific code
			if (response.status === 201) {
				this.props.history.push('/');
			} else if (response.status === 400) {
				const { errors } = await response.json();
				this.setState({ errors });
			} else {
				this.props.history.push('/error');
			}
		} catch (error) {
			this.props.history.push('/error');
		}
	};

	cancel = (evt) => {
		evt.preventDefault();
		this.props.history.push('/');
	};

	render() {
		// Get authenticatedUser from authContext;
		const { authenticatedUser } = this.props.context;
		if (!authenticatedUser) return <Redirect to='/forbidden' />;
		return (
			<>
				<div className='wrap'>
					<h2>Create Course</h2>
					{this.state.errors.length > 0 && (
						<Errors errors={this.state.errors} />
					)}
					<form onSubmit={this.submit}>
						<div className='main--flex'>
							<div>
								<label htmlFor='courseTitle'>Course Title</label>
								<input
									id='courseTitle'
									name='courseTitle'
									type='text'
									value={this.state.courseTitle}
									onChange={this.handleInputChange}
								/>

								<p>{`By ${authenticatedUser.userFirstName} ${authenticatedUser.userLastName}`}</p>

								<label htmlFor='courseDescription'>Course Description</label>
								<textarea
									id='courseDescription'
									name='courseDescription'
									value={this.state.courseDescription}
									onChange={this.handleInputChange}
								></textarea>
							</div>
							<div>
								<label htmlFor='estimatedTime'>Estimated Time</label>
								<input
									id='estimatedTime'
									name='estimatedTime'
									type='text'
									value={this.state.estimatedTime}
									onChange={this.handleInputChange}
								/>

								<label htmlFor='materialsNeeded'>Materials Needed</label>
								<textarea
									id='materialsNeeded'
									name='materialsNeeded'
									value={this.state.materialsNeeded}
									onChange={this.handleInputChange}
								></textarea>
							</div>
						</div>
						<button className='button' type='submit'>
							Create Course
						</button>
						<button className='button button-secondary' onClick={this.cancel}>
							Cancel
						</button>
					</form>
				</div>
			</>
		);
	}
}

export default CreateCourse;
