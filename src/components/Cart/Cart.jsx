import PropTypes from "prop-types";
const Cart = ({ coursesName }) => {
	console.log(coursesName);
	return (
		<div className="sm:w-full lg:w-1/5">
			<div className="bg-white p-6 rounded-lg">
				{/* Credit Hour */}
				<div>
					<h1 className="text-xl font-bold">
						Credit Hour Remaining:
					</h1>
					<div className="border my-4"></div>
				</div>

				{/* Course Name List */}
				<div>
					<div className=" mb-5">
						<h1 className="text-xl font-bold">Course Name</h1>
					</div>
					<ol className=" list-decimal list-inside text-gray-600">
						{coursesName.map((courseName) => (
							<li className=" mb-1" key={courseName.id}>
								{courseName.course_name}
							</li>
						))}
					</ol>
					<div className="border my-5"></div>
				</div>

				{/* Total Credit Hour */}
				<div>
					<h1 className="text-xl font-bold">Total Credit Hour:</h1>
					<div className="border my-4"></div>
				</div>
				{/* Total Price */}

				<div>
					<h1 className="text-xl font-bold">Total Price:</h1>
				</div>
			</div>
		</div>
	);
};

Cart.propTypes = {
	coursesName: PropTypes.array.isRequired,
};

export default Cart;
