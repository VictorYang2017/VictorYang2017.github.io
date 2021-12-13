// Import libraries
import React, { Component } from 'react';

// Import components
import Errors from './error/Errors';

// Import utils
import api from '../utils/fetchApiData';

class UpdateCourse extends Component {
	state = {
		courseUser: {},
		courseTitle: '',
		courseDescription: '',
		estimatedTime: '',
		materialsNeeded: '',
		errors: [],
	};

	componentDidMount() {
		// Get course id from url
		const courseId = this.props.match.params.id;
		// Get a specific course from api when component mount
		this.getCourse(courseId);
	}

	// Get a specific courses from api
	getCourse = async (courseId) => {
		// Get authenticatedUser from authContext;
		const { authenticatedUser } = this.props.context;
		try {
			const response = await api(`/courses/${courseId}`, 'GET', null);
			// Check for status code and run specific code
			if (response.status === 200) {
				const course = await response.json();
				if (authenticatedUser && authenticatedUser.userId === course.user.id) {
					this.setState({
						courseUser: course.user,
						courseTitle: course.title,
						courseDescription: course.description,
						estimatedTime: course.estimatedTime || '',
						materialsNeeded: course.materialsNeeded || '',
					});
				} else {
					this.props.history.push('/forbidden');
				}
			} else if (response.status === 404) {
				this.props.history.push('/notfound');
			} else {
				this.props.history.push('/error');
			}
		} catch (error) {
			this.props.history.push('/error');
		}
	};

	handleInputChange = (evt) => {
		evt.preventDefault();
		const name = evt.currentTarget.name;
		const value = evt.currentTarget.value;
		this.setState({ [name]: value });
	};

	// Use/call when updating a course
	submit = async (evt) => {
		evt.preventDefault();
		// Get userCredentials from authContext;
		const { userCredentials } = this.props.context;
		try {
			const response = await api(
				`/courses/${this.props.match.params.id}`,
				'PUT',
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
			if (response.status === 204) {
				this.props.history.push(`/courses/${this.props.match.params.id}`);
			} else if (response.status === 400) {
				const { errors } = await response.json();
				this.setState({ errors });
			} else if (response.status === 403) {
				this.props.history.push('/forbidden');
			} else {
				this.props.history.push('/error');
			}
		} catch (error) {
			this.props.history.push('/error');
		}
	};

	cancel = (evt) => {
		evt.preventDefault();
		this.props.history.push(`/courses/${this.props.match.params.id}`);
	};

	render() {
		return (
			<>
				<div className='wrap'>
					<h2>Update Course</h2>
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

								<p>{`By ${this.state.courseUser.firstName} ${this.state.courseUser.lastName}`}</p>

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
							Update Course
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

export default UpdateCourse;
