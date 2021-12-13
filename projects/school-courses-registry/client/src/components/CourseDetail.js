// Import libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Import utils
import api from '../utils/fetchApiData';

class CourseDetail extends Component {
	state = {
		course: { user: {} },
	};

	componentDidMount() {
		// Get course id from url
		const courseId = this.props.match.params.id;
		// Get a specific course from api when component mount
		this.getCourse(courseId);
	}

	// Get a specific courses from api
	getCourse = async (courseId) => {
		try {
			const response = await api(`/courses/${courseId}`, 'GET', null);
			// Check for status code and run specific code
			if (response.status === 200) {
				const course = await response.json();
				this.setState({ course });
			} else if (response.status === 404) {
				this.props.history.push('/notfound');
			} else {
				this.props.history.push('/error');
			}
		} catch (error) {
			this.props.history.push('/error');
		}
	};

	// Use/call when deleting a specific course
	handleDeleteCourse = async (evt) => {
		evt.preventDefault();
		// Get userCredentials from authContext;
		const { userCredentials } = this.props.context;
		try {
			const response = await api(
				`/courses/${this.state.course.id}`,
				'DELETE',
				null,
				true,
				userCredentials
			);
			// Check for status code and run specific code
			if (response.status === 204) {
				this.props.history.push('/');
			} else if (response.status === 404) {
				this.props.history.push('/notfound');
			} else {
				this.props.history.push('/error');
			}
		} catch (error) {
			this.props.history.push('/error');
		}
	};

	render() {
		// Get authenticatedUser from authContext;
		const { authenticatedUser } = this.props.context;
		return (
			<>
				<div className='actions--bar'>
					<div className='wrap'>
						{authenticatedUser &&
						authenticatedUser.userId === this.state.course.user.id ? (
							<>
								<Link
									to={`/courses/${this.state.course.id}/update`}
									className='button'
								>
									Update Course
								</Link>
								<Link
									to='#'
									className='button'
									onClick={this.handleDeleteCourse}
								>
									Delete Course
								</Link>
							</>
						) : (
							''
						)}

						<Link to='/' className='button button-secondary'>
							Return to List
						</Link>
					</div>
				</div>
				<div className='wrap'>
					<h2>Course Detail</h2>
					<form>
						<div className='main--flex'>
							<div>
								<h3 className='course--detail--title'>Course</h3>
								<h4 className='course--name'>{this.state.course.title}</h4>
								<p>{`By ${this.state.course.user.firstName} ${this.state.course.user.lastName}`}</p>

								<ReactMarkdown children={this.state.course.description} />
							</div>
							<div>
								<h3 className='course--detail--title'>Estimated Time</h3>
								<p>{this.state.course.estimatedTime}</p>

								<h3 className='course--detail--title'>Materials Needed</h3>
								<ul className='course--detail--list'>
									<ReactMarkdown children={this.state.course.materialsNeeded} />
								</ul>
							</div>
						</div>
					</form>
				</div>
			</>
		);
	}
}

export default CourseDetail;
