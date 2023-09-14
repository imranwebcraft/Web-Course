import PropTypes from "prop-types";

const Course = ({ course }) => {
	const { course_img, course_details, course_name, credit, price } = course;
	return (
		// Single Course Card
		<div>
			<div className="bg-white">
				{/* Course Image */}
				<div>
					<img className=" w-full" src={course_img} alt="" />
				</div>
				{/* Course Name */}
				<div>
					<h1>{course_name}</h1>
				</div>
				{/* Course Details */}
				<div>
					<p>{course_details}</p>
				</div>
				{/* Course info */}
				<div>
					<button>
						<span>Price : {price}</span>
					</button>
					<button>
						<span>Credit : {credit}</span>
					</button>
				</div>
				{/* Select Button */}
				<div>
					<button className="btn bg-blue-500 text-white">
						Select
					</button>
				</div>
			</div>
		</div>
	);
};

Course.propTypes = {
	course: PropTypes.object.isRequired,
};

export default Course;
