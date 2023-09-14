import PropTypes from "prop-types";
import { LuDollarSign } from "react-icons/lu";
import { BsBook } from "react-icons/bs";
const Course = ({ course, handleCourseName }) => {
	const { id, course_img, course_details, course_name, credit, price } =
		course;
	return (
		// Single Course Card
		<div className="tracking-wide">
			<div className="bg-white rounded-lg p-4 flex flex-col h-full">
				{/* Course Image */}
				<div className="mb-4">
					<img className=" w-full" src={course_img} alt="" />
				</div>
				{/* Course Name */}
				<div className="mb-3 text-lg font-semibold text-[1C1B1B]">
					<h1>{course_name}</h1>
				</div>
				{/* Course Details */}
				<div className="mb-5 text-sm text-gray-600">
					<p>{course_details}</p>
				</div>
				<div className=" mt-auto">
					{/* Course info */}
					<div className="flex items-center justify-between text-base text-gray-600 mb-2">
						{/* Price Btn */}
						<button>
							<span className="flex items-center gap-2">
								<span className="text-gray-800">
									<LuDollarSign />
								</span>
								Price : {price}
							</span>
						</button>
						{/* Credit Btn */}
						<button>
							<span className="flex items-center gap-2">
								<span className="text-gray-800 font-black">
									<BsBook />
								</span>
								Credit : {credit}hr
							</span>
						</button>
					</div>
					{/* Select Button */}
					<div
						className="mt-auto"
						onClick={() => handleCourseName(course, id)}
					>
						<button className=" py-2 rounded-md w-full bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition-all duration-200 ease-in">
							Select
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Course.propTypes = {
	course: PropTypes.object.isRequired,
	handleCourseName: PropTypes.func.isRequired,
};

export default Course;
