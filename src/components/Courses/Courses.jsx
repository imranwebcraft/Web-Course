import PropTypes from "prop-types";
import Course from "../Course/Course";

const Courses = ({ courses, handleCourseName }) => {
	return (
		<div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:w-full lg:w-4/5">
			{courses.map((course) => (
				<Course
					key={course.id}
					course={course}
					handleCourseName={handleCourseName}
				/>
			))}
		</div>
	);
};

Courses.propTypes = {
	courses: PropTypes.array.isRequired,
	handleCourseName: PropTypes.func.isRequired,
};

export default Courses;
