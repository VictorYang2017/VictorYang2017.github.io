// Import libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import utils
import api from '../utils/fetchApiData';

class Courses extends Component {
	state = {
		courses: [],
	};

	componentDidMount() {
		// Get all courses from api when component mount
		this.getCourses();
	}

	// Get all courses from api
	getCourses = async () => {
		try {
			const response = await api('/courses', 'GET', null);
			// Check for status code and run specific code
			if (response.status === 200) {
				const courses = await response.json();
				this.setState({ courses });
			} else {
				this.props.history.push('/error');
			}
		} catch (error) {
			this.props.history.push('/error');
		}
	};

	render() {
		return (
			<>
				<div className='wrap main--grid'>
					{this.state.courses.map((course) => {
						return (
							<Link
								to={`/courses/${course.id}`}
								key={course.id}
								className='course--module course--link'
							>
								<h2 className='course--label'>Course</h2>
								<h3 className='course--title'>{course.title}</h3>
							</Link>
						);
					})}

					<Link
						to='/courses/create'
						className='course--module course--add--module'
					>
						<span className='course--add--title'>
							<svg
								version='1.1'
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								viewBox='0 0 13 13'
								className='add'
							>
								<polygon points='7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 '></polygon>
							</svg>
							New Course
						</span>
					</Link>
				</div>
			</>
		);
	}
}

export default Courses;
